"use client";

import styles from "./page.module.css";
import Image from 'next/image';
import { auth } from "../../lib/firebase";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore"; // Importar Firestore
import { db } from "../../lib/firebase"; // Importar la instancia de Firestore configurada en firebase.js
import { useState, useEffect, useRef } from "react";

export default function Home() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [location, setLocation] = useState("");
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [showRegisterForm, setShowRegisterForm] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      console.log('User logged in:', userCredential.user);
      setShowModal(true);
      setModalMessage("Inicio de sesión exitoso. ¡Bienvenido de nuevo!");
    } catch (error) {
      console.error('Error logging in:', error);
      handleAuthError(error);
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      console.log('User registered:', userCredential.user);
      
          // Aquí agregamos el console.log para ver los datos que se guardarán
    console.log("Datos que se enviarán a Firestore:", {
      email,
      gender,
      ubication: location, // o location, dependiendo de cómo quieras llamarlo
      age,
    });

      // Guardar los datos adicionales en Firestore
      await setDoc(doc(db, "users", userCredential.user.uid), {
        email: email,
        ubication: location,
        gender: gender,
        age: age,
      });

      setShowModal(true);
      setModalMessage("Registro exitoso. ¡Tu cuenta ha sido creada!");
    } catch (error) {
      console.error('Error registering:', error);
      handleAuthError(error);
    }
  };

  const handleAuthError = (error) => {
    let message = "Ocurrió un error. Por favor, intenta de nuevo.";
    if (error.code === 'auth/wrong-password' || error.code === 'auth/user-not-found') {
      message = "Contraseña o correo incorrecto. Por favor, verifica tus datos.";
    } else if (error.code === 'auth/email-already-in-use') {
      message = "Este correo ya está en uso. Por favor, intenta con otro correo.";
    }
    setModalMessage(message);
    setShowModal(true);
  };

  const audioRef = useRef(null);

  useEffect(() => {
    audioRef.current = new Audio('/sound/bottom.m4a');
  }, []);

  const playSound = () => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  const handleLoginButtonClick = () => {
    playSound();
    setShowLoginForm(true);
    setShowRegisterForm(false);
    setShowModal(false);
  };

  const handleRegisterButtonClick = () => {
    playSound();
    setShowRegisterForm(true);
    setShowLoginForm(false);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    if (modalMessage === "Registro exitoso. ¡Tu cuenta ha sido creada!") {
      setShowRegisterForm(false);
      setShowLoginForm(true);
    }
  };

  return (
    <main className='container-login'>  
        <div className="container-login-game"> 

            {/* Columna */}
            <div className="columna">
              <img 
              className="medal"
              src="img/medallas/medal-1.svg">
              </img>   
              <img 
              className="medal"
              src="img/medallas/medal-2.svg">
              </img>   
            </div>

            <div className="login-center">
              <div className="container-center">
                {!showLoginForm && !showRegisterForm && (
                  <>
                    <h1 className="title-login">
                    ¡GANAR NUNCA FUE MÁS DIVERTIDO!
                    </h1>

                    <div className="bottoms-container">
                      <button className="push--flat"
                      onClick={handleLoginButtonClick}
                      >
                        <h3 className="text-boton">LOGIN</h3>
                      </button>
                      <button className="push--flat-blue"
                      onClick={handleRegisterButtonClick}
                      >
                        <h3 className="text-boton-2">REGISTER</h3>
                      </button>
                    </div>
                  </>
                )}

                {showLoginForm && (
                  <form onSubmit={handleLogin}>
                    <h2>Iniciar Sesión</h2>
                    <div className="inputs-container">
                      <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                      <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>
                    <div className="bottoms-container">
                      <button className="push--flat" type="submit">
                        <h3 className="text-boton">LOGIN</h3>
                      </button>
                      <button className="push--flat-blue" onClick={handleRegisterButtonClick}>
                        <h3 className="text-boton-2">REGISTER</h3>
                      </button>
                    </div>
                  </form>
                )}

                {showRegisterForm && (
                  <form onSubmit={handleRegister}>
                    <h2>Registro</h2>
                    <div className="inputs-container">
                      <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                      <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                      <input
                        type="text"
                        placeholder="Ubicación"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                      />
                      <select value={gender} onChange={(e) => setGender(e.target.value)}>
                        <option value="" disabled>Género</option>
                        <option value="male">Masculino</option>
                        <option value="female">Femenino</option>
                        <option value="other">Otro</option>
                      </select>
                      <input
                        type="number"
                        placeholder="Edad"
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
                      />
                    </div>
                    <div className="bottoms-container">
                      <button className="push--flat" type="submit">
                        <h3 className="text-boton">REGISTER</h3>
                      </button>
                      <button className="push--flat-blue" onClick={handleLoginButtonClick}>
                        <h3 className="text-boton-2">LOGIN</h3>
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>

            {/* Columna */}
            <div className="columna">
              <img 
              className="medal"
              src="img/medallas/medal-3.svg">
              </img>   
              <img 
              className="medal"
              src="img/medallas/medal-4.svg">
              </img>   
            </div>        

            {/* Modal de registro exitoso o errores */}
            {showModal && (
              <div className="modal">
                <div className="modal-content">
                  <h2>{modalMessage.includes("exitoso") ? "¡Éxito!" : "Error"}</h2>
                  <p>{modalMessage}</p>
                  <button className="push--flat" onClick={handleCloseModal}>
                    <h3 className="text-boton modal-boton">CONTINUAR</h3>
                  </button>
                </div>
              </div>
            )}
        </div>
    </main>
  );
}


