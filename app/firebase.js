// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDXi29_4UrmrnmBuT3vSjCkxzvc8d4_TYc",
  authDomain: "api-translator-e11f5.firebaseapp.com",
  projectId: "api-translator-e11f5",
  storageBucket: "api-translator-e11f5.appspot.com",
  messagingSenderId: "305462065117",
  appId: "1:305462065117:web:af6b01ef706896f8dd6834",
  measurementId: "G-456Q1991M9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);