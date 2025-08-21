"use client";
import React, { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../../lib/firebase";
import { useRouter } from "next/navigation";
import TopGamesChart from "../../components/analytics/TopGamesChart";
import UserRegistrationsChart from "../../components/analytics/UserRegistrationsChart";
import UserLoginsChart from "../../components/analytics/UserLoginsChart";
import Image from "next/image";

export default function AnalyticsDashboard() {
  const [authorized, setAuthorized] = useState(false);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (!currentUser) return setLoading(false);

      const docRef = doc(db, "analytics_users", currentUser.email);
      const docSnap = await getDoc(docRef);
      if (!docSnap.exists()) return router.push("/dashboard");

      /*
      const email = currentUser.email;
      const possibleIds = [email, email.toLowerCase()];

      for (const id of possibleIds) {
        const docRef = doc(db, "analytics_users", id);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          return router.push("/dashboard");
        }
      }
      */

      setAuthorized(true);
      setLoading(false);
    });

    return () => unsubscribe();
  }, [router]);

  if (loading) return <p>Cargando datos...</p>;
  if (!authorized) return null;

  return (
    <main className="analytics-container">
      <li>
        <Image src="img/icons/dashboard.svg" width={22} height={28} alt="Dashboard icon" />
        <button onClick={() => {
          router.push("/dashboard");
        }}>DASHBOARD</button>
      </li>
      <h2>Analíticas de Simijuegos</h2>
      <div className="charts-container" >
        <TopGamesChart />
        <UserRegistrationsChart />
        <UserLoginsChart />
      </div>
    </main>
  );
}
