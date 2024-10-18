import React, { useState, useEffect } from 'react';

// --Services-- 
import { createCompetition } from "../../services/CreateCompetition";
import { fetchCompetitions, updateCompetitionStatus } from "../../services/FetchCompetition";

export default function BetModal({ betScore, onClose, updateBetScore, userUID}) {

    // --- Confirmación que se inició la competencia ---
    const [competitionCreated, setCompetitionCreated] = useState(false); // Nuevo estado para controlar si la competencia fue creada

    //Verificar si existen notificaciones 

    const [hasInvitations, setHasInvitations] = useState(false); // Nuevo estado para verificar si hay invitaciones

    // --- Validation Email ---
    const [email, setEmail] = useState('');
    const [isEmailValid, setIsEmailValid] = useState(false);

    const validateEmail = (value) => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      setIsEmailValid(emailRegex.test(value));
      setEmail(value);
    };

    // --- Notificaciones ---
    const [showNotifications, setShowNotifications] = useState(false);

    // --- Consultas de Notificación y Actualización ---
    const [invitadoCompetitions, setInvitadoCompetitions] = useState([]);

    useEffect(() => {
      const loadCompetitions = async () => {
        const competitions = await fetchCompetitions(userUID);
        setInvitadoCompetitions(competitions);
    
        // Verificar si hay invitaciones con reto_status: "invitado"
        if (competitions.length > 0) {
          setHasInvitations(true); // Cambiar el estado si existen invitaciones
        } else {
          setHasInvitations(false); // No hay invitaciones
        }
      };
    
      loadCompetitions();
    }, [userUID]);
    

    // --- Manejar el estado de creación de competencia ---
    const handleCreateCompetition = async () => {
      try {
        await createCompetition(userUID, email, betScore); // Llamar a la función de creación
        setCompetitionCreated(true); // Cambiar el estado para mostrar el contenedor de éxito
      } catch (error) {
        console.error("Error al crear la competencia:", error);
        setCompetitionCreated(false); // En caso de error, mantenemos la pantalla de creación
      }
    };



    return (
       <div className="modal-overlay-competition">
        {showNotifications ? (
          // --- Notificaciones ---
          <div className="modal-content-notificaciones">
            
            {/* -- Navegación --  */}   
            <div className='nav-competition'>
              {/* Notificacion */}
              <img
                src='icons/modal-icons/swords.svg'
                onClick={() => setShowNotifications(false)} // Mostrar notificaciones
              />

              {/* Close */}
              <img
                src='icons/modal-icons/close-competencia.svg'
                onClick={onClose}
              />
            </div>            
            <h2>NOTIFICACIONES</h2>
            <div className='notificacion-container'>
              {invitadoCompetitions.length > 0 ? (
               invitadoCompetitions.map((competition) => (
                <div className='row-notificacion' key={competition.UID}>
                  {/* -- Image --  */}
                  <div className='image-notificacion'>
                    <img src='img/perfil/default.png' />
                  </div>
                  {/* Informacion */}
                  <div className='informacion-notificacion'>
                    <h3>{competition.name}</h3>
                    <p>Te ha invitado a competir</p>
                  </div>
              
                  {/* Actions */}
                  <div className='action-container'>
                    {/* Aceptar competición */}
                    <img
                      src='icons/modal-icons/check-notificacion.svg'
                      onClick={async () => {
                        await updateCompetitionStatus(userUID, competition.UID, "aceptado"); // Pasa competition.UID
                        const competitions = await fetchCompetitions(userUID); // Volver a cargar las competiciones
                        setInvitadoCompetitions(competitions);
                      }}
                    />
                    {/* Rechazar competición */}
                    <img
                      src='icons/modal-icons/erase-notificacion.svg'
                      onClick={async () => {
                        await updateCompetitionStatus(userUID, competition.UID, "rechazado"); // Pasa competition.UID
                        const competitions = await fetchCompetitions(userUID); // Volver a cargar las competiciones
                        setInvitadoCompetitions(competitions);
                      }}
                    />
                  </div>
                </div>
              ))
              
              ) : (
                <p>No tienes invitaciones de competición.</p>
              )}
            </div>

          </div>
        ) : (
          <div className="modal-content-competition">
            <div className='nav-competition'>
              {/* Notificacion */}
              <img
                  src={hasInvitations 
                        ? 'icons/modal-icons/notificacion-competencia.svg' 
                        : 'icons/modal-icons/notificacion-none-competencia.svg'}
                  onClick={() => setShowNotifications(true)} // Mostrar notificaciones
                />

              {/* Close */}
              <img
                src='icons/modal-icons/close-competencia.svg'
                onClick={onClose}
              />
            </div>

            {/* --- Mostrar el estado según si la competencia fue creada o no --- */}
            {competitionCreated ? (
              // --- Competición Creada ---
              <div className="container-competition-creada">
                <h3>¡Se ha enviado la invitación! Mucha suerte</h3>
              </div>
            ) : (
              // --- Competición no creada (Formulario para crear) ---
              <div className="container-message-competition">
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

                {/* --Toogle Score -- */}
                <div className="container-toggle-score">
                  <div className="bottom-score"> 
                    <p onClick={() => updateBetScore(-100)}>-100</p>
                  </div>

                  <div className="score-apuesta">
                    <p>{betScore}</p>
                    <img src="img/icons/monedaScore.svg" />
                  </div>  
                  
                  <div className="bottom-score">
                    <p onClick={() => updateBetScore(+100)}>+100</p>
                  </div>
                </div>

                <button onClick={handleCreateCompetition}>COMPETIR</button>
              </div>
            )}
          </div>
        )}
      </div>
    );
  }
