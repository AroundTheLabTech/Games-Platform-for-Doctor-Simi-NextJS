"use client";

import { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin"; // Importa TextPlugin

// Registra el plugin de ScrollTrigger
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollTrigger, TextPlugin); // Registra TextPlugin




export default function Landing(){

    
    // Referencias a los elementos del DOM
    const intervenirTextRef = useRef(null);
    const bombaVidaRef = useRef(null);
    const simpleIdeaRef = useRef(null); 


    useEffect(() => {
        const isMobile = window.innerWidth <= 768; // Ajustar el tamaño según el diseño
            if (!isMobile) {

        if (bombaVidaRef.current) {
        // Posiciona la imagen inicialmente arriba del viewport
        gsap.set(bombaVidaRef.current, {
          y: "-370%", // Comienza fuera de la vista
          x: 0,
        });
  
        // Animación que mueve la imagen hacia abajo con el scroll
        gsap.to(bombaVidaRef.current, {
          y: 0, // Baja hasta su posición original
          scrollTrigger: {
            trigger: bombaVidaRef.current,
            start: "top top", // Inicia cuando la imagen llega al top del viewport
            end: "+=1000", // Ajusta según la distancia que quieras que recorra
            scrub: true, // Sincroniza con el scroll
            immediateRender: false,
          },
          ease: "none",
          onUpdate: function () {
            // Movimiento de balanceo de izquierda a derecha
            const progress = this.progress(); // Obtiene el progreso de la animación
            const offset = Math.sin(progress * Math.PI * 4) * 10; // Oscilación
            gsap.set(bombaVidaRef.current, { x: offset  });
          },
        });
      }
      
        // Animación para titleBombas
        gsap.fromTo(
          "#titleBombasImg",
          { y: -100, scale: 0.5, opacity: 0 },
          { y: 0, scale: 1, opacity: 1, duration: 1.5, ease: "power2.out" }
        );
      
        // Animación para initImage
        gsap.fromTo(
          "#initImage",
          { filter: "blur(10px)", opacity: 0 },
          { filter: "blur(0px)", opacity: 1, duration: 1.5, delay: 1, ease: "power2.out" }
        );
      
        // Animación para avionCircle
        gsap.fromTo(
          "#avionCircle",
          {
            scale: 0.2,
            opacity: 0,
            x: -100,
          },
          {
            scrollTrigger: {
              trigger: "#sectionIntervenir",
              start: "top 80%",
              toggleActions: "play none none none",
            },
            scale: 1,
            opacity: 1,
            x: 0,
            duration: 3,
            ease: "power2.out",
          }
        );

       // Animación de aparición para "Con una simple idea..."
        if (simpleIdeaRef.current) {
            gsap.fromTo(
            simpleIdeaRef.current,
            { opacity: 0, y: 50 },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: "power2.out",
                scrollTrigger: {
                trigger: simpleIdeaRef.current,
                start: "top 85%",
                toggleActions: "play none none none",
                },
            }
            );
        }

        // Animación para montainGreenImg
        gsap.fromTo(
            "#montainGreenImg",
            { opacity: 0, scale: 0.8 },
            {
            opacity: 1,
            scale: 1,
            duration: 1.5,
            ease: "power2.out",
            scrollTrigger: {
                trigger: "#montainGreenImg",
                start: "top 80%",
                toggleActions: "play none none none",
                // markers: true, // Puedes habilitar esto para depurar
            },
            }
        );


        // Animación para montainGreenText
        gsap.fromTo(
            "#montainGreenText",
            { x: "100%", opacity: 0 },
            {
            x: "0%",
            opacity: 1,
            duration: 0.8,
            ease: "bounce.out",
            scrollTrigger: {
                trigger: "#montainGreenText",
                start: "top 80%",
                toggleActions: "play none none none",
            },
            }
        );

        // Animación para nacimientoProyectoText
        gsap.fromTo(
            "#nacimientoProyectoText",
            { x: "-100%", opacity: 0 },
            {
            x: "0%",
            opacity: 1,
            duration: 0.8,
            ease: "bounce.out",
            scrollTrigger: {
                trigger: "#nacimientoProyectoText",
                start: "top 80%",
                toggleActions: "play none none none",
            },
            }
        );

        // Animación para pinturaImg
        gsap.fromTo(
            "#pinturaImg",
            { scale: 0, rotation: -90, opacity: 0, x: 100, y: -100 },
            {
            scale: 1,
            rotation: 0,
            opacity: 1,
            x: 0,
            y: 0,
            duration: 1.5,
            ease: "back.out(1.7)",
            scrollTrigger: {
                trigger: "#pinturaImg",
                start: "top 80%",
                toggleActions: "play none none none",
            },
            }
        );

        // Animación para sectionSubtitle
        gsap.fromTo(
            "#sectionSubtitle",
            { scale: 0, opacity: 0 },
            {
            scale: 1,
            opacity: 1,
            duration: 1,
            ease: "back.out(1.7)",
            scrollTrigger: {
                trigger: "#sectionSubtitle",
                start: "top 80%",
                toggleActions: "play none none none",
            },
            }
        );

          // Animación para fotoAvionImg (igual que pinturaImg)
        gsap.fromTo(
            "#fotoAvionImg",
            { scale: 0, rotation: -90, opacity: 0, x: 100, y: -100 },
            {
            scale: 1,
            rotation: 0,
            opacity: 1,
            x: 0,
            y: 0,
            duration: 1.5,
            ease: "back.out(1.7)",
            scrollTrigger: {
                trigger: "#fotoAvionImg",
                start: "top 80%",
                toggleActions: "play none none none",
            },
            }
        );

            // Animación para avionText1
            gsap.fromTo(
                "#avionText1",
                { opacity: 0, y: 50 },
                {
                opacity: 1,
                y: 0,
                duration: 0.8,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: "#avionText1",
                    start: "top 90%",
                    toggleActions: "play none none none",
                },
                }
            );
                
                // Animación para avionText2
            gsap.fromTo(
                    "#avionText2",
                    { opacity: 0, y: 50 },
                    {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: "#avionText2",
                        start: "top 90%",
                        toggleActions: "play none none none",
                    },
                    }
            );
    
            
            // Animación para tvText (entra de izquierda a derecha con rebote)
            gsap.fromTo(
                "#tvText",
                { x: "-100%", opacity: 0 },
                {
                x: "0%",
                opacity: 1,
                duration: 1,
                ease: "bounce.out",
                scrollTrigger: {
                    trigger: "#tvText",
                    start: "top 80%",
                    toggleActions: "play none none none",
                },
                }
            );
            
            // Animación para tvButton (parpadea y brinca)
            gsap.to("#tvButton", {
                scale: 1.1,
                duration: 0.5,
                ease: "power1.inOut",
                repeat: -1,
                yoyo: true,
                delay: 1, // Inicia después de que aparece el texto
            });

            // Animación de entrada para tvImg (desde la izquierda girando)
            gsap.fromTo(
                "#tvImg",
                { x: "-100%", rotation: -360, opacity: 0 },
                {
                x: "0%",
                rotation: 0,
                opacity: 1,
                duration: 2,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: "#tvImg",
                    start: "top 80%",
                    toggleActions: "play none none none",
                },
                }
            );
            
            // Animación de tambaleo para tvImg según el scroll
            gsap.to("#tvImg", {
                scrollTrigger: {
                trigger: "#tvImg",
                start: "top center",
                end: "bottom top",
                scrub: true,
                onUpdate: (self) => {
                    const progress = self.progress;
                    const wobble = Math.sin(progress * Math.PI * 10) * 5; // Oscila entre -5 y 5 grados
                    gsap.set("#tvImg", { rotation: wobble });
                },
                },
            });

            // Animación para redesImg (igual que pinturaImg)
            gsap.fromTo(
                "#redesImg",
                { scale: 0, rotation: -90, opacity: 0, x: 100, y: -100 },
                {
                scale: 1,
                rotation: 0,
                opacity: 1,
                x: 0,
                y: 0,
                duration: 1.5,
                ease: "back.out(1.7)",
                scrollTrigger: {
                    trigger: "#redesImg",
                    start: "top 80%",
                    toggleActions: "play none none none",
                },
                }
            );
                        
            
  
        
            }

      }, []); // Cierre del useEffect
      
    

    return(
        <main className="container-landing">
            <div className="title-bombas">
                <img id="titleBombasImg" src="landing/bombasDeVida/titleBombas.svg" alt="" />
            </div>

            <div className="init-image">
                <img id="initImage" src="landing/bombasDeVida/initImage.svg" alt="" />
            </div>
            
            <div className="section-intervenir" id="sectionIntervenir">
            <div className="text">
                    <h3 id="intervenirText">Es aquí donde el <span className="dr-simi">Dr. Simi</span>, junto a su fundación <span className="simi-planeta">SíMiPlaneta</span>, decide intervenir. </h3>
                </div>

                <div className="image">
                    <img id="avionCircle" src="landing/bombasDeVida/avion-circle.svg" alt="" />
                </div>
            </div>

            <div className="simple-idea">
                <div className="image">
                <img
                    id="bombaVidaImg"
                    ref={bombaVidaRef} // Añade esta línea
                    src="landing/bombasDeVida/bombaVida.svg"
                    alt=""
                    />                </div>
                <div className="text">
                    <h3 id="simpleIdeaText" ref={simpleIdeaRef}>
                    Con una simple idea en mente, crean pequeñas &quot;bombas de vida&quot; hechas de arcilla, composta y semillas.
                    </h3>
                </div>

              
            </div>

            <div className="section-green">
                <img src="landing/bombasDeVida/separador-nav.svg" alt="" />
            </div>
            
            <div className="green-section">
                {/* Mountain Green */}
                <div className="montain-green">
                    <div className="image">
                        <img id="montainGreenImg" src="landing/bombasDeVida/montain-green.svg" alt="" />
                    </div>

                    <div className="text" id="montainGreenText">
                    <p>Estas bombas, cargadas de <span>ESPERANZA</span>, son lanzadas desde avionetas, listas para devolverle la vida a esos paisajes olvidados</p>
                    </div>
                </div>

                {/* Nacimiento Proyecto*/}
                <div className="nacimiento-proyecto">
                <div className="text" id="nacimientoProyectoText">

                    <p>
                    Este proyecto nació de la colaboración entre el Dr. Simi, a través de su fundación SíMiPlaneta, y el gobierno del Estado de México.
                       
                    </p>
                    <p>
                    <span>Su misión</span> es clara: reforestar zonas de difícil acceso, como la Sierra de Guadalupe, donde los incendios y la deforestación han dejado su huella 
                    </p>
               
                    </div>
                  

                    <img id="pinturaImg" src="landing/bombasDeVida/pintura.svg" alt="" />
                </div>

                <div className="section-subtitle" id="sectionSubtitle">
                <p>
                Este método es no solo innovador, sino altamente eficiente. Mientras que la reforestación tradicional puede llevar meses de trabajo, las bombas de vida permiten reforestar hectáreas enteras en solo <b>¡MINUTOS!</b>.
                </p>

              
                </div>

                {/* Avion Section */}

                <div className="avion-section">
                    <div className="image">
                    <img id="fotoAvionImg" src="landing/bombasDeVida/foto-avion.svg" alt="" />
                    </div>
                    <div className="text">
                        <h3 id="avionText1">13 <br />LANZAMIENTOS</h3>
                        <h3 id="avionText2">37,182 <br /> Bombas de Vida</h3>
                    </div>
                </div>

                {/* TV Section */}

                <div className="tv-section">
                <div className="text" id="tvText">
                    <h2>SÍMIPLANETA</h2>
                        <h3>
                        &quot;Bombas de Vida&quot;
                        </h3>

                        <button 
                        src="https://www.youtube.com/watch?v=CQAfMBqORpo"
                        id="tvButton">
                        Observar
                        </button>
                    </div>
                    <div className="tv">
                        <img id="tvImg" src="landing/bombasDeVida/simi-tv.svg" alt="" />
                    </div>

                </div>

                
                <div className="redes">
                    <img id="redesImg" src="landing/bombasDeVida/redes.svg" alt="" />
                </div>
            </div>
            
        </main>
    );
}