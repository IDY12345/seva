// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBQe2ZfxY6g2HEJzXq1x4lIGDhYoWGAvCY",
  authDomain: "seva-44894.firebaseapp.com",
  projectId: "seva-44894",
  storageBucket: "seva-44894.appspot.com",
  messagingSenderId: "467934553825",
  appId: "1:467934553825:web:6bcb88aa7fbee91d53b9a0",
  measurementId: "G-F0MVPYJ8S5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);