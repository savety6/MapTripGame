// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDQ2_JgEdTgX1A-fZFELZxAWAt70JwhgMM",
  authDomain: "maptripgame.firebaseapp.com",
  projectId: "maptripgame",
  storageBucket: "maptripgame.appspot.com",
  messagingSenderId: "328193810482",
  appId: "1:328193810482:web:1832f25cfcae2232bf5c2b",
  measurementId: "G-6B5W5L8M82"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth();

export { auth };

//project-328193810482 google auth id 