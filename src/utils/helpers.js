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