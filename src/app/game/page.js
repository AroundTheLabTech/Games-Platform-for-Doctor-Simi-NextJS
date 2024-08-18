"use client";

import { useEffect, useState } from "react";

export default function Game() {
  const [selectedGame, setSelectedGame] = useState(null);

  useEffect(() => {
    // Leer la variable del juego seleccionado desde localStorage
    const game = localStorage.getItem("selectedGame");
    setSelectedGame(game);
  }, []);

  if (!selectedGame) {
    return <p>Cargando juego...</p>;
  }

  return (
    <main>
      <h1>Juego Seleccionado: {selectedGame}</h1>
   
        
    </main>
  );
}
