import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAMm1vgvYd1SfDdKUSULRpm-WkQl9rGnPM",
  authDomain: "fir-chat-94063.firebaseapp.com",
  projectId: "fir-chat-94063",
  storageBucket: "fir-chat-94063.appspot.com",
  messagingSenderId: "969957249126",
  appId: "1:969957249126:web:f13de2f05ab5632e569da7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const firestore = getFirestore(app);
export const storage = getStorage(app);



