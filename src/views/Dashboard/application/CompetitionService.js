
import { UserScoresRepository } from '../infraestructure/UserScoresRepository';

export class CompetitionService {
  constructor() {
    this.userScoresRepository = new UserScoresRepository();
  }

  /**
   * Obtiene la posición del usuario en el ranking global basado en score_total.
   * La posición se determina al ordenar todos los usuarios por score_total (desc) y 
   * buscar el índice del UID del usuario.
   * @param {string} userUID - UID del usuario autenticado
   * @returns {Promise<number|null>} Posición del usuario (1-based) o null si no se encuentra.
   */
  async obtenerPosicionUsuario(userUID) {
    // 1. Obtener todos los usuarios ordenados por score_total desc
    const allUsers = await this.userScoresRepository.getAllUsersOrderedByScore();
    
    // 2. Buscar la posición del usuario
    const index = allUsers.findIndex(u => u.uid === userUID);

    // Si no se encuentra, retornamos null
    if (index === -1) {
      return null;
    }

    // Las posiciones son 1-based, por eso sumamos 1
    return index + 1;
  }

  /**
   * Obtiene el mejor puntaje del usuario de la subcolección sessions.
   * @param {string} userUID - UID del usuario autenticado
   * @returns {Promise<number|null>} Mejor puntaje o null si no existen sesiones.
   */
  async obtenerMejorPuntajeUsuario(userUID) {
    const bestScore = await this.userScoresRepository.getUserBestScore(userUID);
    return bestScore;
  }

  /**
   * Obtiene el total de partidas jugadas por el usuario.
   * Se entiende como la cantidad de documentos en scores/{userUID}/sessions
   * @param {string} userUID - UID del usuario autenticado
   * @returns {Promise<number>} Cantidad de partidas jugadas.
   */
  async obtenerTotalPartidasUsuario(userUID) {
    const totalMatches = await this.userScoresRepository.getUserTotalMatches(userUID);
    return totalMatches;
  }

  /**
 * Obtiene los top 7 usuarios con mayor score_total.
 * @returns {Promise<Array>} Array con los datos de los top 7 usuarios.
 */
async obtenerTop7Users() {
    const top7 = await this.userScoresRepository.getTop7Users();
    return top7;
  }
  
}
