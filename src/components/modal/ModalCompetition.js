import React from 'react';
import { useState } from 'react';

// --Services-- 
import { createCompetition } from "../../services/CreateCompetition";


export default function BetModal({ betScore, onClose, updateBetScore, userUID}) {
  
  // --- Validation Email --- 
  
  const [email, setEmail] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(false);

  const validateEmail = (value) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsEmailValid(emailRegex.test(value));
    setEmail(value);
  };

  return (
    <div className="modal-overlay-competition">
      <div className="modal-content-competition">
        

        {/* --Nav */}
        <div className='nav-competition'>
          {/* Notificacion */}
          <img
            src='icons//modal-icons/notificacion-none-competencia.svg'
          />

          {/* Close */}
          <img
            src='icons/modal-icons/close-competencia.svg'
            onClick={onClose}
          />
        </div>
        
        {/* --Title-- */}
        <h2>COMPITE CON UN COMPAÑERO</h2>
      
        {/* --Input Competencia */}
        <div className={`container-email-competencia ${isEmailValid ? 'correo-valido' : 'correo-invalido'}`}>
          <h3>Correo Electrónico</h3>
          <input
            onChange={(e) => validateEmail(e.target.value)}
            type='text'
          />  
        </div>

        {/* --Toogle Score --  */}
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
          onClick={() => createCompetition(userUID, email, betScore)} 

        >COMPETIR</button>

      </div>
    </div>
  );
}
