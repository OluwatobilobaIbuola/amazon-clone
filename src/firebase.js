import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA6qIElbDJQOYJ_uHQOfIINtNTMAt9v52E",
  authDomain: "clone-13d5c.firebaseapp.com",
  projectId: "clone-13d5c",
  storageBucket: "clone-13d5c.appspot.com",
  messagingSenderId: "1097002079830",
  appId: "1:1097002079830:web:85ec57b3aaf8210a2f8df7",
  measurementId: "G-PHB6GJMX7G"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);

//export each method
export const auth = getAuth(app);
export const db = getFirestore(app);
export const _createUserWithEmailAndPassword = createUserWithEmailAndPassword;
export const _signInWithEmailAndPassword = signInWithEmailAndPassword;
export const _onAuthStateChanged = onAuthStateChanged;


