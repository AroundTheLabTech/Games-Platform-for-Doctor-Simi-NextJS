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
    <main className="container-game">
        <div className="container-interface-game">
            
        <div className="columna">
              <h3>Points: 1000</h3>
              <img 
              className="medal"
              src="img/medallas/medal-1.svg">
              </img>   

              <button className="push--flat">
                        <h3 className="text-boton">Guardar <br />
                            y  <br />
                        Salir
                         </h3>
              </button>
             
        </div>

       

        <div className="game-center">
            <iframe src="games/game-1/index.html">

            </iframe>
        </div>

      {/* Columna */}
      <div className="columna">

              <h3>
                {selectedGame}
              </h3>
              <img 
              className="medal"
              src="img/medallas/medal-3.svg">
              </img>   
              <img 
              className="medal"
              src="img/medallas/medal-4.svg">
              </img>   
        </div> 

        </div>

    </main>
  );
}
