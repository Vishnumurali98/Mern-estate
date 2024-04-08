// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-702de.firebaseapp.com",
  projectId: "mern-estate-702de",
  storageBucket: "mern-estate-702de.appspot.com",
  messagingSenderId: "715418104525",
  appId: "1:715418104525:web:eefa98d9a824466f3baf84",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
