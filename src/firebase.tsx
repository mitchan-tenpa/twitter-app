import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

//v9
const firebaseConfig = {
  apiKey: "AIzaSyCFp0bs4_oHyaXdy5einFd22oyKOY1iKEc",
  authDomain: "original-twitter-app.firebaseapp.com",
  projectId: "original-twitter-app",
  storageBucket: "original-twitter-app.appspot.com",
  messagingSenderId: "633580339012",
  appId: "1:633580339012:web:1f4a7c6c6bb1fab1c8e111"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore();
export { db };