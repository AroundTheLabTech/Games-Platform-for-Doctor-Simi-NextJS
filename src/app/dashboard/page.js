"use client";

import { useEffect, useState } from "react";
import { useRouter } from 'next/navigation';
import { auth } from "../../../lib/firebase"; // Importar Firebase Auth
import { onAuthStateChanged, signOut } from "firebase/auth"; // Importar funciones de Auth

export default function Dashboard() {
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    // Verificar si el usuario está autenticado
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // Si el usuario está autenticado, se establece el estado del usuario
        setUser(user);
      } else {
        // Si no está autenticado, redirigir a la página de login
        router.push('/');
      }
    });

    // Limpiar el listener de Firebase Auth cuando el componente se desmonta
    return () => unsubscribe();
  }, [router]);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      router.push('/'); // Redirigir a la página de inicio después del logout
    } catch (error) {
      console.error("Error al cerrar sesión", error);
    }
  };

  if (!user) {
    return <p>Cargando...</p>; // Mostrar un mensaje de carga mientras se verifica la autenticación
  }
    // Para usar Despues
     {/* <h1>Bienvenido al Dashboard, {user.email}</h1>
      <button onClick={handleLogout}>Cerrar sesión</button> */}


  return (
    <main>
        
    </main>
  );
}
