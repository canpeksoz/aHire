import { initializeApp } from "firebase/app";
import { getPerformance } from "firebase/performance";


// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
 apiKey: "AIzaSyBExhGEGFVitugDVDoNYW2c4qeDyVQdqJQ",
    authDomain: "ahire-636cc.firebaseapp.com",
    databaseURL: "https://ahire-636cc-default-rtdb.firebaseio.com",
    projectId: "ahire-636cc",
    storageBucket: "ahire-636cc.appspot.com",
    messagingSenderId: "454483553062",
    appId: "1:454483553062:web:ccd511b854b9535adf2fe7",
    measurementId: "G-CM18EJXDBR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Performance Monitoring and get a reference to the service
const perf = getPerformance(app);
