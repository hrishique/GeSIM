// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAFaRrv8vW41B0FWsl3M6bHWBaUaRx38pM",
  authDomain: "g-esim-88575.firebaseapp.com",
  projectId: "g-esim-88575",
  storageBucket: "g-esim-88575.firebasestorage.app",
  messagingSenderId: "98493068670",
  appId: "1:98493068670:web:d6e3a95c424a3431f66f2f",
  measurementId: "G-GNFR2M4JPJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
