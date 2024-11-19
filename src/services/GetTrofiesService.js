// services/GetTrophiesService.js

import { doc, getDoc } from "firebase/firestore";
import { db } from "../../lib/firebase";

/**
 * Obtiene los trofeos del usuario desde Firebase.
 * @param {string} userUID - UID del usuario autenticado.
 * @returns {Promise<Array>} - Array de medallas disponibles.
 */
export const GetTrophiesService = async (userUID) => {
  try {
    const stadisticsDocRef = doc(db, "stadistics", userUID);
    const stadisticsDoc = await getDoc(stadisticsDocRef);

    if (stadisticsDoc.exists()) {
      const trophies = stadisticsDoc.data()?.trofeos || [];
      return trophies; // Retorna un array con las medallas existentes.
    } else {
      console.warn("Documento de estadisticas no encontrado.");
      return [];
    }
  } catch (error) {
    console.error("Error obteniendo trofeos:", error);
    return [];
  }
};
