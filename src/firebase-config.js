// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import {getFirestore} from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDb2Jy0UyleWK6rjqYIltFGGAj4g39HMiE",
  authDomain: "admin-dashboard-94ea0.firebaseapp.com",
  projectId: "admin-dashboard-94ea0",
  storageBucket: "admin-dashboard-94ea0.appspot.com",
  messagingSenderId: "126844789704",
  appId: "1:126844789704:web:8837e840c88159d825d6fd",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// export const db = getFirestore(app)
export const auth = getAuth(app);
