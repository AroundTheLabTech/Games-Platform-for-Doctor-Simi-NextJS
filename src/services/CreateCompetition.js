import { db } from "../../lib/firebase";
import { doc, getDoc, updateDoc, arrayUnion, Timestamp, query, collection, where, getDocs } from "firebase/firestore";

// Función para crear la competencia
export async function createCompetition(userUID, email, betScore) {
  try {
    console.log("Iniciando creación de competencia...");
    console.log("User UID (quien inicia la competencia):", userUID);
    console.log("Correo electrónico del amigo ingresado:", email);
    console.log("Puntaje de apuesta:", betScore);

    // Obtener los datos del usuario que inició sesión
    const userDocRef = doc(db, "users", userUID);
    const userDoc = await getDoc(userDocRef);

    if (!userDoc.exists()) {
      throw new Error("No se encontraron datos del usuario que inició sesión.");
    }

    const userData = userDoc.data();
    const userName = userData.display_name; // Nombre del usuario que inició sesión
    const userEmail = userData.email; // Correo del usuario que inició sesión

    console.log("Datos del usuario que inició sesión:", { userName, userEmail });

    // Buscar al amigo por el correo electrónico con una consulta
    const usersCollectionRef = collection(db, "users");
    const q = query(usersCollectionRef, where("email", "==", email));
    const querySnapshot = await getDocs(q);

    if (!querySnapshot.empty) {
      const friendDoc = querySnapshot.docs[0]; // Suponiendo que hay un solo resultado
      const friendData = friendDoc.data();
      const friendUID = friendDoc.id; // UID del amigo encontrado
      const friendName = friendData.display_name; // Nombre del amigo

      console.log("Amigo encontrado en la base de datos:", friendData);
      console.log("UID del amigo:", friendUID);
      console.log("Nombre del amigo:", friendName);

      const inicioFecha = Timestamp.now();
      const inicioFinal = Timestamp.fromMillis(inicioFecha.toMillis() + 2 * 24 * 60 * 60 * 1000); // +2 días

      const competitionForUser = {
        name: friendName,
        email: email,
        UID: friendUID,
        partidas_competicion: [],
        inicio_fecha: inicioFecha,
        inicio_final: inicioFinal,
        reto_status: "espera",
        puntaje_apuesta: betScore,
        resultado: null,
      };

      const competitionForFriend = {
        name: userName, // Nombre del usuario que inició sesión
        email: userEmail, // Email del usuario que inició sesión
        UID: userUID, // UID del usuario que inició sesión
        partidas_competicion: [],
        inicio_fecha: inicioFecha,
        inicio_final: inicioFinal,
        reto_status: "invitado",
        puntaje_apuesta: betScore,
        resultado: null,
      };

      console.log("Verificando estructura de competitionForFriend antes de actualizar el documento del amigo:", competitionForFriend);


      console.log("Datos de la competencia (para el usuario que inició sesión):", competitionForUser);
      console.log("Datos de la competencia (para el amigo):", competitionForFriend);

      // Agregar la competencia al campo 'friends_competition[]' del usuario
      await updateDoc(userDocRef, {
        friends_competition: arrayUnion(competitionForUser),
      });

      console.log("Competencia agregada en el perfil del usuario que inició sesión:", competitionForUser);

      // Agregar la competencia al campo 'friends_competition[]' del amigo
      const friendDocRef = doc(db, "users", friendUID);
      await updateDoc(friendDocRef, {
        friends_competition: arrayUnion(competitionForFriend),
      });

      console.log("Competencia agregada en el perfil del amigo:", competitionForFriend);
    } else {
      console.log("Amigo no encontrado con ese correo electrónico.");
    }
  } catch (error) {
    console.error("Error al crear la competencia:", error);
  }
}
