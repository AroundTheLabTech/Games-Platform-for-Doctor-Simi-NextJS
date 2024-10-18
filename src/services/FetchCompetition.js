import { db } from "../../lib/firebase";
import { doc, getDoc, updateDoc } from "firebase/firestore";

// Función para obtener las competiciones
export async function fetchCompetitions(userUID) {
  try {
    const userDocRef = doc(db, "users", userUID);
    const userDoc = await getDoc(userDocRef);

    if (!userDoc.exists()) {
      throw new Error("No se encontraron datos del usuario.");
    }

    const userData = userDoc.data();

    // Verificar si existe el campo friends_competition
    if (!userData.friends_competition) {
      console.log("El campo friends_competition[] no existe. Creándolo...");
      
      await updateDoc(userDocRef, {
        friends_competition: [],
      });
      return [];
    }

    // Filtrar competiciones donde reto_status sea "invitado"
    const invitadoCompetitions = userData.friends_competition.filter(
      (competition) => competition.reto_status === "invitado"
    );

    console.log("Competencias encontradas con reto_status 'invitado':", invitadoCompetitions);

    return invitadoCompetitions;
  } catch (error) {
    console.error("Error al obtener las competiciones:", error);
    return [];
  }
}

// Función para actualizar el estado de reto_status
// Función para actualizar el estado de reto_status
export async function updateCompetitionStatus(userUID, competitionUID, newStatus) { // Cambiar 'friendUID' por 'competitionUID'
    try {
      const userDocRef = doc(db, "users", userUID);
      const userDoc = await getDoc(userDocRef);
  
      if (!userDoc.exists()) {
        throw new Error("No se encontraron datos del usuario.");
      }
  
      const userData = userDoc.data();
  
      // Actualizar el reto_status de la competición específica
      const updatedCompetitions = userData.friends_competition.map((competition) => {
        if (competition.UID === competitionUID) {  // Verifica solo la competición con el UID correspondiente
          return { ...competition, reto_status: newStatus };
        }
        return competition;
      });
  
      await updateDoc(userDocRef, {
        friends_competition: updatedCompetitions,
      });
  
      console.log(`El estado de la competición con UID ${competitionUID} ha sido actualizado a '${newStatus}'.`);
    } catch (error) {
      console.error("Error al actualizar el estado de la competición:", error);
    }
  }
  
