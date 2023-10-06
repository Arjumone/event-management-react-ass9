// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDELn9tds_B1feGWKJMSn33LPRyFC8Kxi0",
  authDomain: "react-event-managment.firebaseapp.com",
  projectId: "react-event-managment",
  storageBucket: "react-event-managment.appspot.com",
  messagingSenderId: "348797202261",
  appId: "1:348797202261:web:2a1043795c60ff0f0309dc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default  auth;