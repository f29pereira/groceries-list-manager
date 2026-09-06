// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDj-xv5KKRFPrlDa-ywOqHrp26JeYGKOLw",
  authDomain: "grocery-list-manager-482d2.firebaseapp.com",
  projectId: "grocery-list-manager-482d2",
  storageBucket: "grocery-list-manager-482d2.firebasestorage.app",
  messagingSenderId: "723330946516",
  appId: "1:723330946516:web:2b6fc8b1278d60502fb241",
  measurementId: "G-1BCGLBQC1Y",
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
export const auth = getAuth(firebaseApp);
//const analytics = getAnalytics(firebaseApp);
