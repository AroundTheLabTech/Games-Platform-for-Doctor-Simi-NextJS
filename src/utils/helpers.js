export function getGameTitle(game) {
  switch (game) {
    case "juego1":
      return "Doctor Simi Invade";
    case "juego2":
      return "Doctor Simi Run";
    case "juego3":
      return "Simi Slash";
    case "juego4":
      return "Simi Life";
    case "juego5":
      return "Simi Globo";
    case "juego6":
      return "Tower Defense";
    case "juego7":
      return "Simi Gomitas";
    case "juego8":
      return "Simi Health Blocks";
    case "juego9":
      return "Simirama";
    case "juego10":
      return "SimiShip";
    case "juego11":
      return "SimiPlaneta";
    case "juego12":
      return "Simi Brigada Verde";
    case "juego13":
      return "Simi Desastres Naturales";
    case "juego14":
      return "Simi Cross";
    case "juego15":
      return "Simi Jump";
    case "juego16":
      return "Simi Flyv";
    case "juego17":
      return "Simi Comando Lunar";
    default:
      return "Juego Desconocido";
  }
};

export function getGameInstructions(game) {
  switch (game) {
    case "juego1":
      return "¡No permitas que lleguen al centro! Lanza medicamentos a los virus para eliminarlos. Acumula los puntos que dejan al ser destruidos para subir los niveles de ataque, defensa y velocidad.";
    case "juego2":
      return "¡No ganas hasta llegar al Zócalo de la CDMX! Salta, esquiva y recolecta monedas para llegar al final del nivel y obtendrás una medalla de oro.";
    case "juego3":
      return "¡No cortes al Simi! Corta los implementos médicos lo más rápido posible.";
    case "juego4":
      return "¡Usa las teclas para moverte entre el bosque! No dejes que te toquen.";
    case "juego5":
      return "¡Evita que Simi choque con los obstáculos del cielo!";
    case "juego6":
      return "¡Instala torres para defender el hospital y trata a los enfermos!";
    case "juego7":
      return "¡Realiza conexiones entre los Simis! Conecta a los Simis de la misma forma para ganar puntos.";
    case "juego8":
      return "Mueve las fichas usando las flechas del teclado y usa la barra espaciadora para soltarlas rápidamente. ¡Completa filas para sumar puntos y no dejes que se acumulen!";
    case "juego9":
      return "Haz tap o clic en las cartas para girarlas y juntar los pares. ¡Completa todos los pares antes de que se acabe el tiempo!";
    case "juego10":
      return "Usando las flechas del teclado y el espacio, o los botones en pantalla, mueve al Simi entre los satélites y llévalo hasta el planeta. ¡Evita caer en el espacio!";
    case "juego11":
      return "Usando las flechas del teclado (derecha e izquierda) o las de pantalla, mueve al Simi, atrapa los erizos y evita los peces. ¡Recoge los erizos para sumar puntos y no dejes que los peces te toquen o perderás vidas!";
    case "juego12":
      return "Usando las flechas del teclado, el espacio o los controles en pantalla, mueve al Simi y usa la manguera para apagar las llamas. ¡Salva a los animales del fuego intenso y recolecta las semillas que dejan al ser apagados para sumar puntos!";
    case "juego13":
      return "Usando las flechas del teclado o deslizándote en pantalla, mueve al Simi para esquivar los desastres naturales y recoge los suministros. ¡Gana puntos por cada suministro recolectado y sobrevive el mayor tiempo posible!";
    case "juego14":
      return "Usando las flechas del teclado o deslizándote en pantalla, mueve al Simi para esquivar los autos y recoge las monedas. ¡Gana puntos por cada avance en el recorrido y sobrevive el mayor tiempo posible!";
    case "juego15":
      return "Usando las flechas del teclado o los controles en pantalla, mueve al Simi para sortear los obstáculos y recoger los orbes. ¡Gana puntos por cada orbe recolectado y no te choques!";
    case "juego16":
      return "Usando el clic o el tap, mueve al Simi para esquivar los obstáculos. ¡Gana puntos por cada obstáculo sorteado y no te choques!";
    case "juego17":
      return "Usa el clic o el tap para mover al Simi y esquivar y destruir los obstáculos. ¡Gana puntos por cada obstáculo destruido y no te choques!";
    default:
      return "Pronto vendrán más.";
  }
};

export function getIframeSrc(game) {
  switch (game) {
    case "juego1":
      return "source-game/game-1/public-game/index.html";
    case "juego2":
      return "source-game/game-2/public/index.html";
    case "juego3":
      return "source-game/game-3/release/index.html";
    case "juego4":
      return "source-game/game-4/index.html";
    case "juego5":
      return "source-game/game-5/index.html";
    case "juego6":
      return "source-game/game-6/index.html";
    case "juego7":
      return "source-game/game-7/index.html";
    case "juego8":
      return "source-game/game-8/index.html";
    case "juego9":
      return "source-game/game-9/index.html";
    case "juego10":
      return "source-game/game-10/index.html";
    case "juego11":
      return "source-game/game-11/index.html";
    case "juego12":
      return "source-game/game-12/index.html";
    case "juego13":
      return "source-game/game-13/index.html";
    case "juego14":
      return "source-game/game-14/index.html";
    case "juego15":
      return "source-game/game-15/index.html";
    case "juego16":
      return "source-game/game-16/index.html";
    case "juego17":
      return "source-game/game-17/index.html";
    default:
      return "";
  }
};

export const gameData = {
  juego1: {
    imageSrc: "/img/games/arcade/game-1.png",
    titleSrc: "/img/games/title/game-1.svg",
    description: "¡Defiende el Centro como un pro! Mejora ataque, defensa y velocidad mientras enfrentas olas brutales. ¿Listo para salvarlo?",
  },
  juego2: {
    imageSrc: "/img/games/arcade/game-2.png",
    titleSrc: "/img/games/title/game-2.svg",
    description: "¡Acompaña a Simi, recolecta monedas, esquiva obstáculos y desbloquea niveles! Demuestra tus habilidades en este épico desafío.",
  },
  juego3: {
    imageSrc: "/img/games/arcade/game-3.png",
    titleSrc: "/img/games/title/game-3.svg",
    description: "¡No dejes caer ni un implemento médico! Corta todo, evita la mecha del Simi y rompe récords con cada jugada épica.",
  },
  juego4: {
    imageSrc: "/img/games/arcade/game-4.png",
    titleSrc: "/img/games/title/game-4.svg",
    description: "¡Pilota el avión del SimiFest, lanza Bombas de Vida y siembra esperanza! Conviértete en un héroe ecológico ahora.",
  },
  juego5: {
    imageSrc: "/img/games/arcade/game-5.png",
    titleSrc: "/img/games/title/game-5.svg",
    description: "Usa el joystick en pantalla para moverte por el cielo y esquivar cada peligro. ¡Pon a prueba tus reflejos y mantén tu globo intacto!",
  },
  juego6: {
    imageSrc: "/img/games/arcade/game-6.png",
    titleSrc: "/img/games/title/game-6.svg",
    description: "Usa el clic o el tap y coloca defensas estratégicas para proteger el hospital de invasores virales. Construye y mejora torres médicas para detener las oleadas enemigas y salvar a los enfermos. ¡Defiende la salud con inteligencia y estrategia!",
  },
  juego7: {
    imageSrc: "/img/games/arcade/game-7.png",
    titleSrc: "/img/games/title/game-7.svg",
    description: "Usa el clic o el tap y desliza para conectar tres o más gomas y crear combinaciones explosivas. ¡Completa la meta con el menor número de movimientos y demuestra tu agilidad mental!",
  },
  juego8: {
    imageSrc: "/img/games/arcade/game-8.png",
    titleSrc: "/img/games/title/game-8.svg",
    description: "Inspirado en los clásicos juegos de puzzles, este divertido desafío te invita a ordenar las fichas de medicamentos que caen. Acomódalas estratégicamente para completar filas y mantener la farmacia en orden.",
  },
  juego9: {
    imageSrc: "/img/games/arcade/game-9.png",
    titleSrc: "/img/games/title/game-9.svg",
    description: "Usa el clic o el tap para interactuar con el juego. Gira las piezas para encontrar su pareja y completar todos los pares. ¡Pon a prueba tu memoria y agilidad mental!",
  },
  juego10: {
    imageSrc: "/img/games/arcade/game-10.png",
    titleSrc: "/img/games/title/game-10.svg",
    description: "Usa los botones en pantalla o las teclas del teclado para moverte y saltar. Recoge monedas, evita caer al vacío y lleva al Simi al planeta saltando entre los satélites. ¡Demuestra tus habilidades de plataforma!",
  },
  juego11: {
    imageSrc: "/img/games/arcade/game-11.png",
    titleSrc: "/img/games/title/game-11.svg",
    description: "¡Atrapa erizos y evita los peces! Usa las flechas del teclado o las de pantalla para moverte y recoge erizos para sumar puntos. ¡No dejes que los peces te toquen o perderás vidas!",
  },
  juego12: {
    imageSrc: "/img/games/arcade/game-12.png",
    titleSrc: "/img/games/title/game-12.svg",
    description: "¡Usa las flechas del teclado, el espacio o los controles en pantalla para mover al Simi y apagar las llamas! Salva a los animales del fuego intenso y recoge las semillas que dejan al ser apagados para sumar puntos.",
  },
  juego13: {
    imageSrc: "/img/games/arcade/game-13.png",
    titleSrc: "/img/games/title/game-13.svg",
    description: "Usa las flechas del teclado o desliza en pantalla para mover al Simi. Esquiva desastres naturales y recoge suministros. ¡Gana puntos por cada suministro recolectado y sobrevive el mayor tiempo posible!",
  },
  juego14: {
    imageSrc: "/img/games/arcade/game-default.png",
    titleSrc: "/img/games/title/game-default.svg",
    description: "Usa las flechas del teclado o desliza en pantalla para mover al Simi y esquivar los autos. ¡Recoge monedas, avanza en el recorrido y gana puntos por cada progreso mientras sobrevives el mayor tiempo posible!",
  },
  juego15: {
    imageSrc: "/img/games/arcade/game-default.png",
    titleSrc: "/img/games/title/game-default.svg",
    description: "Usa las flechas del teclado o los controles en pantalla para mover al Simi, sortear obstáculos y recoger orbes. ¡Gana puntos por cada orbe recolectado y no te choques!",
  },
  juego16: {
    imageSrc: "/img/games/arcade/game-default.png",
    titleSrc: "/img/games/title/game-default.svg",
    description: "Usa el clic o el tap para mover al Simi y esquivar los obstáculos. ¡Gana puntos por cada obstáculo sorteado y no te choques!",
  },
  juego17: {
    imageSrc: "/img/games/arcade/game-17.png",
    titleSrc: "/img/games/title/game-17.svg",
    description: "Usa el clic o el tap para mover al Simi, esquivar y destruir los obstáculos. ¡Gana puntos por cada obstáculo destruido y no te choques!",
  },
};

export function validateObjectValues(obj) {
  for (const key in obj) {
    const value = obj[key];

    if (value === null || value === undefined) {
      console.log(`La clave "${key}" no tiene un valor válido.`);
      return false;
    }

    if (typeof value === 'string') {
      if (value.trim() === '') {
        console.log(`La clave "${key}" tiene una cadena vacía.`);
        return false;
      }
    } else if (typeof value === 'number') {
      if (isNaN(value)) {
        console.log(`La clave "${key}" tiene un número no válido.`);
        return false;
      }
    } else {
      console.log(`La clave "${key}" tiene un tipo no soportado (${typeof value}).`);
      return false;
    }
  }
}