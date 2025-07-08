"use client";
import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import { Line } from "react-chartjs-2";
import { getUserLoginsByDate } from "../../utils/analytics";
import "react-datepicker/dist/react-datepicker.css";
import Image from "next/image";

export default function UserLoginsChart() {
  const [startDate, setStartDate] = useState(() => {
    const d = new Date();
    d.setDate(d.getDate() - 13);
    return d;
  });
  const [endDate, setEndDate] = useState(new Date());
  const [chartData, setChartData] = useState(null);

  const fetchData = async () => {
    const logins = await getUserLoginsByDate(startDate, endDate);
    const fechas = Object.keys(logins).sort();
    setChartData({
      labels: fechas,
      datasets: [
        {
          label: "Logins por día",
          data: fechas.map((f) => logins[f]),
          fill: false,
          borderColor: "rgba(255, 99, 132, 1)",
          backgroundColor: "rgba(255, 99, 132, 0.5)",
          tension: 0.3,
        },
      ],
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="user-login-chart-container mt-8">
      <h3>
        <Image width={20} height={20} src={'icons/analitycts-icons/chart-line.svg'} />
        &nbsp;
        Inicios de sesión
      </h3>
      <div className="datapicker-container flex gap-4 items-center my-2">
        <div className="datepicker-date" >
          <label>Desde:</label>
          <DatePicker className="datapicker" selected={startDate} onChange={(d) => setStartDate(d)} />
        </div>
        <div className="datepicker-date" >
          <label>Hasta:</label>
          <DatePicker className="datapicker" selected={endDate} onChange={(d) => setEndDate(d)} maxDate={new Date()} />
        </div>
        <button onClick={fetchData} className="fiter-button px-4 py-2 bg-green-600 text-white rounded">
          Filtrar logins
        </button>
      </div>
      {
        chartData &&
        <Line
          data={chartData}
          options={{
            responsive: true,
            plugins: {
              legend: {
                display: false,
                position: "top",
                labels: {
                  color: "#fff", // texto de leyenda blanco
                },
              },
              title: {
                display: false,
                text: "Registros por día",
                color: "#00f0ff", // título con color neón
                font: {
                  size: 18,
                },
              },
            },
            scales: {
              x: {
                ticks: {
                  color: "#ffffff",
                },
                grid: {
                  display: false,
                  color: "rgba(255,255,255,0.1)",
                },
              },
              y: {
                ticks: {
                  color: "#ffffff",
                },
                grid: {
                  color: "rgba(255,255,255,0.1)",
                },
              },
            },
          }}
        />
      }
    </div>
  );
}
