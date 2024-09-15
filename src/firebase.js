import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// konfigurasi firebase
const firebaseConfig = {
  apiKey: "AIzaSyCii1yeGikBT6sMMak6v-3TCzBLfWoSH8U",
  authDomain: "quiz-app-70e1c.firebaseapp.com",
  databaseURL:
    "https://quiz-app-70e1c-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "quiz-app-70e1c",
  storageBucket: "quiz-app-70e1c.appspot.com",
  messagingSenderId: "53771468408",
  appId: "1:53771468408:web:c1b3c0d46c5654b80df78d",
  measurementId: "G-E48G2XHZ1K",
};

// initialize firebase
const app = initializeApp(firebaseConfig);

// initialize firestore
const db = getFirestore(app);

export { db };
