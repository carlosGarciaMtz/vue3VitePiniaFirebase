import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyDZD1n9dCtS-FMY9KbPgD78rLmklJd9Bxo",
  authDomain: "vue32022.firebaseapp.com",
  projectId: "vue32022",
  storageBucket: "vue32022.appspot.com",
  messagingSenderId: "121230413237",
  appId: "1:121230413237:web:49357839df5dc3e90f9dfc"
};

initializeApp(firebaseConfig);

const auth = getAuth()
const db = getFirestore();

export { auth, db }