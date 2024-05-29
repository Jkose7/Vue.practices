// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB8_UYKAj7_6g9EAqPRIK5JAQowficYbsc",
  authDomain: "vue-auth-firebase-196ab.firebaseapp.com",
  projectId: "vue-auth-firebase-196ab",
  storageBucket: "vue-auth-firebase-196ab.appspot.com",
  messagingSenderId: "647903537851",
  appId: "1:647903537851:web:117eb63b7a8dc65717979e",
  measurementId: "G-P5NZM8ZSL9",
};

// Initialize Firebase
export const app = () => initializeApp(firebaseConfig);
