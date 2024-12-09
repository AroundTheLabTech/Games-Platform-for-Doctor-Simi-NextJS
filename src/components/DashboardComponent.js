import React, { useState, useEffect } from "react";

import 'react-circular-progressbar/dist/styles.css';


export default function DashboardComponent() {
  const [racha, setRacha] = useState(0);

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
              <p>#120202</p>
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
              <p>12000 pts</p>
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
              <p>400 pt</p>
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
            {/* RowUser Corona Doradad*/}
            <div className="row-user">
              {/* Corona */}
              <div className="container-corona">
                <img src="img/icons/dashboard/corona-oro.svg" alt="" />
              </div>

              {/* User-Information */}

              <div className="container-user-information">
                <p>640,540pts</p>
                <span>Iván Martínez</span>
              </div>


              {/* Puntos a ganar */}

              <div className="container-puntajes-premios">
                <img src="img/icons/monedaScore.svg" alt="" />
                <p>1000</p>
              
              </div>

            </div>
            {/* Row User Corona Plateada*/}
            <div className="row-user">
              {/* Corona */}
              <div className="container-corona">
                <img src="img/icons/dashboard/corona-plata.svg" alt="" />
              </div>

              {/* User-Information */}

              <div className="container-user-information">
                <p>640,540pts</p>
                <span>Iván Martínez</span>
              </div>


              {/* Puntos a ganar */}

              <div className="container-puntajes-premios">
                <img src="img/icons/monedaScore.svg" alt="" />
                <p>1000</p>
              
              </div>

            </div>
            {/* Corona de Bronce */}
            <div className="row-user">
              {/* Corona */}
              <div className="container-corona">
                <img src="img/icons/dashboard/corona-bronce.svg" alt="" />
              </div>

              {/* User-Information */}

              <div className="container-user-information">
                <p>640,540pts</p>
                <span>Iván Martínez</span>
              </div>


              {/* Puntos a ganar */}

              <div className="container-puntajes-premios">
                <img src="img/icons/monedaScore.svg" alt="" />
                <p>1000</p>
              
              </div>

            </div>

            {/* 4th User */}
            <div className="row-user">
              {/* Corona */}
              <div className="container-corona">
                <h3 className="corona-number">4to</h3>
              </div>

              {/* User-Information */}

              <div className="container-user-information">
                <p>640,540pts</p>
                <span>Iván Martínez</span>
              </div>


              {/* Puntos a ganar */}

              <div className="container-puntajes-premios">
                <img src="img/icons/monedaScore.svg" alt="" />
                <p>1000</p>
              
              </div>

            </div>

            {/* 5to Lugar */}

            <div className="row-user">
              {/* Corona */}
              <div className="container-corona">
                <h3 className="corona-number">5to</h3>
              </div>

              {/* User-Information */}

              <div className="container-user-information">
                <p>640,540pts</p>
                <span>Iván Martínez</span>
              </div>


              {/* Puntos a ganar */}

              <div className="container-puntajes-premios">
                <img src="img/icons/monedaScore.svg" alt="" />
                <p>1000</p>
              
              </div>

            </div>

            {/* 6to Lugar */}

            <div className="row-user">
              {/* Corona */}
              <div className="container-corona">
                <h3 className="corona-number">6to</h3>
              </div>

              {/* User-Information */}

              <div className="container-user-information">
                <p>640,540pts</p>
                <span>Iván Martínez</span>
              </div>


              {/* Puntos a ganar */}

              <div className="container-puntajes-premios">
                <img src="img/icons/monedaScore.svg" alt="" />
                <p>1000</p>
              
              </div>

            </div>

            {/* 7mo Lugar */}

            <div className="row-user">
              {/* Corona */}
              <div className="container-corona">
                <h3 className="corona-number">7mo</h3>
              </div>

              {/* User-Information */}

              <div className="container-user-information">
                <p>640,540pts</p>
                <span>Iván Martínez</span>
              </div>


              {/* Puntos a ganar */}

              <div className="container-puntajes-premios">
                <img src="img/icons/monedaScore.svg" alt="" />
                <p>1000</p>
              
              </div>

            </div>
            
          </div>
        </div>
      </div>


    </div>
  );
}
