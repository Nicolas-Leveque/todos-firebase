// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB2JdjpJqnb2RG4eqQwdzZ7rvE5r-mpCRs",
    authDomain: "fire-testing-e125f.firebaseapp.com",
    projectId: "fire-testing-e125f",
    storageBucket: "fire-testing-e125f.appspot.com",
    messagingSenderId: "9726868316",
    appId: "1:9726868316:web:91ec78db8f16cab79e9f99",
    databaseURL: "https://fire-testing-e125f-default-rtdb.europe-west1.firebasedatabase.app"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
