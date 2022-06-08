// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getFirestore } from 'firebase/firestore/lite';


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB-7eA3W0M29nfTDvLt8QWCUgj37-tzMiI",
  authDomain: "lbgrebootreact.firebaseapp.com",
  projectId: "lbgrebootreact",
  storageBucket: "lbgrebootreact.appspot.com",
  messagingSenderId: "184341035106",
  appId: "1:184341035106:web:d3f1a5418ae29ddd19793b"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)