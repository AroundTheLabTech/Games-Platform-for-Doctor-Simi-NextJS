import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";  // Importar Firestore
import {initializeFirestore} from 'firebase/firestore';
import { getAnalytics } from "firebase/analytics"; // Importar Analytics (opcional)


const firebaseConfigString = '{"apiKey":"AIzaSyDuTjnONYuzpmEpC6UZvqxXzNkwPyJwK-o","authDomain":"fir-bd78e.firebaseapp.com","projectId":"fir-bd78e","storageBucket":"fir-bd78e.appspot.com","messagingSenderId":"214230919331","appId":"1:214230919331:web:5be0b5e194b91022bcb716","measurementId":"G-GF853R1BXW"}'; 
const firebaseConfig = JSON.parse(firebaseConfigString);


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);  // Inicializar Firestore
const analytics = typeof window !== 'undefined' ? getAnalytics(app) : null;

export { auth, db, analytics };  // Exportar Firestore para usarlo en otras partes de la app