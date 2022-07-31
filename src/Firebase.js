// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyARH6-mU3ePgrmk4tq-2YNdJEYoNF2AMGQ",
  authDomain: "retcake-7ebf8.firebaseapp.com",
  projectId: "retcake-7ebf8",
  storageBucket: "retcake-7ebf8.appspot.com",
  messagingSenderId: "838567863701",
  appId: "1:838567863701:web:781ab4ffc38800f8c5829c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);