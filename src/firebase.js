import firebase from "firebase";

const firebaseConfig = {
    apiKey: "-----------API_KEY---------------",
    authDomain: "----------AUTH_DOMAIN-----------",
    databaseURL: "------------DATABAE--------------",
    projectId: "----------------PROJECTID-----------",
    storageBucket: "-------------BUCKET--------------",
    messagingSenderId: "-----------SENDERID-------------",
    appId: "---------------------APPID-----------------",
    measurementId: "---------------MEASUREMENTID------------"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();  // for google authentication

  export {auth,provider};
  export default db; // explicitly import db since will be using multiple places and we won't be required to add parenthesis aroungdb like '{db} from ..'
