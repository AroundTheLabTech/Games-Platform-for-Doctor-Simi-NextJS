"use client";
import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../../../lib/firebase";
import { getGameTitle } from "../../utils/helpers";
import Image from "next/image";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function TopGamesChart() {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    const fetchTopGames = async () => {
      const scoresSnap = await getDocs(collection(db, "scores"));
      const totalPorJuego = {};

      scoresSnap.forEach((doc) => {
        const scores = doc.data();
        Object.entries(scores).forEach(([juego, puntos]) => {
          totalPorJuego[juego] = (totalPorJuego[juego] || 0) + puntos;
        });
      });

      const sorted = Object.entries(totalPorJuego).sort((a, b) => b[1] - a[1]);

      setChartData({
        labels: sorted.filter(([juego]) => juego !== 'juego1000').map(([juego]) => getGameTitle(juego)),
        datasets: [
          {
            label: "Puntaje acumulado",
            data: sorted.map(([, puntos]) => puntos),
            backgroundColor: "rgba(75, 146, 225, 1)",
            borderColor: "rgba(75, 146, 225, 1)",
            borderWidth: 1,
          },
        ],
      });
    };

    fetchTopGames();
  }, []);

  if (!chartData) return <p>Cargando gráfico de juegos...</p>;

  return (
    <div className="top-games-chart-container" >
      <h3 className="mt-4">
        <Image width={20} height={20} src={'icons/analitycts-icons/user-profile.svg'} />
        &nbsp;
        Gráfico de puntuación por juego</h3>
      <Bar
        data={chartData}
        options={{
          responsive: true,
          plugins: {
            legend: {
              display: false,
              position: "top",
              labels: {
                color: "#ffffff",
              }
            },
            title: {
              display: false,
              text: "Puntaje total por juego",
              color: "#ffffff"
            },
          },
          scales: {
            x: {
              ticks: {
                color: "#ffffff"
              },
              grid: {
                display: false,
                color: "rgba(255, 255, 255, 0.2)"
              }
            },
            y: {
              ticks: {
                color: "#ffffff"
              },
              grid: {
                display: true,
                color: "rgba(255, 255, 255, 0.2)"
              }
            }
          }
        }}
      />
    </div>
  );
}
