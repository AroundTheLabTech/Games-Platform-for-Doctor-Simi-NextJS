"use client";

import { useEffect, useState } from "react";
import { useRouter } from 'next/navigation';
import { auth } from "../../../lib/firebase"; 
import { onAuthStateChanged, signOut } from "firebase/auth"; 
import { doc, getDoc, updateDoc } from "firebase/firestore"; 
import { db } from "../../../lib/firebase"; 

export default function Dashboard() {
  const [user, setUser] = useState(null);
  const [userData, setUserData] = useState(null); 
  const [selectedGame, setSelectedGame] = useState("juego1"); 
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        setUser(user);
        
        const userDoc = await getDoc(doc(db, "users", user.uid));
        if (userDoc.exists()) {
          setUserData(userDoc.data());
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
      router.push('/'); 
    } catch (error) {
      console.error("Error al cerrar sesión", error);
    }
  };

  const handlePlayGame = () => {
    localStorage.setItem("selectedGame", selectedGame); 
    router.push('/game'); 
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateDoc(doc(db, "users", user.uid), userData);
      alert("Datos actualizados exitosamente");
    } catch (error) {
      console.error("Error al actualizar los datos", error);
      alert("Hubo un error al actualizar los datos.");
    }
  };

  if (!user || !userData) {
    return <p>Cargando...</p>; 
  }

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
        <div className="user-container">
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
                    <button onClick={handleLogout} className="logout-button">
                        Cerrar Sesión
                    </button>
                </div>
            </div>

            <div className="nav-container">
                <ul>
                    <li>
                        <img src="img/icons/game.svg" />
                        <a href="/games">GAMES</a>
                    </li>
                    <li>
                        <img src="img/icons/dashboard.svg" />
                        <a href="/dashboard">DASHBOARD</a>
                    </li>
                    <li>
                        <img src="img/icons/user.svg" />
                        <a href="/user">USER</a>
                    </li>
                </ul>
            </div>

            <div className="invite-container">
                <h3>¡Invita y Gana!</h3>
                <button>
                  <img src="img/icons/invite.svg" className="icon-invite"></img>
                  Invitar
                </button>
            </div>

            <div className="objetivo-container">
                <h3>Objetivo Semanal</h3>
            </div>
        </div>

        <div className="main-container bgcolors">
          <form onSubmit={handleFormSubmit}>
            <h2>Modificar Mis Datos</h2>
            <div className="inputs-container">
              <input
                type="text"
                name="display_name"
                value={userData.display_name || ''}
                onChange={handleInputChange}
                placeholder="Nombre"
              />
              <input
                type="email"
                name="email"
                value={userData.email || ''}
                onChange={handleInputChange}
                placeholder="Email"
              />
              <input
                type="password"
                name="password"
                onChange={handleInputChange}
                placeholder="Password"
              />
              <input
                type="text"
                name="location"
                value={userData.location || ''}
                onChange={handleInputChange}
                placeholder="Ubicación"
              />
              <select 
                name="gender"
                className="select-gender"
                value={userData.gender || ''}
                onChange={handleInputChange}
              >
                <option disabled value="">Seleccionar</option>
                <option value="male">Masculino</option>
                <option value="female">Femenino</option>
                <option value="other">Otro</option>
              </select>
              <input
                type="number"
                name="age"
                value={userData.age || ''}
                onChange={handleInputChange}
                placeholder="Edad"
              />
            </div>
            <div className="bottoms-container">
              <button className="push--flat" type="submit">
                <h3 className="text-boton">Modificar</h3>
              </button>
            </div>
          </form>
        </div>
    </main>
  );
}
