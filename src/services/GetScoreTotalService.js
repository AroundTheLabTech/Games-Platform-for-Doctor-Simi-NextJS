// services/GetScoreTotalService.js

import axios from "axios";

/**
 * Obtiene el puntaje total del usuario desde el endpoint.
 * @param {string} userUID - UID del usuario autenticado.
 * @returns {Promise<number>} - Puntaje total del usuario.
 */
export const GetScoreTotalService = async (userUID) => {
  try {
    const response = await axios.get(`/api/scores/score_user/${userUID}`);
    if (response.status === 200) {
      return response.data.score_total;
    } else {
      console.warn("Error al obtener el puntaje total:", response.status);
      return 0; // Retorna 0 si hay un error en la respuesta
    }
  } catch (error) {
    console.error("Error en la consulta del puntaje total:", error);
    return 0; // Retorna 0 en caso de error
  }
};
