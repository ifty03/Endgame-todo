import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBxN86eGUd7YmazTUhbQNfLGv_GgBK72Cg",
  authDomain: "endgame-todo.firebaseapp.com",
  projectId: "endgame-todo",
  storageBucket: "endgame-todo.appspot.com",
  messagingSenderId: "1076060295758",
  appId: "1:1076060295758:web:0badf4283e2db9e5c9291f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
