"use client";

import { useEffect, useState, useCallback, use } from "react";
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
import { GetTrophiesService } from '../../services/GetTrofiesService'; // Servicio para obtener trofeos
import { GetScoreTotalService } from '../../services/GetScoreTotalService'; // Servicio para obtener el puntaje total

//Modal 

import BetModal from '../../components/modal/ModalCompetition';
import ModalPremios from "@/components/modal/ModalPremios";
import CustomSimpleModal from "../../components/modal/CustomSimpleModal"; // Importar el modal personalizado

//View 

import DashboardContent from "../../views/Dashboard/DashboardView";

import { getUserPoints } from "../../services/backend"
import Image from "next/image";


import { LOCAL_STORAGE_KEYS } from '../../utils/constants';

export default function Dashboard() {
  const [user, setUser] = useState(null);
  const [userData, setUserData] = useState(null);
  const [selectedView, setSelectedView] = useState("games");
  const [selectedGame, setSelectedGame] = useState("juego1");
  const [streak, setStreak] = useState(0);
  const router = useRouter();

  const [betScore, setBetScore] = useState(100); // Inicializamos la apuesta con un valor de 1000
  const [totalScore, setTotalScore] = useState(0); // Almacena el puntaje Total

  const [updateUserInformation, setUpdateUserInformation] = useState(false)


  //--- Premios---

  const [showPremiosModal, setShowPremiosModal] = useState(false);
  const [activeMedal, setActiveMedal] = useState(null);
  const [trophies, setTrophies] = useState([]); // Almacena las medallas del usuario


  //--- Apuesta ---

  //Mostrar Modal de Competencia: 
  const [showModal, setShowModal] = useState(false); // Controlamos la visibilidad del modal

  const [isCreateCompetition, setIsCreateCompetition] = useState(false);

  const [isGuest, setIsGuest] = useState(false);
  const [guestScore, setGuestScore] = useState(0);

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

        if (userScore?.score_total) {
          setTotalScore(userScore.score_total);
        } else {
          setTotalScore(0);
        }

        if (userDoc.exists()) {
          const userCurrentData = userDoc.data()

          console.log(userCurrentData)

          setUserData(userCurrentData);

          setUpdateUserInformation(false)

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

        const isGuest = localStorage.getItem(LOCAL_STORAGE_KEYS.IS_GUEST) === "true";

        if (isGuest) {
          console.log("Accediendo como invitado");
          setIsGuest(true);
          const guestScore = localStorage.getItem(LOCAL_STORAGE_KEYS.GUEST_SCORE) || 0;
          setGuestScore(parseInt(guestScore, 10));
          return;
        }

        router.push('/');
      }
    });

    return () => unsubscribe();
  }, [router, isCreateCompetition, updateUserInformation]);

  // -- DropDown---

  // Estado para manejar si el dropdown está abierto o cerrado
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Función para alternar el estado
  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const listEmailAnalytics = [
    "zaira@aroundthelab.com",
    "brayangaitan801@gmail.com",
    "andres@aroundthelab.com",
    "admmurbina@fsimilares.com",
    // "amdkcastilla@fsimilares.com",
    // "otro@email.com"
  ];

  const handleLogout = async () => {
    try {
      await signOut(auth);
      router.push('/'); // Redirigir a la página de inicio después del logout
    } catch (error) {
      console.error("Error al cerrar sesión", error);
    }
  };

  const handleLogoutIsGuest = async () => {
    try {
      localStorage.removeItem(LOCAL_STORAGE_KEYS.IS_GUEST);
      router.push('/');
    } catch (error) {
      console.error("Error al cerrar sesión", error);
    }
  }

  const updateUserProfilePicture = () => {
    setUpdateUserInformation(true)
  }

  const changeSelectedView = (view) => {
    setSelectedView(view)
  }

  const handlePlayGame = (game) => {
    localStorage.setItem("selectedGame", game); // Guardar el juego seleccionado en localStorage
    router.push('/game'); // Redirigir a la página del juego
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
    setModal(m => ({ ...m, open: false }));
  }, []);

  const showWarning = useCallback((option) => {
    setModal({
      open: true,
      title: "Acceso Denegado",
      message: `Los invitados no tienen acceso al ${option}.`,
      buttonText: "Aceptar",
      buttonType: "warning",
      modalType: "warning",
      buttonProps: {
        style: {
          background: "#ff9800", color: "#fff", border: "none",
          padding: "10px 15px",
          borderRadius: "10px"
        }
      },
    });
  }, []);

  // Helpers (puedes moverlos a un utils)
  function mergeGuestGames(games) {
    const map = new Map();
    for (const g of games || []) {
      const id = String(g?.id ?? "").trim().toLowerCase();
      if (!id) continue;
      const prev = map.get(id);
      map.set(id, { id, score: (prev?.score || 0) + Number(g?.score || 0) });
    }
    return Array.from(map.values());
  }

  async function migrateGuestData({
    uid,
    setIsGuest,
    setGuestScore,
  }) {
    try {
      const raw = localStorage.getItem(LOCAL_STORAGE_KEYS.GUEST_GAMES) || "[]";
      const list = mergeGuestGames(JSON.parse(raw));

      if (!list.length) return;

      const MAX_SCORE = 100; // límite de seguridad

      await Promise.all(list.map(async (g) => {
        const numberGame = Number(String(g.id).replace("juego", "")) || 0;
        let score = Math.ceil(Number(g.score || 0));

        // Validar el límite
        if (score > MAX_SCORE) score = MAX_SCORE;
        if (score < 0 || Number.isNaN(score)) score = 0;

        const payload = {
          uid,
          score,
          numberGame,
        };

        if (typeof postSessionGame === "function") {
          try {
            const resp = await postSessionGame(payload);
            if (resp?.message && resp?.session_id && typeof addCompetitionSession === "function") {
              addCompetitionSession(resp.session_id);
            }
          } catch (e) {
            console.error("postSessionGame failed", e);
          }
        }

        if (typeof lastGamePlayedEvent === "function") {
          try { lastGamePlayedEvent(uid, numberGame, g.id); } catch { }
        }
      }));

      // Recalcular el total con límite aplicado
      const total = list.reduce((acc, g) => {
        const score = Math.min(MAX_SCORE, Math.max(0, Number(g.score || 0)));
        return acc + score;
      }, 0);

      localStorage.setItem(LOCAL_STORAGE_KEYS.GUEST_SCORE, String(total));

      localStorage.removeItem(LOCAL_STORAGE_KEYS.IS_GUEST);
      localStorage.removeItem(LOCAL_STORAGE_KEYS.GUEST_GAMES);
      localStorage.removeItem(LOCAL_STORAGE_KEYS.GUEST_GAMES_PLAYED);

      setIsGuest(false);
      setGuestScore(0);
    } catch (e) {
      console.error("Error migrando datos de invitado", e);
    }
  }


  useEffect(() => {
    async function fetchGuestData() {
      if (!user) return;

      const wasGuest = localStorage.getItem(LOCAL_STORAGE_KEYS.IS_GUEST) === "true";
      const hasGames = !!localStorage.getItem(LOCAL_STORAGE_KEYS.GUEST_GAMES);

      if (wasGuest && hasGames) {
        await migrateGuestData({
          uid: user.uid,
          setIsGuest,
          setGuestScore,
        });
      }
    }

    fetchGuestData();
  }, [user]); // ← se ejecuta cuando ya hay user


  if ((!user || !userData) && !isGuest) {
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

            {
              !isGuest ?
                (
                  <div className="container-photo">
                    <Image src={userData.profile_picture || `${process.env.NEXT_PUBLIC_BASE_URL || ""}/img/perfil/default.png`} width={100} height={100} className="img-photo" alt="Profile" />
                  </div>
                )
                : (
                  <div className="container-photo">
                    <Image src={`${process.env.NEXT_PUBLIC_BASE_URL || ""}/img/perfil/default.png`} width={100} height={100} className="img-photo" alt="Profile" />
                  </div>
                )
            }

            <div className="text-user">
              {
                !isGuest ?
                  (
                    <p>
                      @{userData.display_name}
                    </p>
                  )
                  : (
                    <p>
                      @Invitado
                    </p>
                  )
              }

            </div>

            <div className="container-user-trofeos">
              {trophies.length > 0 ? (
                trophies.map((medal) => (
                  <Image
                    key={medal}
                    src={`img/medallas/${medal}.svg`}
                    alt={`Medalla ${medal}`}
                    width={32}
                    height={32}
                    className="medal-icon"
                  />
                ))
              ) : (
                <p>No hay medallas</p>
              )}
            </div>


            <div className="container-user-total">
              {!isGuest ? (
                <p>{totalScore.toLocaleString()}</p> /* Muestra el puntaje total con formato */
              ) : (
                <p>{guestScore.toLocaleString()}</p> // Muestra el puntaje total del invitado con formato
              )}
              <Image src="img/icons/monedaScore.svg" width={20} height={20} alt="Moneda" />
            </div>


          </div>
        </div>

        {/* Nav Container */}
        <div className="nav-container">
          <ul>
            <li>
              <Image src="img/icons/game.svg" width={22} height={28} alt="Game icon" />
              <button onClick={() => setSelectedView("games")}>GAMES</button>
            </li>

            <li>
              <Image src="img/icons/dashboard.svg" width={22} height={28} alt="Dashboard icon" />
              <button onClick={() => {
                if (!isGuest) {
                  setSelectedView("dashboard")
                } else {
                  showWarning("Dashboard");
                }
              }}>DASHBOARD</button>
            </li>

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

            <li>
              <Image src="img/icons/user.svg" width={22} height={28} alt="Profile icon" />
              <button onClick={() => {
                if (!isGuest) {
                  setSelectedView("user")
                } else {
                  showWarning("Perfil");
                }
              }}>PERFIL</button>
            </li>
            {
              !isGuest && listEmailAnalytics.includes(user.email) &&
              <li>
                <Image src="img/icons/analytics.svg" width={22} height={28} alt="Analytics icon" />
                <button onClick={() => {
                  if (listEmailAnalytics.includes(user.email)) {
                    router.push('/analytics');
                  } else {
                    alert("No tienes acceso a esta sección");
                  }
                }}>ANALYTICS</button>
              </li>
            }
          </ul>
        </div>

        {/* Invita y Gana */}
        <div style={{ display: 'none' }} className="invite-container">
          <h3>COMPITE CON TU COMPAÑERO</h3>
          <div className="container-toggle-score">
            <div className="bottom-score">
              <p
                onClick={() => updateBetScore(-100)}
              >-100</p>
            </div>
            <div className="score-apuesta">
              <p>{betScore}</p>
              <Image src="img/icons/monedaScore.svg" width={22} height={22} alt="Coin icon" />
            </div>
            <div className="bottom-score">
              <p
                className="right"
                onClick={() => updateBetScore(+100)}
              >+100</p>
            </div>
          </div>
          <button
            onClick={handleShowModal}
            className="bottom-competir">
            <Image src="img/icons/invite.svg" className="icon-invite" width={22} height={22} alt="Invite icon" />
            Competir</button>
        </div>

        {/* Configuration Footer */}
        {
          !isGuest ?
            (
              <div className="container-logout ">
                <button
                  onClick={handleLogout}

                >
                  Cerrar Sesión
                </button>
              </div>
            ) :
            (
              <div className="container-logout ">
                <button
                  onClick={handleLogoutIsGuest}

                >
                  Salir
                </button>
              </div>
            )
        }



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
            <UserComponent updateUserInformation={updateUserProfilePicture} />
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
