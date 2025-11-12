
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
import {getFirestore} from "firebase/firestore"
import {getStorage} from "firebase/storage"



const firebaseConfig = {
  apiKey: "AIzaSyBMuknqyk_Tnl7P-EYn8JbycUJcZW7n9_U",
  authDomain: "hui-blog-48ee5.firebaseapp.com",
  projectId: "hui-blog-48ee5", 
  storageBucket: "hui-blog-48ee5.firebasestorage.app",
  messagingSenderId: "578009825458",
  appId: "1:578009825458:web:6d43b031e2ccb89cf589ab"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const GoogleProvider = new GoogleAuthProvider
export const db = getFirestore (app)
export const storage = getStorage