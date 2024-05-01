import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDKihuopnG-6Ah16FeOZvGh6RlAhJ_iBno",
  authDomain: "instant-chat-92b5b.firebaseapp.com",
  projectId: "instant-chat-92b5b",
  storageBucket: "instant-chat-92b5b.appspot.com",
  messagingSenderId: "809562855520",
  appId: "1:809562855520:web:43fde8e282432cd0dccb05"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration


// Initialize Firebase
// const app = initializeApp(firebaseConfig);