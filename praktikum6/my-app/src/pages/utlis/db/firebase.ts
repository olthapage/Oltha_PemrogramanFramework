// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDWnncQTGjKUnpFeHWZk22X4hLxkzcCYPg",
  authDomain: "framework-next-f0a93.firebaseapp.com",
  projectId: "framework-next-f0a93",
  storageBucket: "framework-next-f0a93.firebasestorage.app",
  messagingSenderId: "675920287066",
  appId: "1:675920287066:web:93b18a6f799183781a4f63",
  measurementId: "G-41WRY2X0W6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);