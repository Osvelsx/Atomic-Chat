// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD8kow56U0sZ0nK-Y1ZD6jbXGLApmcbjIs",
  authDomain: "atomic-chat-227a2.firebaseapp.com",
  projectId: "atomic-chat-227a2",
  storageBucket: "atomic-chat-227a2.appspot.com",
  messagingSenderId: "497004228660",
  appId: "1:497004228660:web:77dfa79acb798ed64dda61",
  measurementId: "G-JTNLJ579LD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);