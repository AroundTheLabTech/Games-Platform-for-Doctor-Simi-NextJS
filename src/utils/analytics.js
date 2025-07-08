import {
  getDocs,
  collection,
  query,
  where,
  Timestamp,
} from "firebase/firestore";
import { db } from "../../lib/firebase";

/**
 * Juegos más jugados en un rango de fechas basado en score
 */
export async function getTopGameInDateRange(startDate, endDate) {
  const scoresSnap = await getDocs(collection(db, "scores"));
  const totalPorJuego = {};

  for (const userDoc of scoresSnap.docs) {
    const sessionsRef = collection(db, "scores", userDoc.id, "sessions");

    const q = query(
      sessionsRef,
      where("timestamp", ">=", Timestamp.fromDate(startDate)),
      where("timestamp", "<=", Timestamp.fromDate(endDate))
    );

    const sessionsSnap = await getDocs(q);
    sessionsSnap.forEach((sessionDoc) => {
      const { score, juego } = sessionDoc.data();
      if (!juego || !score) return;

      totalPorJuego[juego] = (totalPorJuego[juego] || 0) + score;
    });
  }

  const sorted = Object.entries(totalPorJuego).sort((a, b) => b[1] - a[1]);
  const [nombre, total] = sorted[0] || [];

  return {
    nombre,
    total,
    resumen: totalPorJuego,
  };
}

/**
 * Registros de usuarios agrupados por fecha (rango opcional)
 */
export async function getUserRegistrationsByDate(startDate, endDate) {
  const usersSnap = await getDocs(collection(db, "users"));
  const countsByDay = {};

  usersSnap.forEach((doc) => {
    const data = doc.data();
    const ts = data.registered_at?.toDate?.();
    if (!ts) return;

    if (
      (!startDate || ts >= startDate) &&
      (!endDate || ts <= endDate)
    ) {
      const dateStr = ts.toISOString().split("T")[0];
      countsByDay[dateStr] = (countsByDay[dateStr] || 0) + 1;
    }
  });

  return countsByDay;
}

/**
 * Inicios de sesión agrupados por fecha (rango opcional)
 */
export async function getUserLoginsByDate(startDate, endDate) {
  const usersSnap = await getDocs(collection(db, "users"));
  const countsByDay = {};

  usersSnap.forEach((doc) => {
    const data = doc.data();
    const ts = data.last_session?.toDate?.();
    if (!ts) return;

    if (
      (!startDate || ts >= startDate) &&
      (!endDate || ts <= endDate)
    ) {
      const dateStr = ts.toISOString().split("T")[0];
      countsByDay[dateStr] = (countsByDay[dateStr] || 0) + 1;
    }
  });

  return countsByDay;
}
