// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAmGwaj9JytE0iLuVzhZkVlvHKFBl0qcuM",
  authDomain: "netflixgpt-b2c1c.firebaseapp.com",
  projectId: "netflixgpt-b2c1c",
  storageBucket: "netflixgpt-b2c1c.firebasestorage.app",
  messagingSenderId: "1024160048548",
  appId: "1:1024160048548:web:ef62e338478def256b4d31",
  measurementId: "G-M88S81WZSC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);