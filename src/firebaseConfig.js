import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
const firebaseConfig = {
  apiKey: "AIzaSyBkdDKcG45hKCIgicQ3U4uF1dUFx2_yNYA",
  authDomain: "e-commerce-database-51590.firebaseapp.com",
  projectId: "e-commerce-database-51590",
  storageBucket: "e-commerce-database-51590.appspot.com",
  messagingSenderId: "81102392606",
  appId: "1:81102392606:web:452a996a0a602ad5de0d0f"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
