import { 
    collection, 
    doc, 
    getDocs, 
    getDoc, 
    orderBy, 
    query, 
    limit 
  } from "firebase/firestore";

  import { db } from "../../../../lib/firebase";

  
  export class UserScoresRepository {
    /**
     * Obtiene el ranking (posiciones) de todos los usuarios según su score_total, ordenados descendentemente.
     * @returns {Promise<Array>} Retorna un array de documentos de usuarios con su score_total.
     */
    async getAllUsersOrderedByScore() {
      const usersRef = collection(db, "users");
      const q = query(usersRef, orderBy("score_total", "desc"));
      const snapshot = await getDocs(q);
  
      const users = [];
      snapshot.forEach((docSnap) => {
        users.push({
          uid: docSnap.id,
          ...docSnap.data()
        });
      });
  
      return users;
    }
  
    /**
     * Obtiene la sesión con mayor puntaje de un usuario específico.
     * Se asume que la colección scores/{userUID}/sessions existe.
     * @param {string} userUID
     * @returns {Promise<number|null>} Retorna el puntaje más alto o null si no existen sesiones.
     */
    async getUserBestScore(userUID) {
      const sessionsRef = collection(db, "scores", userUID, "sessions");
      const q = query(sessionsRef, orderBy("score", "desc"), limit(1));
      const snapshot = await getDocs(q);
      
      if (snapshot.empty) {
        return null; // No hay sesiones
      }
  
      let bestScore = null;
      snapshot.forEach((docSnap) => {
        bestScore = docSnap.data().score;
      });
  
      return bestScore;
    }
  
    /**
     * Obtiene el total de partidas (número de documentos en sessions) de un usuario.
     * @param {string} userUID
     * @returns {Promise<number>} Cantidad de partidas.
     */
    async getUserTotalMatches(userUID) {
      const sessionsRef = collection(db, "scores", userUID, "sessions");
      const snapshot = await getDocs(sessionsRef);
      return snapshot.size; // Cantidad de documentos en sessions
    }

        /**
     * Obtiene los top 7 usuarios ordenados por score_total (desc).
     * @returns {Promise<Array>} Array con los datos de los top 7 usuarios.
     */
    async getTop7Users() {
        const usersRef = collection(db, "users");
        const q = query(usersRef, orderBy("score_total", "desc"), limit(7));
        const snapshot = await getDocs(q);
    
        const users = [];
        snapshot.forEach((docSnap) => {
        users.push({
            uid: docSnap.id,
            ...docSnap.data()
        });
        });
    
        return users;
    }
    

  }