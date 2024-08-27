import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";
import { auth, db } from "../../lib/firebase";
import { doc, getDocs, collection, query, where } from "firebase/firestore";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export default function DashboardComponent() {
  const [racha, setRacha] = useState(0);
  const [user, setUser] = useState(null);
  const [chartData, setChartData] = useState({ labels: [], datasets: [] }); // Estado para los datos de la gráfica
  const [totalScore, setTotalScore] = useState(0); // Estado para el total de puntos

  useEffect(() => {
    const fetchScoresAndRacha = async () => {
      const unsubscribe = auth.onAuthStateChanged(async (user) => {
        if (user) {
          setUser(user);

          const scoresDocRef = doc(db, "scores", user.uid);
          const scoresDoc = await getDocs(collection(db, "scores", user.uid, "sessions"));

          let sumScore = 0;

          if (!scoresDoc.empty) {
            scoresDoc.forEach((doc) => {
              sumScore += Object.values(doc.data()).reduce((acc, curr) => acc + (typeof curr === "number" ? curr : 0), 0);
            });
          }

          setTotalScore(sumScore);

          const sessionsCollectionRef = collection(db, "scores", user.uid, "sessions");
          const today = new Date();
          const twoMonthsAgo = new Date(today);
          twoMonthsAgo.setMonth(today.getMonth() - 2);

          const sessionsQuery = query(
            sessionsCollectionRef,
            where("timestamp", ">=", twoMonthsAgo),
            where("timestamp", "<", today)
          );

          const querySnapshot = await getDocs(sessionsQuery);

          if (!querySnapshot.empty) {
            let consecutiveDays = 0;
            let currentDate = new Date(today);
            currentDate.setDate(currentDate.getDate() - 1);

            const sessionDates = new Set();
            const labels = [];
            const scores = [];

            querySnapshot.forEach((doc) => {
              const sessionDate = doc.data().timestamp.toDate();
              const score = doc.data().score;

              sessionDates.add(sessionDate.toDateString());

              labels.push(sessionDate.toLocaleDateString());
              scores.push(score);
            });

            setChartData({
              labels: labels,
              datasets: [
                {
                  label: 'Rendimiento de puntaje',
                  data: scores,
                  fill: false,
                  borderColor: '#e15759',
                  tension: 0.1
                }
              ]
            });

            while (sessionDates.has(currentDate.toDateString()) && consecutiveDays < 60) {
              consecutiveDays++;
              currentDate.setDate(currentDate.getDate() - 1);
            }

            const newRacha = consecutiveDays;
            setRacha(newRacha);
          } else {
            setRacha(0);
            setChartData({
              labels: ["No data"],
              datasets: [
                {
                  label: 'Score Over Time',
                  data: [0],
                  fill: false,
                  borderColor: '#e15759',
                  tension: 0.1
                }
              ]
            });
          }
        }
      });

      return () => unsubscribe(); // Desuscribirse cuando el componente se desmonta
    };

    fetchScoresAndRacha();
  }, []); // Asegúrate de que las dependencias necesarias se agreguen aquí

  return (
    <div className="dashboard-user-container">
      <div className="header">
        <div>
          <h2>DASHBOARD</h2>
        </div>

        <div className="container-racha">
          <img src="img/icons/calendar.svg" alt="Calendar Icon" />
          <p>{racha} Días de Racha</p>
        </div>
      </div>

      <div className="dashboard-if-container">
        <div className="if-container">
          <div className="if-1">
            <h3>Total Score</h3>

            <div className="ranking-level">
              <p>#1</p>
            </div>
          </div>

          <div className="total-score">
            <h3>{totalScore !== null ? totalScore : 0}</h3> {/* Mostrar el total del puntaje sumado */}
          </div>

          <div className="graft-ranking">
            <Line data={chartData} options={{ scales: { x: { grid: { color: '#ffffff' } }, y: { grid: { color: '#ffffff' } } } }} />
          </div>
        </div>
      </div>
    </div>
  );
}
