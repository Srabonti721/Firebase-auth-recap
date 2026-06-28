// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBJ62x5BIwtV3zQ5PNOXL-q7jnGhRD_Oeo",
  authDomain: "fir-auth-recap-c0e89.firebaseapp.com",
  projectId: "fir-auth-recap-c0e89",
  storageBucket: "fir-auth-recap-c0e89.firebasestorage.app",
  messagingSenderId: "1015118226451",
  appId: "1:1015118226451:web:7d40c3ae2d1264b34dcbe6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);