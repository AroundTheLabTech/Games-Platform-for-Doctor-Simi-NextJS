"use client";

import { useEffect, useState } from "react";
import { useRouter } from 'next/navigation';
import { onAuthStateChanged, signOut } from "firebase/auth";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { auth, db } from "../../lib/firebase";
import Slider from "react-slick"; // Importa la librería de carrusel
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Configuración del carrusel
const carouselSettings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
};

const locations = [
    "Argentina",
    "Bolivia",
    "Chile",
    "Colombia",
    "Costa Rica",
    "Cuba",
    "Ecuador",
    "El Salvador",
    "España",
    "Guatemala",
    "Honduras",
    "México",
    "Nicaragua",
    "Panamá",
    "Paraguay",
    "Perú",
    "República Dominicana",
    "Uruguay",
    "Venezuela"
  ];

export default function UserComponent() {
  const [user, setUser] = useState(null);
  const [userData, setUserData] = useState(null);
  const [selectedProfileImage, setSelectedProfileImage] = useState("img/perfil/img1.png"); // Imagen de perfil seleccionada
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
      await updateDoc(doc(db, "users", user.uid), {
        ...userData,
        profileImage: selectedProfileImage // Asegúrate de que el campo para la imagen de perfil se actualice
      });
      alert("Datos actualizados exitosamente");
    } catch (error) {
      console.error("Error al actualizar los datos", error);
      alert("Hubo un error al actualizar los datos.");
    }
  };

  if (!user || !userData) {
    return <p>Cargando...</p>;
  }

  return (
    <main className="dashboard-container">
      <div className="main-container bgcolors">
        <form onSubmit={handleFormSubmit}>
          <h2>Modificar Mis Datos</h2>
          <div className="inputs-container">
          <div className="profile-image-selector">
              <h3>Selecciona una Imagen de Perfil</h3>
              <Slider {...carouselSettings}>
                <div>
                  <img 
                    src="img/perfil/img1.png" 
                    alt="Imagen 1" 
                    onClick={() => setSelectedProfileImage("img/perfil/img1.png")} 
                    className={selectedProfileImage === "img/perfil/img1.png" ? "selected" : ""}
                  />
                </div>
                <div>
                  <img 
                    src="img/perfil/img2.png" 
                    alt="Imagen 2" 
                    onClick={() => setSelectedProfileImage("img/perfil/img2.png")} 
                    className={selectedProfileImage === "img/perfil/img2.png" ? "selected" : ""}
                  />
                </div>
                <div>
                  <img 
                    src="img/perfil/img3.png" 
                    alt="Imagen 2" 
                    onClick={() => setSelectedProfileImage("img/perfil/img3.png")} 
                    className={selectedProfileImage === "img/perfil/img3.png" ? "selected" : ""}
                  />
                </div>
                <div>
                  <img 
                    src="img/perfil/img4.png" 
                    alt="Imagen 2" 
                    onClick={() => setSelectedProfileImage("img/perfil/img4.png")} 
                    className={selectedProfileImage === "img/perfil/img4.png" ? "selected" : ""}
                  />
                </div>
                <div>
                  <img 
                    src="img/perfil/img5.png" 
                    alt="Imagen 2" 
                    onClick={() => setSelectedProfileImage("img/perfil/img5.png")} 
                    className={selectedProfileImage === "img/perfil/img5.png" ? "selected" : ""}
                  />
                </div>
                <div>
                  <img 
                    src="img/perfil/img6.png" 
                    alt="Imagen 2" 
                    onClick={() => setSelectedProfileImage("img/perfil/img6.png")} 
                    className={selectedProfileImage === "img/perfil/img6.png" ? "selected" : ""}
                  />
                </div>
                <div>
                  <img 
                    src="img/perfil/img7.png" 
                    alt="Imagen 2" 
                    onClick={() => setSelectedProfileImage("img/perfil/img7.png")} 
                    className={selectedProfileImage === "img/perfil/img7.png" ? "selected" : ""}
                  />
                </div>
                <div>
                  <img 
                    src="img/perfil/img8.png" 
                    alt="Imagen 2" 
                    onClick={() => setSelectedProfileImage("img/perfil/img8.png")} 
                    className={selectedProfileImage === "img/perfil/img8.png" ? "selected" : ""}
                  />
                </div>
                <div>
                  <img 
                    src="img/perfil/img9.png" 
                    alt="Imagen 2" 
                    onClick={() => setSelectedProfileImage("img/perfil/img9.png")} 
                    className={selectedProfileImage === "img/perfil/img9.png" ? "selected" : ""}
                  />
                </div>
                <div>
                  <img 
                    src="img/perfil/default.png" 
                    alt="Imagen 2" 
                    onClick={() => setSelectedProfileImage("img/perfil/default.png")} 
                    className={selectedProfileImage === "img/perfil/default.png" ? "selected" : ""}
                  />
                </div>
                {/* Agrega más imágenes aquí */}
              </Slider>
            </div>
            <h3>Nombre del jugador</h3>
            <input
              type="text"
              name="display_name"
              value={userData.display_name || ''}
              onChange={handleInputChange}
              placeholder="Nombre"
            />
            
            <h3>Pais</h3>
            <select 
              name="location"
              className="select-gender"
              value={userData.location || ''}
              onChange={handleInputChange}
            >
              <option disabled value="">Seleccionar Ubicación</option>
              {locations.map(location => (
                <option key={location} value={location}>{location}</option>
              ))}
            </select>
            
            <h3>Genero</h3>
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
            
            <h3>Edad</h3>
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
