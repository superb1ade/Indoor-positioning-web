// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCIK8Io8_xs8YvZhVFN_5Y_dyVIcNcI8Ks",
  authDomain: "iot-positioning-system.firebaseapp.com",
  databaseURL: "https://iot-positioning-system-default-rtdb.firebaseio.com",
  projectId: "iot-positioning-system",
  storageBucket: "iot-positioning-system.appspot.com",
  messagingSenderId: "942772851112",
  appId: "1:942772851112:web:006d4121210eed8155cd9d",
  measurementId: "G-LQ9NC6WKJ5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);