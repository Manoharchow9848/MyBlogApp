// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "myblogapp-27468.firebaseapp.com",
  projectId: "myblogapp-27468",
  storageBucket: "myblogapp-27468.appspot.com",
  messagingSenderId: "609124515318",
  appId: "1:609124515318:web:77bf0596bd4c6d7d461bd7"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);