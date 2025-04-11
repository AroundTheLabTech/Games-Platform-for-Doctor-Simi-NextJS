"use client";

import { useEffect, useState } from "react";
import { useRouter } from 'next/navigation';
import { auth } from "../../../lib/firebase";
import { doc, getDoc, setDoc, collection, addDoc, serverTimestamp } from "firebase/firestore"; // Importar funciones necesarias
import { db } from "../../../lib/firebase";
import { getListAvalibleCompetition, putCompetitionSession, postSessionGame } from "../../services/backend"

export default function Game() {
  const [selectedGame, setSelectedGame] = useState(null);
  const [currentScore, setCurrentScore] = useState(0);
  const [scoreWon, setScoreWon] = useState(0);
  const [iframeVisible, setIframeVisible] = useState(true);
  const [showModal, setShowModal] = useState(true);
  const [showRotateScreen, setShowRotateScreen] = useState(false);
  const [previusScore, setPreviusScore] = useState(0);
  const router = useRouter();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const game = localStorage.getItem("selectedGame");
    setSelectedGame(game);

    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        setUser(user);

        const userDoc = await getDoc(doc(db, "scores", user.uid));
        if (userDoc.exists() && userDoc.data()[game]) {
          const initialScore = Number(userDoc.data()[game]) || 0;
          setCurrentScore(initialScore);
          console.log("Puntaje inicial desde la base de datos:", initialScore);
        }
      } else {
        router.push('/');
      }
    });

    const handlePostMessage = (event) => {
      console.log("Mensaje recibido:", event.data);

      if (selectedGame === "juego1") {
        if (event.data && typeof event.data.score !== 'undefined') {
          const scoreValue = Number(event.data.score);
          console.log("Valor recibido desde el postMessage (juego1):", scoreValue);

          setCurrentScore((prevScore) => {
            const updatedScore = prevScore + scoreValue;
            console.log("Nuevo puntaje acumulado (juego1):", updatedScore);
            setIframeVisible(false); // Cerrar el iframe
            return updatedScore;
          });

          setScoreWon(scoreValue)
        }
      } else if (selectedGame === "juego3" && event.data && typeof event.data.number !== 'undefined') {
        setCurrentScore((prevScore) => {
          const updatedScore = prevScore + 1;
          console.log("Suma de +1 al puntaje actual (juego3):", updatedScore);
          return updatedScore;
        });

        setScoreWon(1)
      } else if (selectedGame === "juego4") {
        if (event.data && typeof event.data.score !== 'undefined') {
          const scoreValue = Number(event.data.score);
          console.log("Valor recibido desde el postMessage (juego4):", scoreValue);

          setCurrentScore(scoreValue); // Actualiza el puntaje actual
          setScoreWon(scoreValue)
        }
      } else if (selectedGame === "juego5") {
        if (event.data && event.data.type === "scoreUpdate") {

          const scoreValue = Number(event.data.score);

          if (scoreValue > 0) {
            if (previusScore != scoreValue && scoreValue > previusScore) {
              setCurrentScore(scoreValue);
              setScoreWon(scoreValue);
              setPreviusScore(scoreValue);
            }
          }
        }
      } else if (selectedGame === "juego6") {
        if (event.data && event.data.type === "scoreUpdate") {
          const scoreValue = Number(event.data.score);

          if (scoreValue > 0) {
            if (previusScore != scoreValue && scoreValue > previusScore) {
              setCurrentScore(scoreValue);
              setScoreWon(scoreValue);
              setPreviusScore(scoreValue);
            }
          }
        }
      }
    };

    window.addEventListener("message", handlePostMessage);

    const handleOrientationChange = () => {
      if (window.innerWidth < window.innerHeight) {
        setShowRotateScreen(true);
      } else {
        setShowRotateScreen(false);
      }
    };

    window.addEventListener("resize", handleOrientationChange);
    handleOrientationChange();

    return () => {
      window.removeEventListener("message", handlePostMessage);
      window.removeEventListener("resize", handleOrientationChange);
      unsubscribe();
    };
  }, [selectedGame]);

  async function addCompetitionSession(sessionId) {
    console.log(user.uid, sessionId);
    const activeCompetitions = await getListAvalibleCompetition(user.uid);

    console.log("competitionActive", activeCompetitions)

    if (activeCompetitions && activeCompetitions.length > 0) {
      activeCompetitions.map(async (competition) => {

        const newCompetitionSession = {
          user_uid: user.uid,
          opponent_uid: competition.UID,
          unique_id: competition.id,
          session_id: sessionId,
        };

        console.log("newCompetitionSession", newCompetitionSession)

        const competitionSession = await putCompetitionSession(newCompetitionSession);

        console.log(competitionSession)

        if (competitionSession.message) {
          console.log(competitionSession.message);
        }
      });
    }
  }

  const handleExit = async () => {
    if (user) {
      try {
        console.log("Puntaje que se sube a la base de datos:", currentScore);

        // Guardar el score actualizado en la colección scores
        /*
        await setDoc(doc(db, "scores", user.uid), {
          [selectedGame]: currentScore,
        }, { merge: true });

        // Guardar el puntaje y la hora en la subcolección sessions
        const sessionRef = collection(db, "scores", user.uid, "sessions");
        await addDoc(sessionRef, {
          score: currentScore,
          timestamp: serverTimestamp()
        });
        */

        console.log(currentScore)

        const gameNumber = selectedGame.replace('juego', '');

        const newGameSession = {
          uid: user.uid,
          score: Number(scoreWon),
          numberGame: Number(gameNumber),
        };

        const response = await postSessionGame(newGameSession);

        console.log("session?", response)

        if (response.message && response.session_id) {
          addCompetitionSession(response.session_id);
        }

        router.push('/dashboard');
      } catch (error) {
        console.error("Error al guardar el score en Firestore", error);
      }
    }
  }; ''

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const getGameTitle = (game) => {
    switch (game) {
      case "juego1":
        return "Doctor Simi Invade";
      case "juego2":
        return "Doctor Simi Run";
      case "juego3":
        return "Simi Slash";
      case "juego4":
        return "Simi Life";
      case "juego5":
        return "Simi Globo";
      case "juego6":
        return "Tower Defense";
      case "juego7":
        return "Simi Gomitas";
      default:
        return "Juego Desconocido";
    }
  };

  const getGameInstructions = (game) => {
    switch (game) {
      case "juego1":
        return "¡No permitas que lleguen al centro! Lanza medicamentos a los virus para eliminarlos. Acumula los puntos que dejan al ser destruidos, para subir los niveles de ataque, defensa y velocidad.";
      case "juego2":
        return "¡No Ganas Hasta Llegar al Zócalo de CDMX!, salta, esquiva y recolecta monedas para llegar al final del nivel. Y obtendrás una medalla de oro";
      case "juego3":
        return "¡No Cortes al Simi! Corta las roscas de reyes lo más rápido posible.";
      case "juego4":
        return "¡Usa las teclas para moverte entre el bosque! No dejes que te toquen";
      case "juego5":
        return "¡Evita que Simi se choque con los obstaculos del cielo!";
      case "juego6":
        return "¡Instala torres para defender el hospital y trata a los enfermos!";
      case "juego7":
        return "¡Realiza conexiones entre los simis! Conecta a los simis de la misma forma para ganar puntos.";
      default:
        return "Pronto vendras más";
    }
  };

  const getIframeSrc = (game) => {
    switch (game) {
      case "juego1":
        return "source-game/game-1/public-game/index.html";
      case "juego2":
        return "source-game/game-2/public/index.html";
      case "juego3":
        return "source-game/game-3/release/index.html";
      case "juego4":
        return "source-game/game-4/index.html";
      case "juego5":
        return "source-game/game-5/index.html";
      case "juego6":
        return "source-game/game-6/index.html";
      case "juego7":
        return "source-game/game-7/index.html";
      default:
        return "";
    }
  };

  if (!selectedGame) {
    return <p>Cargando juego...</p>;
  }

  return (
    <main className="container-game">
      <div className="container-interface-game">
        {showModal && (
          <div className="modal">
            <div className="modal-content">
              <h2>Instrucciones</h2>
              <p>{getGameInstructions(selectedGame)}</p>
              <button className="push--flat-blue" onClick={handleCloseModal}>
                <h3>JUGAR</h3>
              </button>
            </div>
          </div>
        )}

        {showRotateScreen && (
          <div className="rotate-screen">
            <p>Por favor, rota tu dispositivo</p>
          </div>
        )}

        {!showRotateScreen && (
          <>
            <div className="columna">
              <h3>Points: {currentScore}</h3>
              <img
                className="medal"
                src="img/medallas/medal1.svg"
              />
              <button className="push--flat boton-guardar" onClick={handleExit}>
                <h3 className="text-boton">
                  Guardar <br />
                  y <br />
                  Salir
                </h3>
              </button>
            </div>
            <div className="game-center">
              {iframeVisible && (
                <iframe src={getIframeSrc(selectedGame)} title="Juego" allowFullScreen></iframe>
              )}
            </div>

            <div className="columna">
              <h3>{getGameTitle(selectedGame)}</h3>
              <img
                className="medal"
                src="img/medallas/medal3.svg"
              />
              <img
                className="medal"
                src="img/medallas/medal4.svg"
              />
            </div>
          </>
        )}
      </div>
    </main>
  );
}
