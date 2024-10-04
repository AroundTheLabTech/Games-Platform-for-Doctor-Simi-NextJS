"use client";

import { useEffect, useState } from "react";
import { useRouter } from 'next/navigation';


export default function Landing(){
    return(
        <main className="container-landing">
            
            {/* Nav Landing */}
            <div className="nav-landing">
                <div>
                    <img
                    src="img/icons/arrow-left.svg"
                    />
                </div>
                <div className="hands-container">
                    <img
                        src="img/landing/hands-background.png "
                    />
                </div>
            </div>
            {/* Title */}
            <div className="title-container">
                <h1>Bombas de Vida</h1>
            </div>

            {/* Descubre como ayudar */}
            
            <div className="container-info-home">
                {/* Right */}
                <div className="right">
                    <div className="title-info">
                        <h2>Descubre <br/> como ayudar</h2>
                    </div>

                    <div className="p-info">
                        <p>
                        Las bombas de vida son un método fácil para reforestar zonas de difícil acceso y/o que han sido degradadas. Esto se lleva a cabo mediante una bolita compuesta de arcilla, tierra, composta y semillas de la región (se cuenta con 45 mil semillas aproximadamente) , que se lanzan en la temporada de lluvia para conseguir su desarrollo.
                        </p>
                    </div>

                    <div className="container-redes">

                    </div>
                </div>
                {/* Left */}
                <div className="left">
                    <img
                        src="img/landing/simi-piloto.png"
                    />
                </div>
            </div>
        </main>
    );
}