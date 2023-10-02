// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBJ3lQhJNe8FSBdm-l7zBuqlsehkkj369M",
  authDomain: "dragon-news-cb48f.firebaseapp.com",
  projectId: "dragon-news-cb48f",
  storageBucket: "dragon-news-cb48f.appspot.com",
  messagingSenderId: "709508379212",
  appId: "1:709508379212:web:ca75de542a4d069d9fbae9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;