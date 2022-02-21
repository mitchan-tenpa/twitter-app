import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "original-twitter-app.NEXT_PUBLIC_FIREBASE_SPIKEY",
  authDomain: "original-twitter-app.NEXT_PUBLIC_FIREBASE_DOMAIN",
  databaseURL: "original-twitter-app.NEXT_PUBLIC_FIREBASE_DATABASE",
  projectId: "original-twitter-app.NEXT_PUBLIC_FIREBASE_PROJECT_ID",
  storageBucket: "original-twitter-app.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET",
  messagingSenderId: "original-twitter-app.NEXT_PUBLIC_FIREBASE_SENDER_ID",
  appId: "original-twitter-app.NEXT_PUBLIC_FIREBASE_APP_ID"
};

// const firebaseApp = firebase.initializeApp(firebaseConfig);

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

// export const db = firebaseApp.firestore();
export const auth = firebase.auth();
export const storage = firebase.storage();
export const provider = new firebase.auth.GoogleAuthProvider();