import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {

    apiKey: "AIzaSyCD9Q61AC-3IsBaT9yR-a5jggKcKbZOogE",
    authDomain: "crwn-db-7d86f.firebaseapp.com",
    projectId: "crwn-db-7d86f",
    storageBucket: "crwn-db-7d86f.appspot.com",
    messagingSenderId: "871936668580",
    appId: "1:871936668580:web:3a76bd6c11218ec8994731",
    measurementId: "G-ZYBWGKYEX6"
  
  };
  
  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle =() => auth.signInWithPopup(provider);

  export default firebase;