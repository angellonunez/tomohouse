// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_KEY,
    authDomain: "tomohouse-435a1.firebaseapp.com",
    projectId: "tomohouse-435a1",
    storageBucket: "tomohouse-435a1.appspot.com",
    messagingSenderId: "657663492061",
    appId: "1:657663492061:web:897f4eab8350083d8a0034"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();