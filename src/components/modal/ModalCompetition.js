import React, { useState, useEffect } from 'react';

// --Services-- 
import { createCompetition } from "../../services/CreateCompetition";
import { fetchCompetitions, updateCompetitionStatus } from "../../services/FetchCompetition";
import { getAllCompetition, getCompetitiveStatus, getListAvalibleCompetition, getListCompetitionNotification, postCreateCompetition, putRejectCompetition, putAcceptCompetition } from "../../services/backend"
import CompetitionCard from '../card/CompetitionCard';

export default function BetModal({ betScore, onClose, updateBetScore, userUID, userEmail, updateCreateCompetition }) {

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

  const [competitionNotification, setCompetitionNotification] = useState([])
  const [competitions, setCompetitions] = useState();
  const [viewAllCompetitions, setViewAllCompetitions] = useState(false);
  const [loadingCompetitions, setLoadingCompetitions] = useState(false);
  const [competitionError, setCompetitionError] = useState(false)

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

  useEffect(() => {
    async function fetchData() {
      if (viewAllCompetitions) {
        const allCompetitions = await getAllCompetition(userUID);

        setCompetitions(allCompetitions);
      } else {
        const response = await getListAvalibleCompetition(userUID);

        console.log(userUID)

        response.forEach(async (competition) => {
          await getCompetitiveStatus(userUID, competition.UID, competition.id);
        });

        console.log(response)

        setCompetitions(response);
      }

      setLoadingCompetitions(false)
    }

    setLoadingCompetitions(true)
    fetchData();
  }, [userUID, viewAllCompetitions, showNotifications]);

  useEffect(() => {
    async function fetchData() {
      const response = await getListCompetitionNotification(userUID);

      setCompetitionNotification(response);
    }

    fetchData();
  }, [userUID, showNotifications]);


  // --- Manejar el estado de creación de competencia ---
  /*
  const handleCreateCompetition = async () => {
    try {
      await createCompetition(userUID, email, betScore); // Llamar a la función de creación
      setCompetitionCreated(true); // Cambiar el estado para mostrar el contenedor de éxito
    } catch (error) {
      console.error("Error al crear la competencia:", error);
      setCompetitionCreated(false); // En caso de error, mantenemos la pantalla de creación
    }
  };
  */
  async function handleCreateCompetition() {
    if (!email) {
      setCompetitionError("El correo es requerido");
    } else if (email && userEmail && betScore && userUID) {

      if (email !== userEmail) {
        setCompetitionError(null);
        const createCompetition = {
          sender_email: userEmail,
          score: betScore,
          target_email: email,
          sender_uid: userUID,
        };

        const response = await postCreateCompetition(createCompetition);

        if (response?.message) {
          setCompetitionCreated(true)
          updateCreateCompetition()
        } else {
          console.error("Error al crear la competencia:", error);
          setCompetitionError("Ocurrio un error")
          setCompetitionCreated(false);
        }
      }
    } else {
      setCompetitionError("No puedes competir contra ti")
    }
  }

  async function handleReject(UID, id) {
    console.log('Rechazar');

    await putRejectCompetition(userUID, UID, id);
  }

  async function handleApprove(UID, id) {
    console.log('Aprobar');

    await putAcceptCompetition(userUID, UID, id);
  }


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
                  {console.log("invite", competition)}
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
                        // await updateCompetitionStatus(userUID, competition.UID, "aceptado"); // Pasa competition.UID
                        handleApprove(competition.UID, competition.id)
                        // const competitions = await fetchCompetitions(userUID); // Volver a cargar las competiciones
                        // setInvitadoCompetitions(competitions);
                        setShowNotifications(false);
                      }}
                    />
                    {/* Rechazar competición */}
                    <img
                      src='icons/modal-icons/erase-notificacion.svg'
                      onClick={async () => {
                        // await updateCompetitionStatus(userUID, competition.UID, "rechazado"); // Pasa competition.UID
                        handleReject(competition.UID, competition.id)
                        // const competitions = await fetchCompetitions(userUID); // Volver a cargar las competiciones
                        // setInvitadoCompetitions(competitions);
                        setShowNotifications(false);
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
              src={competitionNotification.length > 0
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

              <button onClick={() => handleCreateCompetition()}>COMPETIR</button>

              {
                competitionError &&
                <p>{competitionError}</p>
              }

              <br></br>
              {
                <div className='competition-container' >
                  <h3 className='active-competition-title' >Competencias activas</h3>
                  <div className='active-competition-content' >
                    <span className='show-more' onClick={() => setViewAllCompetitions(!viewAllCompetitions)} >{viewAllCompetitions ? "Ver menos" : "Ver más"}</span>
                    <div className='competition-card-container' >
                      {
                        competitions && competitions.length > 0 && userUID ? competitions.map((competition, index) => {
                          return <CompetitionCard key={index} competition={competition} notifications={false} uid={userUID} />
                        }) :
                          <p>{loadingCompetitions ? "Loading..." : "No hay competencias activas"}</p>
                      }
                    </div>
                  </div>
                </div>
              }
            </div>
          )}
        </div>
      )}
    </div>
  );
}
