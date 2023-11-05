// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBNMkvXN5STo5ZYbIuolZOCLEmdbzA4hWE",
  authDomain: "ceci-cocktail.firebaseapp.com",
  projectId: "ceci-cocktail",
  storageBucket: "ceci-cocktail.appspot.com",
  messagingSenderId: "600180871119",
  appId: "1:600180871119:web:03ca8030db5812d9eaccba"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const firebase_auth = getAuth(app);