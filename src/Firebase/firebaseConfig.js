
// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth"
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBmGEK9slUaVXBX8mSEwxgbUtS2XZD-whQ",
  authDomain: "sprint4-a60e8.firebaseapp.com",
  projectId: "sprint4-a60e8",
  storageBucket: "sprint4-a60e8.appspot.com",
  messagingSenderId: "1081342501195",
  appId: "1:1081342501195:web:598c5127b97b82ee45c8ce"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);