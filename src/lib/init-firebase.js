import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


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
const db = getFirestore(app);

