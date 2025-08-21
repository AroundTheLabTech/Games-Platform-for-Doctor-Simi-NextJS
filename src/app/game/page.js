"use client";

import { useEffect, useState, useCallback } from "react";
import { useRouter } from 'next/navigation';
import { auth } from "../../../lib/firebase";
import { doc, getDoc, setDoc, collection, addDoc, serverTimestamp } from "firebase/firestore"; // Importar funciones necesarias
import { db } from "../../../lib/firebase";
import { getListAvalibleCompetition, putCompetitionSession, postSessionGame } from "../../services/backend"
import { analytics } from "../../../lib/firebase";
import { lastGamePlayedEvent } from "../../services/analytics";
import { getGameTitle, getGameInstructions, getIframeSrc } from "../../utils/helpers";

import { LOCAL_STORAGE_KEYS } from '../../utils/constants';
import CustomSimpleModal from "../../components/modal/CustomSimpleModal"; // Importar el modal personalizado

export default function Game() {
  const [selectedGame, setSelectedGame] = useState(null);
  const [currentScore, setCurrentScore] = useState(0);
  const [scoreWon, setScoreWon] = useState(0);
  const [iframeVisible, setIframeVisible] = useState(true);
  const [showModal, setShowModal] = useState(true);
  const [showRotateScreen, setShowRotateScreen] = useState(false);
  const [gameUnavalibleInMobile, setGameUnavalibleInMobile] = useState(false)
  const [previusScore, setPreviusScore] = useState(0);
  const router = useRouter();
  const [user, setUser] = useState(null);

  const [scoreHistory, setScoreHistory] = useState([]);

  const [isGuest, setIsGuest] = useState(false);

  useEffect(() => {
    const game = localStorage.getItem("selectedGame");
    setSelectedGame(game);

    if (game === 'juego8') {
      setGameUnavalibleInMobile(true)
    }

    let initialScoreDb = 0;

    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        setUser(user);

        const userDoc = await getDoc(doc(db, "scores", user.uid));
        if (userDoc.exists() && userDoc.data()[game]) {
          const initialScore = Number(userDoc.data()[game]) || 0;
          setCurrentScore(initialScore);
          initialScoreDb = initialScore;
          console.log("Puntaje inicial desde la base de datos:", initialScore);
        }
      } else {

        if (localStorage.getItem(LOCAL_STORAGE_KEYS.IS_GUEST) === "true") {
          setIsGuest(true);
          return;
        }

        router.push('/');
      }
    });

    const handlePostMessage = (event) => {
      console.log("Mensaje recibido:", event.data);

      if (selectedGame === "juego1") {
        if (event.data && typeof event.data.score !== 'undefined') {
          const scoreValue = Number(event.data.score);

          if (scoreValue > 0) {
            setScoreHistory((prevHistory) => {
              const updated = [...prevHistory, scoreValue];

              if (updated.length > 2) {
                updated.shift();
              }
              if (updated[1] > 0) {
                setCurrentScore(initialScoreDb + updated[1]);
                setScoreWon(updated[1]);
              }
              return updated;
            });
          }
        }
      }
      else if (selectedGame === "juego2") {
        if (event.data && typeof event.data.score !== 'undefined') {
          const scoreValue = Number(event.data.score);
          const newScore = scoreValue / 100 > 1 ? scoreValue / 100 : 1;

          if (!scoreHistory.includes(newScore)) {
            setScoreHistory((prevHistory) => {
              const updated = [...prevHistory, newScore];

              if (updated.length > 2) {
                updated.shift();
              }

              setCurrentScore(initialScoreDb + updated[1]);

              setScoreWon(updated[1]);

              return updated;
            });
          }
        }
      }
      else if (selectedGame === "juego3" && event.data && typeof event.data.number !== 'undefined') {
        let newScore = Number(event.data.number);

        setCurrentScore((prevScore) => {
          const updatedScore = prevScore + 1;
          return updatedScore;
        });

        setScoreWon(newScore);
      }
      else if (selectedGame === "juego4") {
        if (event.data && typeof event.data.score !== 'undefined') {
          const scoreValue = Number(event.data.score);

          if (!scoreHistory.includes(scoreValue)) {
            setScoreHistory((prevHistory) => {
              const updated = [...prevHistory, scoreValue];

              if (updated.length > 2) {
                updated.shift();
              }

              if (updated[1] > 100) {
                setCurrentScore((currentScore + (updated[1] - 10) / 100));
                setScoreWon((updated[1] - 10) / 100);
              } else {
                setCurrentScore((currentScore + 1));
                setScoreWon(1);
              }

              return updated;
            });
          }
        }
      }
      else if (selectedGame === "juego5") {
        if (event.data && event.data.type === "scoreUpdate") {

          const scoreValue = Number(event.data.score);

          if (scoreValue > 0 && !isNaN(scoreValue)) {
            if (previusScore != scoreValue && scoreValue > previusScore) {

              setScoreHistory((prevHistory) => {
                const updated = [...prevHistory, scoreValue];

                if (updated.length > 2) {
                  updated.shift();
                }

                if (updated[1] > 0) {
                  setCurrentScore(initialScoreDb + updated[1]);
                  setScoreWon(updated[1]);
                  setPreviusScore(updated[1]);
                } else if (updated[1] == 0 || updated[1] == 1) {
                  setCurrentScore((initialScoreDb + 1));
                  setScoreWon(1);
                  setPreviusScore(1);
                }

                return updated;
              });
            }
          }
        }
      }
      else if (selectedGame === "juego6") {
        if (event.data && event.data.type === "scoreUpdate") {
          const scoreValue = Number(event.data.score);

          if (scoreValue > 0) {
            setScoreHistory((prevHistory) => {
              const updated = [...prevHistory, scoreValue];

              if (updated.length > 2) {
                updated.shift();
              }

              if (updated[1] > 0) {
                setCurrentScore(initialScoreDb + updated[1]);
                setScoreWon(updated[1]);
              }
              return updated;
            });
          }
        }
      }
      else if (selectedGame === "juego7") {
        if (event.data && event.data.type === "scoreUpdate") {
          const scoreValue = Number(event.data.score);

          if (scoreValue > 0) {
            setCurrentScore(prev => prev + initialScoreDb + scoreValue);
            setScoreWon(scoreValue);
          }
        }
      }
      else if (selectedGame === "juego8") {
        if (event.data && event.data.type === "scoreUpdate") {
          const scoreValue = Number(event.data.score);

          if (scoreValue > 0) {
            setScoreHistory((prevHistory) => {
              const updated = [...prevHistory, scoreValue];

              if (updated.length > 2) {
                updated.shift();
              }
              if (updated[1] > 0) {
                setCurrentScore(initialScoreDb + updated[1]);
                setScoreWon(updated[1]);
              }
              return updated;
            });
          }
        }
      }
      else if (selectedGame === "juego9") {
        if (event.data && event.data.type === "scoreUpdate") {
          const scoreValue = Number(event.data.score);

          if (scoreValue > 0) {
            setScoreHistory((prevHistory) => {
              const updated = [...prevHistory, scoreValue];

              if (updated.length > 2) {
                updated.shift();
              }
              if (updated[1] > 0) {
                setCurrentScore(initialScoreDb + updated[1]);
                setScoreWon(updated[1]);
              }
              return updated;
            });
          }
        }
      }
      else if (selectedGame === "juego10") {
        if (event.data && event.data.type === "scoreUpdate") {
          const scoreValue = Number(event.data.score);

          if (scoreValue > 0) {
            setScoreHistory((prevHistory) => {
              const updated = [...prevHistory, scoreValue];

              if (updated.length > 2) {
                updated.shift();
              }
              if (updated[1] > 0) {
                setCurrentScore(initialScoreDb + updated[1]);
                setScoreWon(updated[1]);
              }
              return updated;
            });
          }
        }
      }
      else if (selectedGame === "juego11") {
        if (event.data && event.data.type === "scoreUpdate") {
          const scoreValue = Number(event.data.score);

          if (scoreValue > 0) {
            setScoreHistory((prevHistory) => {
              const updated = [...prevHistory, scoreValue];

              if (updated.length > 2) {
                updated.shift();
              }
              if (updated[1] > 0) {
                setCurrentScore(initialScoreDb + updated[1]);
                setScoreWon(updated[1]);
              }
              return updated;
            });
          }
        }
      }
      else if (selectedGame === "juego12") {
        if (event.data && event.data.type === "scoreUpdate") {
          const scoreValue = Number(event.data.score);

          if (scoreValue > 0) {
            setScoreHistory((prevHistory) => {
              const updated = [...prevHistory, scoreValue];

              if (updated.length > 2) {
                updated.shift();
              }
              if (updated[1] > 0) {
                setCurrentScore(initialScoreDb + updated[1]);
                setScoreWon(updated[1]);
              }
              return updated;
            });
          }
        }
      }
      else if (selectedGame === "juego13") {
        if (event.data && event.data.type === "scoreUpdate") {
          const scoreValue = Number(event.data.score);

          if (scoreValue > 0) {
            setScoreHistory((prevHistory) => {
              const updated = [...prevHistory, scoreValue];

              if (updated.length > 2) {
                updated.shift();
              }
              if (updated[1] > 0) {
                setCurrentScore(initialScoreDb + updated[1]);
                setScoreWon(updated[1]);
              }
              return updated;
            });
          }
        }
      }
      else if (selectedGame === "juego14") {
        if (event.data && event.data.type === "scoreUpdate") {
          const scoreValue = Number(event.data.score);

          if (scoreValue > 0) {
            setScoreHistory((prevHistory) => {
              const updated = [...prevHistory, scoreValue];

              if (updated.length > 2) {
                updated.shift();
              }
              if (updated[1] > 0) {
                setCurrentScore(initialScoreDb + updated[1]);
                setScoreWon(updated[1]);
              }
              return updated;
            });
          }
        }
      }
      else if (selectedGame === "juego15") {
        if (event.data && event.data.type === "scoreUpdate") {
          const scoreValue = Number(event.data.score) / 100;

          if (scoreValue > 0) {
            setScoreHistory((prevHistory) => {
              const updated = [...prevHistory, scoreValue];

              if (updated.length > 2) {
                updated.shift();
              }
              if (updated[1] > 0) {
                setCurrentScore(initialScoreDb + updated[1]);
                setScoreWon(updated[1]);
              }
              return updated;
            });
          }
        }
      }
      else if (selectedGame === "juego16") {
        if (event.data && event.data.type === "scoreUpdate") {
          const scoreValue = Number(event.data.score);

          if (scoreValue > 0) {
            setScoreHistory((prevHistory) => {
              const updated = [...prevHistory, scoreValue];

              if (updated.length > 2) {
                updated.shift();
              }
              if (updated[1] > 0) {
                setCurrentScore(initialScoreDb + updated[1]);
                setScoreWon(updated[1]);
              }
              return updated;
            });
          }
        }
      }
      else if (selectedGame === "juego17") {
        if (event.data && event.data.type === "scoreUpdate") {
          const scoreValue = Number(event.data.score) / 100;

          if (scoreValue > 0) {
            setScoreHistory((prevHistory) => {
              const updated = [...prevHistory, scoreValue];

              if (updated.length > 2) {
                updated.shift();
              }
              if (updated[1] > 0) {
                setCurrentScore(initialScoreDb + updated[1]);
                setScoreWon(updated[1]);
              }
              return updated;
            });
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

    if (!user || !sessionId) {
      console.error("Usuario o sessionId no disponible");
      return;
    }

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

  function mergeGuestGames(games) {
    const map = new Map();
    for (const g of games) {
      const id = String(g.id).trim().toLowerCase();
      const prev = map.get(id);
      map.set(id, { id, score: (prev?.score || 0) + Number(g.score || 0) });
    }
    return Array.from(map.values());
  }

  function upsertGuestGame({ currentGameId, currentScore }) {
    const RAW = localStorage.getItem(LOCAL_STORAGE_KEYS.GUEST_GAMES) || "[]";
    const list = mergeGuestGames(JSON.parse(RAW)); // limpia duplicados previos

    const id = String(currentGameId).trim().toLowerCase();

    const i = list.findIndex(g => g.id === id);

    if (i !== -1) {
      list[i].score += Number(currentScore || 0); // acumula
    } else {
      list.push({ id, score: Number(currentScore || 0) });
    }

    // Guardar array actualizado
    localStorage.setItem(LOCAL_STORAGE_KEYS.GUEST_GAMES, JSON.stringify(list));

    // Calcular suma total de scores y guardar como GUEST_SCORE
    const totalScore = list.reduce((acc, game) => acc + game.score, 0);
    localStorage.setItem(LOCAL_STORAGE_KEYS.GUEST_SCORE, String(totalScore));

    return list;
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

        if (Math.ceil(Number(scoreWon)) > 0) {
          const newGameSession = {
            uid: user.uid,
            score: Math.ceil(Number(scoreWon)),
            numberGame: Number(gameNumber),
          };

          const response = await postSessionGame(newGameSession);

          console.log("session?", response)

          console.log("Analytics:", analytics);

          lastGamePlayedEvent(user.uid, gameNumber, selectedGame);


          if (response.message && response.session_id) {
            addCompetitionSession(response.session_id);
          }
        }

        setCurrentScore(0);
        setPreviusScore(0);
        setScoreWon(0);
        setScoreHistory([]);

        router.push('/dashboard');
      } catch (error) {
        console.error("Error al guardar el score en Firestore", error);
      }
    } else if (isGuest) {
      try {
        const game = localStorage.getItem("selectedGame");

        console.log("game", game);

        // 1) upsert del juego
        upsertGuestGame({ currentGameId: game, currentScore });

        // 2) opcional: mantener highscore global
        const best = Number(localStorage.getItem(LOCAL_STORAGE_KEYS.GUEST_SCORE) || 0);
        if (currentScore > best) {
          localStorage.setItem(LOCAL_STORAGE_KEYS.GUEST_SCORE, String(currentScore));
        }

        // 3) contador de partidas
        const played = Number(localStorage.getItem(LOCAL_STORAGE_KEYS.GUEST_GAMES_PLAYED) || 0);
        localStorage.setItem(LOCAL_STORAGE_KEYS.GUEST_GAMES_PLAYED, String(played + 1));

        // 4) reset de estado
        setCurrentScore(0);
        setPreviusScore(0);
        setScoreWon(0);
        setScoreHistory([]);

        router.push('/dashboard');
      } catch (e) {
        console.error("Error al guardar el score del invitado", e);
      }
    }
  };

  function isMobileDevice() {
    return (
      /Mobi|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ||
      window.innerWidth <= 768
    );
  }

  const handleCloseModal = (e) => {

    if (gameUnavalibleInMobile) {
      setGameUnavalibleInMobile(false);
      if (isMobileDevice()) {
        handleExit();
      }
    }

    setShowModal(false);
  };

  const [modal, setModal] = useState({
    open: false,
    title: "",
    message: "",
    buttonText: "",
    buttonType: "primary",
    modalType: "info",
    buttonProps: {},
  });

  const closeModal = useCallback(() => {
    handleExit();
    setModal(m => ({ ...m, open: false }));
  }, []);

  const showWarning = useCallback(() => {
    setModal({
      open: true,
      title: "Parece que eres un invitado",
      message: "Han pasado más de 10 minutos desde tu inicio de sesión como invitado. Por favor, inicia sesión o regístrate para guardar tu progreso.",
      buttonText: "Aceptar",
      buttonType: "info",
      modalType: "info",
      buttonProps: {
        style: {
          background: "#2196f3ff", color: "#fff", border: "none",
          padding: "10px 15px",
          borderRadius: "10px"
        }
      },
    });
  }, []);

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
              {gameUnavalibleInMobile &&
                <p className="no-mobile-version" >¡Versión móvil en camino! <br></br> Por ahora solo disponible en PC. Muy pronto podrás jugar desde tu teléfono.</p>
              }
              <button className="push--flat-blue" onClick={handleCloseModal}>
                <h3>JUGAR</h3>
              </button>
            </div>
          </div>
        )}

        {showRotateScreen && (
          <div className="rotate-screen">
            {gameUnavalibleInMobile ?
              <p>¡Versión móvil en camino! <br></br> Por ahora solo disponible en PC. Muy pronto podrás jugar desde tu teléfono.</p>
              :
              <p>Por favor, rota tu dispositivo</p>
            }
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
              <button className="push--flat boton-guardar" onClick={() => {

                if (isGuest) {
                  const lastLogin = localStorage.getItem(LOCAL_STORAGE_KEYS.LAST_GUEST_LOGIN_TIME);
                  if (lastLogin) {
                    const lastTime = new Date(lastLogin);
                    const now = new Date();
                    const diffMinutes = Math.floor((now - lastTime) / 60000); // diferencia en minutos

                    if (diffMinutes >= 10) {
                      showWarning();
                      return;
                    } else {
                      handleExit();
                    }
                  } else {
                    handleExit();
                  }

                } else {
                  handleExit();
                }

              }}>
                <h3 className="text-boton">
                  Guardar <br />
                  y <br />
                  Salir
                </h3>
              </button>

              <CustomSimpleModal
                open={modal.open}
                onClose={closeModal}
                title={modal.title}
                message={modal.message}
                buttonText={modal.buttonText}
                buttonType={modal.buttonType}
                buttonProps={modal.buttonProps}
                modalType={modal.modalType}
                showButton
              />
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
