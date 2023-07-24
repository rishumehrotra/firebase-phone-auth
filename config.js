import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

export const firebaseConfig = {
  apiKey: "AIzaSyDh-WYpiMz9UkT8peoFz9-Fix_Ry-R6SbI",
  authDomain: "auth-petmate.firebaseapp.com",
  projectId: "auth-petmate",
  storageBucket: "auth-petmate.appspot.com",
  messagingSenderId: "702555528450",
  appId: "1:702555528450:web:3b13469e47e1e11dbe361b",
  measurementId: "G-4ESRJBQTXG"
};

if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}

