import React, { useState, useEffect } from "react";

import 'react-circular-progressbar/dist/styles.css';
import { CompetitionService } from './application/CompetitionService.js';
import Image from "next/image";

export default function DashboardComponent({userUID, changeSelectedView}) {
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
          <Image src="img/icons/calendar.svg" alt="Calendar Icon" width={20} height={20} />
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
                  <span>¡Simijuegos</span> <br />compite con estrategia!
                </h3>
              </div>
              
              <button onClick={() => changeSelectedView("games")} >Jugar Ahora
                <Image src="img/icons/play.svg" alt="Play icon" width={24} height={24} />
              </button>
            </div>

            {/* Right News */}

            <div className="right-news">
              {/* 
              <Image src="img/dashboard/arbolNavidad.svg" alt="" />
              */}
            </div>
          </div>
          
          {/* Bloque de Posición */}
          <div className="block-dashboard block-posicion">
            {/* Text Image */}
            <div className="text-image">
              <Image src="img/icons/dashboard/icon-posicion.svg" alt="Position icon" width={100} height={100} />
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
              <Image src="img/icons/dashboard/icon-best.svg" alt="Point icon" width={100} height={100} />
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
              <Image src="img/icons/dashboard/icon-partidas.svg" alt="Total plays icon" width={100} height={100} />
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
                  {index === 0 && <Image src="img/icons/dashboard/corona-oro.svg" alt="Gold crown" width={55} height={55}/>}
                  {index === 1 && <Image src="img/icons/dashboard/corona-plata.svg" alt="Silver crown" width={55} height={55}/>}
                  {index === 2 && <Image src="img/icons/dashboard/corona-bronce.svg" alt="Bronze crown" width={55} height={55}/>}
                  {index >= 3 && <h3 className="corona-number">{index + 1}to</h3>}
                </div>

                <div className="container-user-information">
                  <p>{user.score_total?.toLocaleString() || 0}pts</p>
                  <span>{user.display_name || 'Sin Nombre'}</span>
                </div>

                <div className="container-puntajes-premios">
                  <Image src="img/icons/monedaScore.svg" alt="Coins image" width={20} height={20} />
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
