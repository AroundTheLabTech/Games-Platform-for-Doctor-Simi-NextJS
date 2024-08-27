// src/components/Games.js

import React from "react";

export default function Games({ selectedGame, setSelectedGame, handlePlayGame }) {
  const gameData = {
    juego1: {
      imageSrc: "img/games/arcade/game-1.png",
      titleSrc: "img/games/title/game-1.svg",
      description: "¡Defiende el Centro a toda costa! Acumula puntos para mejorar tu ataque, defensa y velocidad. Cada ola de bacterias será más desafiante, ¡prepárate para detenerlas a todas! ¿Tienes lo necesario para proteger a los pacientes y salvar el día?! ¡Descúbrelo ahora!",
    },
    juego2: {
      imageSrc: "img/games/arcade/game-2.png",
      titleSrc: "img/games/title/game-2.svg",
      description: "¡Ayuda a Simi a recolectar todas las monedas y evitar los obstáculos! ¡Diviértete en este juego de plataformas y demuestra tus habilidades! ¡Juega ahora y desbloquea nuevos niveles!",
    },
    juego3: {
      imageSrc: "img/games/arcade/game-3.png",
      titleSrc: "img/games/title/game-3.svg",
      description: "¡No dejes caer ninguna Rosca de Reyes! Corta todos los objetos y evita encender la mecha del simi. Acumula puntos por cada Rosca de Reyes que logres cortar. ¿Sabías que tenemos el Record a la Rosca de Reyes mas grande del mundo?",
    },
    juego4: {
      imageSrc: "img/games/arcade/game-4.png",
      titleSrc: "img/games/title/game-4.svg",
      description: "Lanzamiento el 01/Sep/2024 ",
    },
  };

  const { imageSrc, titleSrc, description } = gameData[selectedGame];

  return (
    <div className="main-container">
      <div className="games-container">
        <div className="selector-games">
          <div className="arcade-game">
            {/* Arcade */}
            <img id="arcade" src={imageSrc} alt="Game Image" />
          </div>

          <div className="information-game">
            <img id="title-game" src={titleSrc} alt="Game Title" />
            <p id="descripcion-juego" className="descripcion-juego">
              {description}
            </p>

            <div className="container-boton-jugar">
              <button className="push--flat-blue" onClick={handlePlayGame}>
                <h3 className="text-boton-jugar">JUGAR</h3>
              </button>
            </div>
          </div>
        </div>

        <div className="catalog-games">
          {/* Game 1 */}
          <div className="game-selector">
            <button id="game-1" className="push--flat-small" onClick={() => setSelectedGame("juego1")}>
              <h3 className="text-boton game-selector-bottom"></h3>
            </button>
            <img src="img/games/portada/game-1.png" alt="Game 1" />
          </div>
          {/* Game 2 */}
          <div className="game-selector">
            <button id="game-2" className="push--flat-small" onClick={() => setSelectedGame("juego2")}>
              <h3 className="text-boton game-selector-bottom"></h3>
            </button>
            <img src="img/games/portada/game-2.png" alt="Game 2" />
          </div>
          {/* Game 3 */}
          <div className="game-selector">
            <button id="game-3" className="push--flat-small" onClick={() => setSelectedGame("juego3")}>
              <h3 className="text-boton game-selector-bottom"></h3>
            </button>
            <img src="img/games/portada/game-3.png" alt="Game 3" />
          </div>
          {/* Game 4 */}
          <div className="game-selector">
            <button id="game-4" className="push--flat-small" onClick={() => setSelectedGame("juego4")}>
              <h3 className="text-boton game-selector-bottom"></h3>
            </button>
            <img src="img/games/portada/game-4.png" alt="Game 4" />
          </div>
        </div>
      </div>
    </div>
  );
}
