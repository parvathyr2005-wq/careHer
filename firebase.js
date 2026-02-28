// Import Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.10.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.10.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.10.0/firebase-firestore.js";

// Your Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB4rZGL8ci1hSFnd_B8iCCOGDVqep1W420",
    authDomain: "careher-1d1a8.firebaseapp.com",
    projectId: "careher-1d1a8",
    storageBucket: "careher-1d1a8.firebasestorage.app",
    messagingSenderId: "797878461881",
    appId: "1:797878461881:web:7db0ef1b80aaf54fd00268",
    measurementId: "G-ZQTQQ7JTFF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export services
export const auth = getAuth(app);
export const db = getFirestore(app);