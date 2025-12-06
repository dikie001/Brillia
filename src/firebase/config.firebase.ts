// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyALr3-uPPg0wYlq9ukPurfOQ9dSz3WQNuY",
  authDomain: "dikie001-25256.firebaseapp.com",
  projectId: "dikie001-25256",
  storageBucket: "dikie001-25256.firebasestorage.app",
  messagingSenderId: "345602219196",
  appId: "1:345602219196:web:04f3d8342424822920c4b9",
  measurementId: "G-KGTEYESD50"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const auth = getAuth(app);

