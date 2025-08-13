// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "clone-96817.firebaseapp.com",
  projectId: "clone-96817",
  storageBucket: "clone-96817.firebasestorage.app",
  messagingSenderId: "85803348646",
  appId: "1:85803348646:web:0718ec67f56a9d83d7fa67"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);