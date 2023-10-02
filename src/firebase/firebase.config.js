// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAxxAt2tkh6X4llc7G8HNm9PRTrb9gH1PI",
  authDomain: "auth-moha-milon-recap-5122f.firebaseapp.com",
  projectId: "auth-moha-milon-recap-5122f",
  storageBucket: "auth-moha-milon-recap-5122f.appspot.com",
  messagingSenderId: "846082401486",
  appId: "1:846082401486:web:9d7f2dfe8d378d53d5dc9f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
