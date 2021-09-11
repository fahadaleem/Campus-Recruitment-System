// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { getDatabase, ref, set, child, get } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDRq6tV1ODzy9plX576723JwKKctE63zxo",
  authDomain: "campus-recruitmentapp.firebaseapp.com",
  projectId: "campus-recruitmentapp",
  storageBucket: "campus-recruitmentapp.appspot.com",
  messagingSenderId: "840049800266",
  appId: "1:840049800266:web:86df9a38e3b396dbd4a2b3",
  measurementId: "G-QJLDM487S6",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  getDatabase,
  ref,
  set,
  child,
  get,
};
