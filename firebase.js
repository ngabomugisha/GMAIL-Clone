import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyB9hTGEx9IO2LCKYlVhy5qZCb6qixUWeFQ",
    authDomain: "clone-1da86.firebaseapp.com",
    projectId: "clone-1da86",
    storageBucket: "clone-1da86.appspot.com",
    messagingSenderId: "1051666406340",
    appId: "1:1051666406340:web:7a735585cf8671bde86291"
  };

  const firebase = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {db, auth, provider};