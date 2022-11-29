import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyArCn8_ax72UFQQ-XsNf74svbSLopAW5Oo",
  authDomain: "linkedin-clone-2150d.firebaseapp.com",
  projectId: "linkedin-clone-2150d",
  storageBucket: "linkedin-clone-2150d.appspot.com",
  messagingSenderId: "1086297912497",
  appId: "1:1086297912497:web:6b3d992b8426d0b9f3de90",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
