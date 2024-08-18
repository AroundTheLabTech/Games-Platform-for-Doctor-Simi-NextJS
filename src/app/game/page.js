"use client";

import { useEffect, useState } from "react";
import { useRouter } from 'next/navigation'; // Importar useRouter para manejar la navegación
import { auth } from "../../../lib/firebase"; // Importar Firebase Auth
import { doc, getDoc, setDoc } from "firebase/firestore"; // Importar funciones de Firestore
import { db } from "../../../lib/firebase"; // Importar Firestore

export default function Game() {
  const [selectedGame, setSelectedGame] = useState(null);
  const [initialScore, setInitialScore] = useState(0); // Score inicial desde Firestore
  const [currentScore, setCurrentScore] = useState(0); // Score acumulado
  const [iframeVisible, setIframeVisible] = useState(true); // Estado para controlar la visibilidad del iframe
  const router = useRouter(); // Inicializa useRouter para redireccionar
  const [user, setUser] = useState(null); // Estado para el usuario autenticado

  useEffect(() => {
    // Leer la variable del juego seleccionado desde localStorage
    const game = localStorage.getItem("selectedGame");
    setSelectedGame(game);

    // Verificar si el usuario está autenticado
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        setUser(user);

        // Obtener el puntaje inicial de Firestore
        const userDoc = await getDoc(doc(db, "scores", user.uid));
        if (userDoc.exists() && userDoc.data()[selectedGame]) {
          const initialScore = Number(userDoc.data()[selectedGame]) || 0;
          setInitialScore(initialScore);
          setCurrentScore(initialScore); // Establecer el score inicial como el score actual
        }
      } else {
        router.push('/'); // Redirigir al login si no está autenticado
      }
    });

    // Escuchar mensajes desde el iframe
    const handlePostMessage = (event) => {
      if (event.data && typeof event.data.score !== 'undefined') {
        setCurrentScore((prevScore) => {
          const newScore = prevScore + Number(event.data.score); // Sumar el nuevo score al actual
          setIframeVisible(false); // Cerrar el iframe (ocultarlo)
          return newScore; // Actualizar el score acumulado
        });
      }
    };

    window.addEventListener("message", handlePostMessage);

    // Limpiar el listener cuando el componente se desmonta
    return () => {
      window.removeEventListener("message", handlePostMessage);
      unsubscribe();
    };
  }, [selectedGame]);

  const handleExit = async () => {
    if (user) {
      try {
        // Guardar el score actualizado en Firestore usando setDoc con merge
        await setDoc(doc(db, "scores", user.uid), {
          [selectedGame]: currentScore, // Guardar el score acumulado
        }, { merge: true });
        router.push('/dashboard'); // Redirigir al usuario al dashboard
      } catch (error) {
        console.error("Error al guardar el score en Firestore", error);
      }
    }
  };

  const getGameTitle = (game) => {
    switch (game) {
      case "juego1":
        return "Doctor Simi Invade";
      case "juego2":
        return "Doctor Simi Run";
      case "juego3":
        return "Simi Ninja";
      case "juego4":
        return "Simi Space";
      default:
        return "Juego Desconocido";
    }
  };

  if (!selectedGame) {
    return <p>Cargando juego...</p>;
  }

  return (
    <main className="container-game">
      <div className="container-interface-game">
        <div className="columna">
          <h3>Points: {currentScore}</h3> {/* Mostrar la variable currentScore */}
          <img 
            className="medal"
            src="img/medallas/medal-1.svg"
          />
          <button className="push--flat" onClick={handleExit}>
            <h3 className="text-boton">
              Guardar <br />
              y <br />
              Salir
            </h3>
          </button>
        </div>

        <div className="game-center">
          {iframeVisible && (
            <iframe src="games/game-1/public-game/index.html"></iframe>
          )}
        </div>

        <div className="columna">
          <h3>{getGameTitle(selectedGame)}</h3>
          <img 
            className="medal"
            src="img/medallas/medal-3.svg"
          />
          <img 
            className="medal"
            src="img/medallas/medal-4.svg"
          />
        </div> 
      </div>
    </main>
  );
}
