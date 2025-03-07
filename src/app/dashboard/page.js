"use client";

import { useEffect, useState } from "react";
import { useRouter } from 'next/navigation';
import { auth, db } from "../../../lib/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { doc, getDoc, updateDoc, setDoc, arrayUnion } from "firebase/firestore";
import dayjs from 'dayjs';
import Games from "../../views/GamesSection/Game";
import UserComponent from "../../views/PerfilSection/UserComponent";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
//Services 
import { FetchScoreTotal } from '../../services/FetchScoreTotal'; // Importa el servicio de Consulta de total de Puntaje
import { GetTrophiesService } from '../../services/GetTrofiesService'; // Servicio para obtener trofeos
import { GetScoreTotalService } from '../../services/GetScoreTotalService'; // Servicio para obtener el puntaje total

//Modal 

import BetModal from '../../components/modal/ModalCompetition';
import ModalPremios from "@/components/modal/ModalPremios";

//View 

import DashboardContent from "../../views/Dashboard/DashboardView";

import {getUserPoints} from "../../services/backend"


export default function Dashboard() {
  const [user, setUser] = useState(null);
  const [userData, setUserData] = useState(null);
  const [selectedView, setSelectedView] = useState("games");
  const [selectedGame, setSelectedGame] = useState("juego1");
  const [streak, setStreak] = useState(0);
  const router = useRouter();

  const [betScore, setBetScore] = useState(100); // Inicializamos la apuesta con un valor de 1000
  const [totalScore, setTotalScore] = useState(0); // Almacena el puntaje Total

  //--- Premios---

  const [showPremiosModal, setShowPremiosModal] = useState(false);
  const [activeMedal, setActiveMedal] = useState(null);
  const [trophies, setTrophies] = useState([]); // Almacena las medallas del usuario
  

  //--- Apuesta ---

    //Mostrar Modal de Competencia: 
    const [showModal, setShowModal] = useState(false); // Controlamos la visibilidad del modal

    const [isCreateCompetition, setIsCreateCompetition] = useState(false);

    // Función para aumentar o disminuir el betScore
    const updateBetScore = (change) => {
    setBetScore((prevBet) => {
    const newBet = prevBet + change;

        // Log para depurar
        console.log("Apuesta anterior (prevBet):", prevBet);
        console.log("Cambio (change):", change);
        console.log("Nueva apuesta (newBet):", newBet);
        console.log("Total Score permitido:", totalScore);
        
    
    // Condiciones: No menor a 100 y no mayor a totalScore
    if (newBet < 100) return 100; 
    if (newBet > totalScore) return prevBet;
    return newBet;
  });
    };

    // -- Modal --

    const handleShowModal = () => {
      setShowModal(true); // Mostrar modal al hacer clic en Competir
    };

    const handleCloseModal = () => {
      setShowModal(false); // Cerrar modal
      setIsCreateCompetition(false)
    };

    const updateCreateCompetition = () => {
      setIsCreateCompetition(true)
    }

    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, async (user) => {
        if (user) {
          setUser(user);
    
          const userDocRef = doc(db, "users", user.uid);
          const userDoc = await getDoc(userDocRef);
          // Obtener las medallas del usuario
          const userTrophies = await GetTrophiesService(user.uid);
          setTrophies(userTrophies);

          // Obtener el puntaje total del usuario
          const userScoreTotal = await GetScoreTotalService(user.uid);

          setTotalScore(userScoreTotal);

          const userScore = await getUserPoints(user.uid)

          if(userScore.score_total) {
            setTotalScore(userScore.score_total);
          }
          
          if (userDoc.exists()) {
            setUserData(userDoc.data());
    
            // Sumar todos los campos en la colección scores
            const scoresDocRef = doc(db, "scores", user.uid);
            const scoresDoc = await getDoc(scoresDocRef);
            let totalScore = 0;
    
            if (scoresDoc.exists()) {
              const scoreData = scoresDoc.data();
              totalScore = Object.values(scoreData).reduce(
                (acc, curr) => acc + (typeof curr === "number" ? curr : 0),
                0
              );
            }
    
            console.log("Total Score calculado:", totalScore); // Log para verificar la suma
    
            // Actualizar el campo score_total en la colección users
            await updateDoc(userDocRef, {
              score_total: totalScore,
            });
    
            console.log("Campo score_total actualizado en Firebase"); // Log para verificar la actualización
    
            // Lógica de racha diaria
            const lastSession = dayjs(userDoc.data().last_session?.toDate());
            const today = dayjs();
            const differenceInDays = today.diff(lastSession, 'day');
    
            const stadisticsDocRef = doc(db, "stadistics", user.uid);
            const stadisticsDoc = await getDoc(stadisticsDocRef);
    
            if (stadisticsDoc.exists()) {
              let newStreak = 0;
              if (differenceInDays === 1) {
                newStreak = stadisticsDoc.data().score_racha + 1;
              } else if (differenceInDays > 1) {
                newStreak = 0;
              }
              setStreak(newStreak);
    
              await updateDoc(stadisticsDocRef, {
                score_racha: newStreak,
              });
    
              console.log("Racha actualizada en Firebase:", newStreak); // Log para verificar la racha
            } else {
              const initialStreak = differenceInDays === 1 ? 1 : 0;
              setStreak(initialStreak);
    
              await setDoc(stadisticsDocRef, {
                score_racha: initialStreak,
              });
    
              console.log("Documento de racha creado en Firebase:", initialStreak); // Log para verificar la creación
            }
    
            // --- Lógica para verificar el campo trofeos[] y mostrar el modal de medal1 ---
            const stadisticsData = stadisticsDoc.data() || {};
            if (!stadisticsData.trofeos || !stadisticsData.trofeos.includes('medal1')) {
              // Si trofeos[] no existe o no contiene 'medal1', se crea o se actualiza
              await updateDoc(stadisticsDocRef, {
                trofeos: arrayUnion('medal1'),
              });
    
              console.log("Medalla 'medal1' agregada a trofeos"); // Log para verificar la adición de la medalla
    
              // Mostrar el modal de premios
              setActiveMedal('medal1'); // Establece la medalla activa
              setShowPremiosModal(true); // Muestra el modal
            }
          }
        } else {
          router.push('/');
        }
      });
    
      return () => unsubscribe();
    }, [router, isCreateCompetition]);
    
  // -- DropDown---

  // Estado para manejar si el dropdown está abierto o cerrado
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Función para alternar el estado
  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  
  const handleLogout = async () => {
    try {
      await signOut(auth);
      router.push('/'); // Redirigir a la página de inicio después del logout
    } catch (error) {
      console.error("Error al cerrar sesión", error);
    }
  };

  const changeSelectedView = (view) => {
    setSelectedView(view)
  }

  const handlePlayGame = () => {
    localStorage.setItem("selectedGame", selectedGame); // Guardar el juego seleccionado en localStorage
    router.push('/game'); // Redirigir a la página del juego
  };

  if (!user || !userData) {
    return <p>Cargando...</p>; // Mostrar un mensaje de carga mientras se verifica la autenticación y se obtienen los datos
  }

  return (
    <main className="dashboard-container">
        {/* User Container */}
          <div
              className={`user-container ${isDropdownOpen ? "expanded" : ""}`}
              onClick={toggleDropdown}
          >
          {/* Card User */}

            <div className="dropdown-indicator">
                {isDropdownOpen ? "≡" : "≡"}
            </div>

            <div className="card-user">
              <div className="perfil-container">

                <div className="container-photo">
                <img src={userData.profileImage || "img/perfil/default.png"} className="img-photo" alt="Profile" />
                </div>

                <div className="text-user">
                    <p>
                        @{userData.display_name}
                    </p>
                  
                </div>

                <div className="container-user-trofeos">
                  {trophies.length > 0 ? (
                    trophies.map((medal) => (
                      <img
                        key={medal}
                        src={`img/medallas/${medal}.svg`}
                        alt={`Medalla ${medal}`}
                        className="medal-icon"
                      />
                    ))
                  ) : (
                    <p>No hay medallas</p>
                  )}
                </div>


                <div className="container-user-total">
                  <p>{totalScore.toLocaleString()}</p> {/* Muestra el puntaje total con formato */}
                  <img src="img/icons/monedaScore.svg" alt="Moneda" />
                </div>


              </div>    
            </div>

            {/* Nav Container */}
            <div className="nav-container">
                <ul>
                    <li>
                        <img src="img/icons/game.svg" />
                        <button onClick={() => setSelectedView("games")}>GAMES</button>
                    </li>

                    <li>
                        <img src="img/icons/dashboard.svg" />
                        <button onClick={() => setSelectedView("dashboard")}>DASHBOARD</button>
                    </li>
                    <li>
                        <img
                        src="img/icons/user.svg"
                        />
                        <button onClick={() => setSelectedView("user")}>PERFIL</button>
                    </li>
                </ul>
            </div>

            {/* Invita y Gana */}
            <div className="invite-container">
                <h3>COMPITE CON TU COMPAÑERO</h3>
                <div className="container-toggle-score">
                      <div className="bottom-score">
                        <p
                        onClick={() => updateBetScore(-100)}
                        >-100</p>
                      </div>
                      <div className="score-apuesta">
                        <p>{betScore}</p>
                        <img 
                          src="img/icons/monedaScore.svg"
                        />
                      </div>
                      <div className="bottom-score">
                        <p
                          onClick={() => updateBetScore(+100)}
                        >+100</p>
                      </div>
                </div>
                <button 
                onClick={handleShowModal}
                className="bottom-competir">
                  <img
                  src="img/icons/invite.svg"
                  className="icon-invite"
                  ></img>
                  Competir</button>
            </div>

            {/* Configuration Footer */}
            <div className="container-logout ">
                  <button
                    onClick={handleLogout} 

                  >
                    Cerrar Sesión
                  </button>            
            </div>
            
       
          </div>

        {/* //Modal de Competicion */}
        {console.log(betScore)}
        {showModal && <BetModal betScore={betScore} updateBetScore={updateBetScore} onClose={handleCloseModal} userUID={user.uid} userEmail={user.email} updateCreateCompetition={updateCreateCompetition} />}

        {/* Modal de Premios */}
        {showPremiosModal && (
          <ModalPremios
            medal={activeMedal}
            rewardText="¡Tu aventura comienza aqui!"
            userUID={auth.currentUser?.uid}
            onClose={() => setShowPremiosModal(false)}
          />
        )}

        {/* Main Container */}
        {(() => {
     if (selectedView === "games") {
        return (
          <Games
            selectedGame={selectedGame}
            setSelectedGame={setSelectedGame}
            handlePlayGame={handlePlayGame}
          />
        );
      } else if (selectedView === "user") {
        return (
          <UserComponent />
        );
      } else if (selectedView === "dashboard") {
        return (
          <DashboardContent streak={streak} userUID={user.uid} changeSelectedView={changeSelectedView} />
        );
      } else {
        return (
              <div>Vista no válida seleccionada</div> 
        );
      }
    })()}
    </main>
  );
}
