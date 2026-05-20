import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth"; 

const firebaseConfig = {
  apiKey: "AIzaSyBz0G_omI9u0JxKduWLgH_tU561wSWLmrA",
  authDomain: "opendashzd.firebaseapp.com",
  projectId: "opendashzd",
  storageBucket: "opendashzd.firebasestorage.app",
  messagingSenderId: "704091005312",
  appId: "1:704091005312:web:1efad9ae744f5fd9096165",
  measurementId: "G-DMDQBFGM5G"
};
  
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);
    const auth = getAuth(app);

export { db, auth }; 