import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore"

// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBg4A1aLhBR3AzfnkKInRSuyCfnXbSEz78",
  authDomain: "markdown-editor-e3017.firebaseapp.com",
  projectId: "markdown-editor-e3017",
  storageBucket: "markdown-editor-e3017.appspot.com",
  messagingSenderId: "593608931388",
  appId: "1:593608931388:web:16f8ad37b6d8a2b1122b39"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const notesCollection = collection(db, "notes")
