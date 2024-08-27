import { useState, useEffect } from "react";
import { auth, db } from "../../lib/firebase";
import { doc, getDoc, setDoc } from "firebase/firestore";


export default function DashboardComponent() {
    const [racha, setRacha] = useState(0); // Estado para la racha del usuario
    const [user, setUser] = useState(null); // Estado para el usuario autenticado
  
    useEffect(() => {
      const checkRacha = async () => {
        // Verificar si el usuario está autenticado
        const unsubscribe = auth.onAuthStateChanged(async (user) => {
          if (user) {
            setUser(user);
            const userDocRef = doc(db, "users", user.uid);
            const userDoc = await getDoc(userDocRef);
  
            if (userDoc.exists()) {
              const lastSession = userDoc.data().last_session.toDate(); // Convertir a objeto Date
              const today = new Date();
              const yesterday = new Date(today);
              yesterday.setDate(today.getDate() - 1);
  
              const statisticsDocRef = doc(db, "stadistics", user.uid);
              const statisticsDoc = await getDoc(statisticsDocRef);
  
              if (lastSession.toDateString() === yesterday.toDateString()) {
                // Si la última sesión fue ayer, aumentar la racha
                const newRacha = statisticsDoc.exists() ? (statisticsDoc.data().score_racha || 0) + 1 : 1;
                setRacha(newRacha);
  
                // Guardar la nueva racha en Firestore
                await setDoc(statisticsDocRef, { score_racha: newRacha }, { merge: true });
              } else if (lastSession.toDateString() !== today.toDateString()) {
                // Si la última sesión no fue ayer ni hoy, reiniciar la racha
                setRacha(0);
                await setDoc(statisticsDocRef, { score_racha: 0 }, { merge: true });
              } else if (statisticsDoc.exists()) {
                // Si la última sesión fue hoy, mantener la racha actual
                setRacha(statisticsDoc.data().score_racha || 0);
              }
            }
          }
        });
  
        return () => unsubscribe();
      };
  
      checkRacha();
    }, []);
  
    return (
      <div className="dashboard-user-container">
        {/* Header */}
        <div className="header">
          <div>
            <h2>DASHBOARD</h2>
          </div>
  
          <div className="container-racha">
            <img src="img/icons/calendar.svg" alt="Calendar Icon" />
            <p>{racha} Días de Racha</p>
          </div>

        </div>

        {/* Dashboards Informations */}

        <div className="dashboard-if-container">
            <div className="if-container">
                {/* Title */}
                <div className="if-1">
                    <h3>
                        Total Score
                    </h3>

                    <div className="ranking-level">
                        <p>#1</p>
                    </div>
                </div>

                <div className="total-score">
                    <h3>20,000</h3>

                    <div className="line-grafic">
                        
                    </div>
                </div>

            </div>
        </div>
      </div>
    );
  }