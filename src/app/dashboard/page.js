"use client";

import { useEffect, useState } from "react";
import { useRouter } from 'next/navigation';
import { auth } from "../../../lib/firebase"; // Importar Firebase Auth
import { onAuthStateChanged, signOut } from "firebase/auth"; // Importar funciones de Auth
import { doc, getDoc } from "firebase/firestore"; // Importar funciones de Firestore
import { db } from "../../../lib/firebase"; // Importar Firestore

export default function Dashboard() {
  const [user, setUser] = useState(null);
  const [userData, setUserData] = useState(null); // Estado para los datos adicionales del usuario
  const [selectedGame, setSelectedGame] = useState("juego1"); // Estado para el juego seleccionado
  const router = useRouter();

  useEffect(() => {
    // Verificar si el usuario está autenticado
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        // Si el usuario está autenticado, se establece el estado del usuario
        setUser(user);
        
        // Obtener datos adicionales desde Firestore
        const userDoc = await getDoc(doc(db, "users", user.uid));
        if (userDoc.exists()) {
          setUserData(userDoc.data());
        }
      } else {
        // Si no está autenticado, redirigir a la página de login
        router.push('/');
      }
    });

    // Limpiar el listener de Firebase Auth cuando el componente se desmonta
    return () => unsubscribe();
  }, [router]);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      router.push('/'); // Redirigir a la página de inicio después del logout
    } catch (error) {
      console.error("Error al cerrar sesión", error);
    }
  };

  const handlePlayGame = () => {
    localStorage.setItem("selectedGame", selectedGame); // Guardar el juego seleccionado en localStorage
    router.push('/game'); // Redirigir a la página del juego
  };

  if (!user || !userData) {
    return <p>Cargando...</p>; // Mostrar un mensaje de carga mientras se verifica la autenticación y se obtienen los datos
  }

  // Configuración de datos según el juego seleccionado
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
      description: "¡No dejes caer ninguna Rosca de Reyes! Corta todos los objetos y evita encender la mecha del simi. Acumula puntos por cada Rosca de Reyes que logres cortar. ¿Sabías que tenemos el Record a la Rosca de Reyes mas grande del mundo",
    },
    juego4: {
      imageSrc: "img/games/arcade/game-4.png",
      titleSrc: "img/games/title/game-4.svg",
      description: "Lanzamiento el 01/Sep/2024 ",
    },
  };

  const { imageSrc, titleSrc, description } = gameData[selectedGame];

  return (
    <main className="dashboard-container">
        {/* User Container */}
        <div className="user-container">
            {/* Card User */}
            <div className="card-user">
                <div className="container-photo">
                    <img  src="img/perfil/default.png" className="img-photo"/>
                </div>

                <div className="text-user">
                    <h3>
                        ¡HOLA! 
                    </h3>
                    <p>
                        {userData.display_name}
                    </p>
                </div>
            </div>

            {/* Nav Container */}

            <div className="nav-container">
                <ul>
                    <li>
                        <img
                        src="img/icons/game.svg"
                        />
                        <a href="#">GAMES</a>
                    </li>

                    <li>
                        <img
                        src="img/icons/dashboard.svg"
                        />
                        <a href="#">DASHBOARD</a>
                    </li>
                </ul>
            </div>


            {/* Invita y Gana */}

            <div className="invite-container">
                <h3>¡Invita y Gana!</h3>
                <button>
                  <img
                  src="img/icons/invite.svg"
                  className="icon-invite"
                  ></img>
                  Invitar</button>
            </div>

            {/* Objetivo Semanal  */}

            <div className="objetivo-container">
                <h3>Objetivo Semanal</h3>
            </div>
        </div>

        {/* Main Container */}
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
    </main>
  );
}
