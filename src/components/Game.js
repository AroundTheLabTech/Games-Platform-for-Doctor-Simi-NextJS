import React, { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Games({ selectedGame, setSelectedGame, handlePlayGame }) {
  const arcadeRef = useRef(null);
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const gameSelectorRefs = useRef([]);

  useEffect(() => {
    // Animación de entrada de arcade de arriba hacia abajo con glitch
    gsap.fromTo(
      arcadeRef.current,
      { y: -200, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.5,
        ease: "power4.out",
        onComplete: () => {
          gsap.timeline({ repeat: 2, repeatDelay: 0.1 })
            .to(arcadeRef.current, { x: -10, skewX: 10, duration: 0.1, ease: "power2.inOut" })
            .to(arcadeRef.current, { x: 10, skewX: -10, duration: 0.1, ease: "power2.inOut" })
            .to(arcadeRef.current, { x: 0, skewX: 0, duration: 0.1, ease: "power2.inOut" });
        },
      }
    );

    // Animación de title-game de derecha a izquierda con efecto de crecer y caer
    gsap.fromTo(
      titleRef.current,
      { x: 200, scale: 0, opacity: 0 },
      {
        x: 0,
        scale: 1.5,
        opacity: 1,
        duration: 1,
        ease: "power4.out",
        onComplete: () => {
          gsap.to(titleRef.current, {
            scale: 1,
            y: 10,
            ease: "bounce.out",
            duration: 0.5,
          });
        },
      }
    );

    // Animación de descripción estilo burbuja de cómics
    gsap.fromTo(
      descriptionRef.current,
      { scale: 0, opacity: 0, x: 0, y: -50 },
      {
        scale: 1,
        opacity: 1,
        duration: 0.8,
        ease: "elastic.out(1, 0.75)",
        delay: 1.5,
        onComplete: () => {
          gsap.to(descriptionRef.current, {
            y: 0,
            ease: "bounce.out",
            duration: 0.5,
          });
        }
      }
    );

    // Animación de game-selector de izquierda a derecha con stagger
    gsap.fromTo(
      gameSelectorRefs.current,
      { x: -100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 0.5,
        ease: "power4.out",
        stagger: 0.2, // Delay entre cada elemento
        delay: 2, // Se empieza después de las animaciones anteriores
      }
    );

  }, [selectedGame]);

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
      description: "¡No dejes caer ninguna Rosca de Reyes! Corta todos los objetos y evita encender la mecha del simi. Acumula puntos por cada Rosca de Reyes que logres cortar. ¿Sabías que tenemos el Record a la Rosca de Reyes más grande del mundo?",
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
            <img id="arcade" ref={arcadeRef} src={imageSrc} alt="Game Image" />
          </div>

          <div className="information-game">
            <img id="title-game" ref={titleRef} src={titleSrc} alt="Game Title" />
            <p id="descripcion-juego" ref={descriptionRef} className="descripcion-juego">
              {description}
            </p>

            <div className="container-boton-jugar">
              <button className="push--flat-blue responsive-mobile" onClick={handlePlayGame}>
                <h3 className="text-boton-jugar">JUGAR</h3>
              </button>
            </div>
          </div>
        </div>

        <div className="catalog-games">
          {/* Game 1 */}
          <div
            className="game-selector"
            ref={(el) => gameSelectorRefs.current[0] = el}
          >
            <button id="game-1" className="push--flat-small" onClick={() => setSelectedGame("juego1")}>
              <h3 className="text-boton game-selector-bottom"></h3>
            </button>
            <img src="img/games/portada/game-1.png" alt="Game 1" />
          </div>
          {/* Game 2 */}
          <div
            className="game-selector"
            ref={(el) => gameSelectorRefs.current[1] = el}
          >
            <button id="game-2" className="push--flat-small" onClick={() => setSelectedGame("juego2")}>
              <h3 className="text-boton game-selector-bottom"></h3>
            </button>
            <img src="img/games/portada/game-2.png" alt="Game 2" />
          </div>
          {/* Game 3 */}
          <div
            className="game-selector"
            ref={(el) => gameSelectorRefs.current[2] = el}
          >
            <button id="game-3" className="push--flat-small" onClick={() => setSelectedGame("juego3")}>
              <h3 className="text-boton game-selector-bottom"></h3>
            </button>
            <img src="img/games/portada/game-3.png" alt="Game 3" />
          </div>
          {/* Game 4 */}
          <div
            className="game-selector"
            ref={(el) => gameSelectorRefs.current[3] = el}
          >
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
