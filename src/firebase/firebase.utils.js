import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDerWtlwlmvW1TIT4hpuUXLndRLmtcJS4c",
    authDomain: "crwn-db-fd247.firebaseapp.com",
    projectId: "crwn-db-fd247",
    storageBucket: "crwn-db-fd247.appspot.com",
    messagingSenderId: "941053304528",
    appId: "1:941053304528:web:c1181ec0ddc1bc53bb88d5",
    measurementId: "G-DZ1GFRNL4N"
  };

  firebase.initializeApp(config)

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;
  