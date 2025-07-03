import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import Image from "next/image";

// Registrar el plugin de texto con GSAP
gsap.registerPlugin(TextPlugin);
export default function Games({ selectedGame, setSelectedGame, handlePlayGame }) {
  const arcadeRef = useRef(null);
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const gameSelectorRefs = useRef([]);
  const [activeIndex, setActiveIndex] = useState(null); //Variable para verificar que esta seleccionado

  const titleGamesRef = useRef(null); //Animacion Coin
  const descriptionPRef = useRef(null); //Animacion de Escritura de Descripción

  useEffect(() => {

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

    // Animación de entrada con efecto de parpadeo (Insert Coin Style)
    gsap.fromTo(
      titleGamesRef.current,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 0.5,
        repeat: -1, // Repetir indefinidamente
        yoyo: true, // Hace que regrese al estado original
        ease: "power1.inOut",
      }
    );

  }, []);

  // Animaciones cada que se selecciona un juego
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



    // Lógica para desplazar el scroll hacia .selector-games
    const selectorGamesElement = document.querySelector('.selector-games');
    if (selectorGamesElement) {
      selectorGamesElement.scrollIntoView({ behavior: 'smooth' });
    }

  }, [selectedGame]);


  const gameData = {
    juego1: {
      imageSrc: "/img/games/arcade/game-1.png",
      titleSrc: "/img/games/title/game-1.svg",
      description: "¡Defiende el Centro como un pro! Mejora ataque, defensa y velocidad mientras enfrentas olas brutales. ¿Listo para salvarlo?",
    },
    juego2: {
      imageSrc: "/img/games/arcade/game-2.png",
      titleSrc: "/img/games/title/game-2.svg",
      description: "¡Acompaña a Simi, recolecta monedas, esquiva obstáculos y desbloquea niveles! Demuestra tus habilidades en este épico desafío.",
    },
    juego3: {
      imageSrc: "/img/games/arcade/game-3.png",
      titleSrc: "/img/games/title/game-3.svg",
      description: "¡No dejes caer ni un implemento médico! Corta todo, evita la mecha del Simi y rompe récords con cada jugada épica.",
    },
    juego4: {
      imageSrc: "/img/games/arcade/game-4.png",
      titleSrc: "/img/games/title/game-4.svg",
      description: "¡Pilota el avión del SimiFest, lanza Bombas de Vida y siembra esperanza! Conviértete en un héroe ecológico ahora.",
    },
    juego5: {
      imageSrc: "/img/games/arcade/game-5.png",
      titleSrc: "/img/games/title/game-5.svg",
      description: "Usa el joystick en pantalla para moverte por el cielo y esquivar cada peligro. ¡Pon a prueba tus reflejos y mantén tu globo intacto!",
    },
    juego6: {
      imageSrc: "/img/games/arcade/game-6.png",
      titleSrc: "/img/games/title/game-6.svg",
      description: "Usa el clic o el tap y coloca defensas estratégicas para proteger el hospital de invasores virales. Construye y mejora torres médicas para detener las oleadas enemigas y salvar a los enfermos. ¡Defiende la salud con inteligencia y estrategia!",
    },
    juego7: {
      imageSrc: "/img/games/arcade/game-7.png",
      titleSrc: "/img/games/title/game-7.svg",
      description: "Usa el clic o el tap y desliza para conectar tres o más gomas y crear combinaciones explosivas. ¡Completa la meta con el menor número de movimientos y demuestra tu agilidad mental!",
    },
    juego8: {
      imageSrc: "/img/games/arcade/game-8.png",
      titleSrc: "/img/games/title/game-8.svg",
      description: "Inspirado en los clásicos juegos de puzzles, este divertido desafío te invita a ordenar las fichas de medicamentos que caen. Acomódalas estratégicamente para completar filas y mantener la farmacia en orden.",
    },
    juego9: {
      imageSrc: "/img/games/arcade/game-9.png",
      titleSrc: "/img/games/title/game-9.svg",
      description: "Usa el clic o el tap para interactuar con el juego. Gira las piezas para encontrar su pareja y completar todos los pares. ¡Pon a prueba tu memoria y agilidad mental!",
    },
    juego10: {
      imageSrc: "/img/games/arcade/game-10.png",
      titleSrc: "/img/games/title/game-10.svg",
      description: "Usa los botones en pantalla o las teclas del teclado para moverte y saltar. Recoge monedas, evita caer al vacío y lleva al Simi al planeta saltando entre los satélites. ¡Demuestra tus habilidades de plataforma!",
    }
  };

  const { imageSrc, titleSrc, description } = gameData[selectedGame];

  // Animación de Escritura del Texto
  useEffect(() => {
    // Limpiar el texto antes de iniciar la animación
    gsap.set(descriptionPRef.current, { text: "" });

    // Animación de "escritura" usando TextPlugin
    gsap.to(descriptionPRef.current, {
      duration: 2,
      text: description,   // Apunta a la variable 'description'
      ease: "none",
      delay: 0.5
    });
  }, [description]);

  return (
    <div className="main-container">
      <div className="games-container">
        {/* Catalogo de Juegos */}
        <div className="catalog-games">
          {/* Title Games */}
          <div className="title-games">
            <h3 ref={titleGamesRef}>Selector de Juegos!</h3>
          </div>
          <div className="games-container-catalog">

            {Object.entries(gameData).map(([gameKey, game], index) => (
              <div
                key={gameKey}
                className={`game-selector ${activeIndex === index ? "game-selector-active" : ""}`}
                ref={(el) => gameSelectorRefs.current[index] = el}
                onClick={() => {
                  setActiveIndex(index);
                  setSelectedGame(gameKey);
                }}
              >
                <Image className="thumbnail" src={`/img/games/portada/game-${index + 1}.png`} alt={`Game ${index + 1}`} width={200} height={200} />
                <Image className="title-thumbnail" src={game.titleSrc} alt={`Game title ${index + 1}`} width={200} height={100} />
                <button
                  id={`game-${index + 1}`}
                  className="push--flat-small"
                  onClick={() => {
                    localStorage.setItem("selectedGame", gameKey)
                    setActiveIndex(index);
                    setSelectedGame(gameKey);
                    handlePlayGame(gameKey);
                  }}
                >
                  <h3 className="text-boton game-selector-bottom"></h3>
                </button>
              </div>
            ))}
          </div>
        </div>
        {/* Selector de Juegos */}
        <div className="selector-games">
          {/* Imagen de Arcade */}
          <div className="arcade-game">
            {/* Arcade */}
            <Image id="arcade" ref={arcadeRef} src={imageSrc} alt="Game Image" width={453} height={455} />
          </div>
          {/* Información del Juego -- MiniPantalla*/}
          <div className="container-information">
            <div className="information-game">
              {/* Header */}
              <div className="information-game-header" style={{ justifyContent: 'center' }}>
                {/* Container Puntos */}
                <div style={{ display: 'none' }} className="container-puntos">
                  <Image src="/img/icons/monedaScore.svg" alt="" width={20} height={20} />
                  <p>+20</p>
                </div>

                {/* Saber más }
                <div className="container-saber-mas">
                  <p>Saber más...</p>
                </div>
                */}
                <Image className="game-title-image" src={titleSrc} alt="" width={200} height={100} />
              </div>
              <br />
              {/* Texto e Información */}
              <div className="container-text">
                <p ref={descriptionPRef}>{description}</p>
              </div>

              {/* Button Container */}
              <div className="container-button">
                <button
                  onClick={() => handlePlayGame(selectedGame)}>
                  START</button>
              </div>

              <div className="container-controles">
                <Image className="controls-icon" src="/img/dashboard/controles.svg" alt="" width={200} height={180} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
