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

        </div>
    </main>
  );
}
