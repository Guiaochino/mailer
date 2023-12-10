// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBzT1rLBFFPZG1UKQQ-_jZLKuIkwatODXo",
  authDomain: "mailer-1017c.firebaseapp.com",
  projectId: "mailer-1017c",
  storageBucket: "mailer-1017c.appspot.com",
  messagingSenderId: "329726954731",
  appId: "1:329726954731:web:97dfd9e534220e797c02ae",
  measurementId: "G-FDCYHS8F1K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export {analytics, auth}