// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-fe510.firebaseapp.com",
  projectId: "mern-estate-fe510",
  storageBucket: "mern-estate-fe510.appspot.com",
  messagingSenderId: "428653663030",
  appId: "1:428653663030:web:6136c05e9c3059bb8ed997"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);