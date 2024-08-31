import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";
import { auth, db } from "../../lib/firebase";
import { doc, getDocs, collection, query, where } from "firebase/firestore";
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export default function DashboardComponent() {
  const [racha, setRacha] = useState(0);
  const [user, setUser] = useState(null);
  const [chartData, setChartData] = useState({ labels: [], datasets: [] });
  const [totalScore, setTotalScore] = useState(0);
  const [progressGames,setTotalProgress] = useState(0);

  useEffect(() => {
    const fetchScoresAndRacha = async () => {
      const unsubscribe = auth.onAuthStateChanged(async (user) => {
        if (user) {
          setUser(user);

          const scoresDoc = await getDocs(collection(db, "scores", user.uid, "sessions"));

          let sumScore = 0;
          if (!scoresDoc.empty) {
            scoresDoc.forEach((doc) => {
              sumScore += Object.values(doc.data()).reduce((acc, curr) => acc + (typeof curr === "number" ? curr : 0), 0);
            });
          }

          setTotalScore(sumScore);
          setTotalProgress((sumScore *100)/2000)

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

      return () => unsubscribe();
    };

    fetchScoresAndRacha();
  }, []);
  return (
    <div className="dashboard-user-container">
      <div className="header">
        <h2>DASHBOARD</h2>
        <div className="container-racha">
          <img src="img/icons/calendar.svg" alt="Calendar Icon" />
          <p>{racha} Días de Racha</p>
        </div>
      </div>

      <div className="dashboard-content">
        <div className="dashboard-item total-score">
        <p className="score-ranking">#1</p>
          <h3>Total Score</h3>
          <h1>{totalScore !== null ? totalScore : 0}</h1>
          
        </div>

        <div className="dashboard-item">
          <h3>Rendimiento Mensual</h3>
          <div className="monthly-performance">
            <div className="performance-chart">
                

              <CircularProgressbar value={progressGames} text={`${progressGames}%`} />
            </div>
          </div>
        </div>

        <div className="dashboard-item weekly-goal">
          <h3>Meta Semanal</h3>
          <p>20000</p>
          <div className="graft-ranking">
            <Line data={chartData} options={{ scales: { x: { grid: { color: '#ffffff' } }, y: { grid: { color: '#ffffff' } } } }} />
          </div>
        </div>

        <div className="dashboard-item knowledge-level">
          <h3>Conocedor</h3>
          <p>Eres es una persona que tiene gran cultura general, conoces sobre varios temas</p>
          <img src="img/conocedor-placeholder.png" alt="Conocedor" />
        </div>

        <div className="dashboard-item top-game">
          <h3>Top Game</h3>
          <img src="img/game-piechart-placeholder.png" alt="Top Game Pie Chart" />
        </div>

        <div className="dashboard-item score-coins">
          <h3>{totalScore}</h3>
          <div className="coin-icons">
            <img src="img/coin.png" alt="Coin Icon" />
            <img src="img/coin.png" alt="Coin Icon" />
            <img src="img/coin.png" alt="Coin Icon" />
            <img src="img/coin.png" alt="Coin Icon" />
            <img src="img/coin.png" alt="Coin Icon" />
          </div>
        </div>
      </div>
    </div>
  );
}

