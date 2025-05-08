
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDTG-2N_7SzZNI7ti6cyLomeH9BpQPxVjk",
    authDomain: "flashcards-3565f.firebaseapp.com",
    projectId: "flashcards-3565f",
    storageBucket: "flashcards-3565f.firebasestorage.app",
    messagingSenderId: "510397428575",
    appId: "1:510397428575:web:8de147f5fa9676a8573cea",
    measurementId: "G-X98CY07NRE"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { db };