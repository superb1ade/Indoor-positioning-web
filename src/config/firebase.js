import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
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


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);