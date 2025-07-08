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
    // case "juego11":
      // return "SimiPlaneta";
    default:
      return "Juego Desconocido";
  }
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