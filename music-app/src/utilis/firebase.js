// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyChTr0S8nX1vvOX7H6uioywdRL2QiDLB7o",
  authDomain: "musicapp-e526e.firebaseapp.com",
  projectId: "musicapp-e526e",
  storageBucket: "musicapp-e526e.firebasestorage.app",
  messagingSenderId: "1088567379684",
  appId: "1:1088567379684:web:7af3994d4441726ab6cef1",
  measurementId: "G-50X8VKGPB3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);