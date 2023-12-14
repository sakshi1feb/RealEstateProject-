// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "real-estate-project-eff38.firebaseapp.com",
  projectId: "real-estate-project-eff38",
  storageBucket: "real-estate-project-eff38.appspot.com",
  messagingSenderId: "565552771214",
  appId: "1:565552771214:web:850c59d310ff038809d9df"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);
