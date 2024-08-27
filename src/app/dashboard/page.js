"use client";

import { useEffect, useState } from "react";
import { useRouter } from 'next/navigation';
import { auth, db } from "../../../lib/firebase"; // Importar Firebase Auth
import { onAuthStateChanged, signOut } from "firebase/auth"; // Importar funciones de Auth
import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore"; // Importar funciones de Firestore
import dayjs from 'dayjs'; // Importar dayjs para manejar fechas
import Games from "../../components/Game";
import DashboardContent from "../../components/DashboardComponent"; // Importar componente de DashboardContent

export default function Dashboard() {
  const [user, setUser] = useState(null);
  const [userData, setUserData] = useState(null); // Estado para los datos adicionales del usuario
  const [selectedView, setSelectedView] = useState("games"); // Estado para la vista seleccionada (games o dashboard)
  const [selectedGame, setSelectedGame] = useState("juego1"); // Estado para el juego seleccionado
  const [streak, setStreak] = useState(0); // Estado para manejar la racha de inicio de sesión
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        setUser(user);

        const userDoc = await getDoc(doc(db, "users", user.uid));
        if (userDoc.exists()) {
          setUserData(userDoc.data());

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
          } else {
            const initialStreak = differenceInDays === 1 ? 1 : 0;
            setStreak(initialStreak);

            await setDoc(stadisticsDocRef, {
              score_racha: initialStreak,
            });
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
                        <img src="img/icons/game.svg" />
                        <button onClick={() => setSelectedView("games")}>GAMES</button>
                    </li>

                    <li>
                        <img src="img/icons/dashboard.svg" />
                        <button onClick={() => setSelectedView("dashboard")}>DASHBOARD</button>
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
        {selectedView === "games" ? (
          <Games selectedGame={selectedGame} setSelectedGame={setSelectedGame} handlePlayGame={handlePlayGame} />
        ) : (
          <DashboardContent streak={streak} />
        )}
    </main>
  );
}
