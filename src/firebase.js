import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBi3Cl83Gx1MqcFmd2rxSoxJcM9OWzHhfw",
  authDomain: "flashyfilters-d7e03.firebaseapp.com",
  databaseURL:
    "https://flashyfilters-d7e03-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "flashyfilters-d7e03",
  storageBucket: "flashyfilters-d7e03.appspot.com",
  messagingSenderId: "806620335186",
  appId: "1:806620335186:web:3a2e4955bf2cc95e3ea38b",
  measurementId: "G-7RE9TSVL38",
};

const app = initializeApp(firebaseConfig);

// Realtime DB + Storage
export const db = getDatabase(app);
export const storage = getStorage(app);
