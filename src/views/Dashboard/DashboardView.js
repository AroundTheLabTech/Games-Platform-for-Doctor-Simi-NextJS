import React, { useState, useEffect } from "react";

import 'react-circular-progressbar/dist/styles.css';
import { CompetitionService } from './application/CompetitionService.js';

export default function DashboardComponent({userUID}) {
  const [racha, setRacha] = useState(0);

  // Bloques de Información
  const [posicion, setPosicion] = useState(null);
  const [mejorPuntaje, setMejorPuntaje] = useState(null);
  const [totalPartidas, setTotalPartidas] = useState(null);
  const competitionService = new CompetitionService(); // Definir fuera del useEffect

  // Ranking

  const [topUsers, setTopUsers] = useState([]);

    
  async function fetchData() {
    const pos = await competitionService.obtenerPosicionUsuario(userUID);
    const bestScore = await competitionService.obtenerMejorPuntajeUsuario(userUID);
    const total = await competitionService.obtenerTotalPartidasUsuario(userUID);
  
    // Llamada para obtener top 7 usuarios
    const top7 = await competitionService.obtenerTop7Users();
  
    setPosicion(pos);
    setMejorPuntaje(bestScore);
    setTotalPartidas(total);
    setTopUsers(top7);
  }
  

  

  useEffect(() => {
    const competitionService = new CompetitionService();

  
    fetchData();
  }, []);


  return (
    <div className="dashboard-user-container">
      <div className="header">
        <h2>DASHBOARD</h2>
        <div className="container-racha">
          <img src="img/icons/calendar.svg" alt="Calendar Icon" />
          <p>{racha} Días de Racha</p>
        </div>
      </div>

      <div className="container-general-dashboard">
        {/* Container Info Dashboard */}
        <div className="container-info-dashboard">

          {/* Container News */}
          <div className="container-news">
            {/* Left News */}
            <div className="left-news">
              <div className="title-news">
                <h3>
                  <span>¡Simijuegos</span> <br />se visten de Navidad!
                </h3>
              </div>
              
              <button>Jugar Ahora
                <img src="img/icons/play.svg" alt="" />
              </button>
            </div>

            {/* Right News */}

            <div className="right-news">
              <img src="img/dashboard/arbolNavidad.svg" alt="" />
            </div>
          </div>
          
          {/* Bloque de Posición */}
          <div className="block-dashboard block-posicion">
            {/* Text Image */}
            <div className="text-image">
              <img src="img/icons/dashboard/icon-posicion.svg" alt="" />
              <p>¡Te encuentras en la posición:</p>
            </div>

            <div className="pointer-block">
              <p>{posicion ? `#${posicion}` : 'Cargando...'}</p>
            </div>
            
          </div>

          {/* Bloque Mejor Puntuación */}

          <div className="block-dashboard block-best-score">
            {/* Text Image */}
            <div className="text-image">
              <img src="img/icons/dashboard/icon-best.svg" alt="" />
              <p>¡Tu mejor puntuación es: </p>
            </div>

            <div className="pointer-block">
              <p>{mejorPuntaje !== null ? `${mejorPuntaje} pts` : 'Cargando...'}</p>
            </div>
            
          </div>

          {/* Bloque Total de Partidas */}

          <div className="block-dashboard block-cantidad-partidas">
            {/* Text Image */}
            <div className="text-image">
              <img src="img/icons/dashboard/icon-partidas.svg" alt="" />
              <p>¡Tu total de partidas es: </p>
            </div>

            <div className="pointer-block">
              <p>{totalPartidas !== null ? `${totalPartidas} pt` : 'Cargando...'}</p>
            </div>
            
          </div>

          
        </div>

        {/* Ranking Mundial */}
        <div className="ranking-mundial">
          {/* Title Ranking */}

          <div className="title-ranking">
            <h1>Ranking Mundial</h1>
          </div>

          {/* Users Ranking */}

          <div className="container-user-ranking">
            {topUsers.map((user, index) => (
              <div className="row-user" key={user.uid}>
                <div className="container-corona">
                  {index === 0 && <img src="img/icons/dashboard/corona-oro.svg" alt="" />}
                  {index === 1 && <img src="img/icons/dashboard/corona-plata.svg" alt="" />}
                  {index === 2 && <img src="img/icons/dashboard/corona-bronce.svg" alt="" />}
                  {index >= 3 && <h3 className="corona-number">{index + 1}to</h3>}
                </div>

                <div className="container-user-information">
                  <p>{user.score_total?.toLocaleString() || 0}pts</p>
                  <span>{user.display_name || 'Sin Nombre'}</span>
                </div>

                <div className="container-puntajes-premios">
                  <img src="img/icons/monedaScore.svg" alt="" />
                  <p>1000</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>


    </div>
  );
}
