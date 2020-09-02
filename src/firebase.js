import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDyIlI_p4zy2qyCX1dvlUg99cCQYYNEkm8",
    authDomain: "slack-clone-6cfbe.firebaseapp.com",
    databaseURL: "https://slack-clone-6cfbe.firebaseio.com",
    projectId: "slack-clone-6cfbe",
    storageBucket: "slack-clone-6cfbe.appspot.com",
    messagingSenderId: "202667170977",
    appId: "1:202667170977:web:85be5bf9c1d4b39399e4e0",
    measurementId: "G-NJD4826BLH"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();  // for google authentication

  export {auth,provider};
  export default db; // explicitly import db since will be using multiple places and we won't be required to add parenthesis aroungdb like '{db} from ..'