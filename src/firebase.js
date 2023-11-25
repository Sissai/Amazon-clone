import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAUcVNHRsV_PP24WabJXglIuZIKwdvQHGU",
  authDomain: "rep-1-e9a22.firebaseapp.com",
  projectId: "rep-1-e9a22",
  storageBucket: "rep-1-e9a22.appspot.com",
  messagingSenderId: "920937018920",
  appId: "1:920937018920:web:d477f0be5cb207272fa71d",
  measurementId: "G-1V1EQBJXV7",
};


// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = app.firestore();

export { auth, db }; // Export both auth and db?/

// import firebase from 'firebase';

// const firebaseConfig = {
//   apiKey: "AIzaSyClzFFRrAgcTVxz-WbGP0oOmAvYqm8XQVw",
//   authDomain: "clone-a1923.firebaseapp.com",
//   projectId: "clone-a1923",
//   storageBucket: "clone-a1923.appspot.com",
//   messagingSenderId: "104866327943",
//   appId: "1:104866327943:web:d2aaca44d486e9d7663722",
//   measurementId: "G-MPTBX7P8BG",
// };
// const firebaseApp = firebase.initalizeApp(firebaseConfig);
// const db = firebaseApp.firestore();
// const auth = firebase.auth();
// export { db,auth };
