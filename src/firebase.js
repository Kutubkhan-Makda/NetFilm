// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCz9x-9dBesUNDAjxGA102CkzdS63WgscY",
    authDomain: "netfilm-11d90.firebaseapp.com",
    projectId: "netfilm-11d90",
    storageBucket: "netfilm-11d90.appspot.com",
    messagingSenderId: "999792013381",
    appId: "1:999792013381:web:d32c0282fc2480655d332c",
    measurementId: "G-1T6G82R5JZ"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore()
  const auth = firebase.auth()

  export { auth, db };