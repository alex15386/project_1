// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCdfVSPBr2WHF85KXMJ2k0AyofiDMeJGN0",
  authDomain: "alex-9-dad32.firebaseapp.com",
  projectId: "alex-9-dad32",
  storageBucket: "alex-9-dad32.appspot.com",
  messagingSenderId: "467239805106",
  appId: "1:467239805106:web:891c5e3fe8ff3ce5d369ab"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
const auth = getAuth();

export function signup(email, password) {
  return createUserWithEmailAndPassword(auth, email, password)
}
