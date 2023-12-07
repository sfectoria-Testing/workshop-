// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import { getFirestore} from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB-YMX0381bEw4gczJKtUDVZNtWgiduJ7E",
  authDomain: "init-a3ea0.firebaseapp.com",
  projectId: "init-a3ea0",
  storageBucket: "init-a3ea0.appspot.com",
  messagingSenderId: "864353808469",
  appId: "1:864353808469:web:29d3c1d628fcf90482a4dc"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const auth = getAuth();
export const database = getFirestore();


