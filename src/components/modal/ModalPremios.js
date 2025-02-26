"use client";

import { useEffect, useState } from "react";
import { doc, getDoc, updateDoc, setDoc, arrayUnion } from "firebase/firestore";
import { db } from "../../../lib/firebase";

// Información de las medallas
const medallasInfo = {
  medal1: { title: "Medalla de de Inicio", imgSrc: "img/medallas/medal1.svg" },
  medal2: { title: "Medalla de Consistencia", imgSrc: "img/medallas/medal2.svg" },
  medal3: { title: "Medalla de Competencia", imgSrc: "img/medallas/medal3.svg" },
  medal4: { title: "Medalla de Progreso", imgSrc: "img/medallas/medal4.svg" },
  medal5: { title: "Medalla de Campeón", imgSrc: "img/medallas/medal5.svg" },
  medal6: { title: "Medalla de Experto", imgSrc: "img/medallas/medal6.svg" },
  medal7: { title: "Medalla de Constancia", imgSrc: "img/medallas/medal7.svg" },
  medal8: { title: "Medalla de Victoria", imgSrc: "img/medallas/medal8.svg" },
  medal9: { title: "Medalla de Determinación", imgSrc: "img/medallas/medal9.svg" },
  medal10: { title: "Medalla de Superación", imgSrc: "img/medallas/medal10.svg" },
  medal11: { title: "Medalla de Leyenda", imgSrc: "img/medallas/medal11.svg" },
  medal12: { title: "Medalla de Maestro", imgSrc: "img/medallas/medal12.svg" },
};

export default function ModalPremios({ medal, rewardText, userUID, onClose }) {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const fetchTrophies = async () => {
      const userDocRef = doc(db, "stadistics", userUID);
      const userDoc = await getDoc(userDocRef);

      if (!userDoc.exists()) {
        // Si el documento no existe, lo creamos con el campo "trofeos"
        await setDoc(userDocRef, { trofeos: [] });
        setShowModal(true); // Mostramos el modal porque es el primer inicio de sesión
      } else {
        const userData = userDoc.data();
        // Verificamos si "trofeos" contiene "medal1"
        if (!userData.trofeos || !userData.trofeos.includes(medal)) {
          await updateDoc(userDocRef, {
            trofeos: arrayUnion(medal),
          });
          setShowModal(true); // Mostramos el modal si la medalla aún no se ha otorgado
        }
      }
    };

    fetchTrophies();
  }, [medal, userUID]);

  if (!showModal) return null;

  const { title, imgSrc } = medallasInfo[medal] || {};

  return (
    <div className="modal-premios-overlay">
      <div className="modal-premios">
        <h2>{title}</h2>
        <div className="img-container">
            <img src={imgSrc} alt={title} />
        </div>
        <p>{rewardText}</p>
        <button onClick={() => { setShowModal(false); onClose(); }}>Cerrar</button>
      </div>
    </div>
  );
}
