"use client";


import styles from "./page.module.css";
import Image from 'next/image';
import {auth} from "../../lib/firebase";
import {createUserWithEmailAndPassword} from "firebase/auth";
import {useState, useEffect, useRef} from "react";

export default function Home() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      console.log('User signed up:', userCredential.user);
    } catch (error) {
      console.error('Error signing up:', error);
    }
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



  return (
    <main className='container-login'>  
        {/* <form onSubmit={handleSignUp}>
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
          
          <button type="submit">Sign Up</button>
          
        </form> */}

        {/* <header>
          <img 
            src="img/login/header.svg"
          />
        </header> */}

        <div className="container-login-game"> 
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
                <h1 className="title-login">
                ¡GANAR NUNCA FUE MÁS DIVERTIDO!
                </h1>

                <div className="bottoms-container">
                <button className="push--flat"
                onClick={playSound}
                ><h3 className="text-boton">LOGIN</h3></button>
                <button className="push--flat-blue"
                onClick={playSound}
                ><h3 className="text-boton-2">REGISTER</h3></button>
                </div>
              </div>
            </div>
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
            
            </div>
    </main>
  );
}
