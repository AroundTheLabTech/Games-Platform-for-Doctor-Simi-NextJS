import { useState, useEffect } from "react";
import { auth, db } from "../../lib/firebase";
import { doc, getDocs, setDoc, collection, query, where } from "firebase/firestore";
import { LineChart } from "@mui/x-charts/LineChart";

export default function DashboardComponent() {
    const [racha, setRacha] = useState(0); // Estado para la racha del usuario
    const [user, setUser] = useState(null); // Estado para el usuario autenticado
    const [chartData, setChartData] = useState({ xAxis: [], seriesData: [] }); // Estado para los datos del gráfico

    useEffect(() => {
        const checkRacha = async () => {
            const unsubscribe = auth.onAuthStateChanged(async (user) => {
                if (user) {
                    setUser(user);
                    console.log("Usuario autenticado:", user.uid);

                    const statisticsDocRef = doc(db, "stadistics", user.uid);
                    const sessionsCollectionRef = collection(db, "scores", user.uid, "sessions");

                    const today = new Date();
                    const twoMonthsAgo = new Date(today);
                    twoMonthsAgo.setMonth(today.getMonth() - 2);

                    console.log("Consultando sesiones desde:", twoMonthsAgo);

                    const sessionsQuery = query(
                        sessionsCollectionRef,
                        where("timestamp", ">=", twoMonthsAgo),
                        where("timestamp", "<", today)
                    );

                    const querySnapshot = await getDocs(sessionsQuery);
                    console.log("Número de sesiones encontradas:", querySnapshot.size);

                    if (!querySnapshot.empty) {
                        let consecutiveDays = 0;
                        let currentDate = new Date(today);
                        currentDate.setDate(currentDate.getDate() - 1);

                        // Crear un set de fechas que tienen sesiones
                        const sessionDates = new Set();
                        querySnapshot.forEach((doc) => {
                            const sessionDate = doc.data().timestamp.toDate();
                            sessionDates.add(sessionDate);
                            console.log("Sesión encontrada en la fecha:", sessionDate);
                        });

                        // Verificar días consecutivos hacia atrás
                        while (sessionDates.has(currentDate.toDateString()) && consecutiveDays < 60) {
                            console.log("Día consecutivo con sesión:", currentDate.toDateString());
                            consecutiveDays++;
                            currentDate.setDate(currentDate.getDate() - 1);
                        }

                        const newRacha = consecutiveDays;
                        setRacha(newRacha);
                        console.log("Nueva racha calculada:", newRacha);

                        // Guardar la nueva racha en Firestore
                        await setDoc(statisticsDocRef, { score_racha: newRacha }, { merge: true });
                        console.log("Racha guardada en Firestore:", newRacha);

                        // Calcular datos para la gráfica
                        const firstSession = Array.from(sessionDates)[0];
                        const lastSession = Array.from(sessionDates).slice(-1)[0];
                        const totalDays = (lastSession - firstSession) / (1000 * 60 * 60 * 24);

                        let xAxis = [];
                        let seriesData = [];

                        if (totalDays <= 7) {
                            // Agrupar por días
                            const dayCount = {};
                            sessionDates.forEach((date) => {
                                const day = date.toDateString();
                                dayCount[day] = (dayCount[day] || 0) + 1;
                            });

                            xAxis = Object.keys(dayCount);
                            seriesData = Object.values(dayCount);

                        } else {
                            // Agrupar por semanas
                            const weekCount = {};
                            sessionDates.forEach((date) => {
                                const week = `${date.getFullYear()}-W${Math.ceil(
                                    (date - new Date(date.getFullYear(), 0, 1)) / (1000 * 60 * 60 * 24 * 7)
                                )}`;
                                weekCount[week] = (weekCount[week] || 0) + 1;
                            });

                            xAxis = Object.keys(weekCount);
                            seriesData = Object.values(weekCount);
                        }

                        setChartData({ xAxis, seriesData });
                    } else {
                        // Si no hay registros en los últimos dos meses, reiniciar la racha
                        console.log("No se encontraron sesiones consecutivas. Racha reiniciada a 0.");
                        setRacha(0);
                        await setDoc(statisticsDocRef, { score_racha: 0 }, { merge: true });
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
                        <h3>Total Score</h3>

                        <div className="ranking-level">
                            <p>#1</p>
                        </div>
                    </div>

                    <div className="total-score">
                        <h3>20,000</h3>
                    </div>

                    <div className="graft-ranking">
                        {chartData.xAxis.length > 0 && (
                            <LineChart
                                xAxis={[{ data: chartData.xAxis }]}
                                series={[
                                    {
                                        data: chartData.seriesData,
                                        color: '#fdb462'  // Set the color of the line here

                                    },
                                ]}

                                width={800  }
                                height={300}

                                sx={{
                                    '& .MuiLineElement-root': {
                                      strokeWidth: 4,  // Adjust the line width
                                      strokeDasharray: '10 5',  // Optional: Add dashes to the line
                                    },
                                    '& .MuiLineElement-series-Germany': {
                                      stroke: '#ff6347',  // Change the color of the line for a specific series
                                    }   
                                }}
                            />
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
