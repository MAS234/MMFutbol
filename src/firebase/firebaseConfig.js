// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_BASE_API_KEY,
  authDomain: import.meta.env.VITE_BASE_API_AUTHDOMAIN,
  projectId: import.meta.env.VITE_BASE_API_PROJECTID,
  storageBucket: import.meta.env.VITE_BASE_API_STORAGEBUCKET,
  messagingSenderId: import.meta.env.VITE_BASE_API_MESSAGINGSENDERID, 
  appId: import.meta.env.VITE_BASE_API_ID,
  measurementId: import.meta.env.VITE_BASE_API_MEASUREMENTID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);