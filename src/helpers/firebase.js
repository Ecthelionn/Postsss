// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_POST_apiKey,
  authDomain: process.env.REACT_APP_POST_authDomain,
  projectId: process.env.REACT_APP_POST_projectId,
  storageBucket: process.env.REACT_APP_POST_storageBucket,
  messagingSenderId: process.env.REACT_APP_POST_messagingSenderId,
  appId: process.env.REACT_APP_POST_appId,
  measurementId: process.env.REACT_APP_POST_measurementId,
  databaseURL: process.env.REACT_APP_POST_databaseURL,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
