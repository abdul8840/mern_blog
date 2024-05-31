// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "reactblog-f9e5a.firebaseapp.com",
  projectId: "reactblog-f9e5a",
  storageBucket: "reactblog-f9e5a.appspot.com",
  messagingSenderId: "1021305206394",
  appId: "1:1021305206394:web:38b3911e97b7a304702dc3"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);