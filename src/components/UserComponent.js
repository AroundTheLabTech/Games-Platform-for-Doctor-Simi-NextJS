"use client";

import { useEffect, useState } from "react";
import { useRouter } from 'next/navigation';

export default function UserComponent() {


  return (
    <main className="main-container">
        <div className="profile-container">
          <div className="container-information-app">
              <div className="card-game">
                {/* Header */}
                <div className="header-card">
                  <h3>GAME-CARD</h3>
                  <img src="icons/profile-icons/icon-card.svg" alt="" />
                </div>
                {/* Nombre Usuario */}
                <div className="user-info">
                  <p>Iván</p>
                </div>

                {/* Numero Tarjeta - Puntaje  */}
                
                <div className="number-card">
                  <h3>
                    1020-2012-2333-2111
                  </h3>
                  <div>
                    <img src="img/icons/monedaScore.svg" alt="" />
                    <p>1,000</p>
                  </div>
                </div>
              </div>

              <div>
                <div className="personalidad">
                  {/* Title */}
                  <div className="title-personalidad">
                    <h3>SimiPersonalidad</h3>
                  </div>

                  <div className="container-informacion-personalidad">
                    <img src="" alt="" />
                  </div>
                </div>
              </div>
          </div>
        </div>

      
    </main>
  );
}
