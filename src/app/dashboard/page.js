"use client";

import { useEffect, useState } from "react";
import { useRouter } from 'next/navigation';
import { auth, db } from "../../../lib/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { doc, getDoc, setDoc, updateDoc, collection } from "firebase/firestore";
import dayjs from 'dayjs';
import Games from "../../components/Game";
import DashboardContent from "../../components/DashboardComponent";
import UserComponent from "../../components/UserComponent";

export default function Dashboard() {
  const [user, setUser] = useState(null);
  const [userData, setUserData] = useState(null);
  const [selectedView, setSelectedView] = useState("games");
  const [selectedGame, setSelectedGame] = useState("juego1");
  const [streak, setStreak] = useState(0);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        setUser(user);

        const userDocRef = doc(db, "users", user.uid);
        const userDoc = await getDoc(userDocRef);
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
        }
      } else {
        router.push('/');
      }
    });

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

  return (
    <main className="dashboard-container">
        {/* User Container */}
        <div className="user-container">
            {/* Card User */}
            <div className="card-user">
                <div className="container-photo">
                    <img  src="img/perfil/img1.png" className="img-photo"/>
                </div>

                <div className="text-user">
                    <h3>
                        ¡HOLA! 
                    </h3>
                    <p>
                        {userData.display_name}
                    </p>
                    <button onClick={handleLogout} className="logout-button">
                        Cerrar Sesión
                    </button>
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
                        <button onClick={() => setSelectedView("user")}>USER</button>
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

            {/* Objetivo Semanal */}
            <div className="objetivo-container">
                <h3>Objetivo Semanal</h3>
            </div>
        </div>

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
          <DashboardContent streak={streak} />
        );
      } else {
        return (
          <DefaultComponent />
        );
      }
    })()}
    </main>
  );
}
