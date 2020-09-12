import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAPNRFqWIa0RN6q7N4hdKZzLCjeV7qUXL0",
  authDomain: "clone-a82e7.firebaseapp.com",
  databaseURL: "https://clone-a82e7.firebaseio.com",
  projectId: "clone-a82e7",
  storageBucket: "clone-a82e7.appspot.com",
  messagingSenderId: "1025961920717",
  appId: "1:1025961920717:web:034d96eceadcffee238184",
};

// initialzing firebase with the config 👍
const firebaseApp = firebase.initializeApp(firebaseConfig);

// making the instance of real time database 💯
const db = firebaseApp.firestore();

// making the instance of firebase authentication 💯
const auth = firebase.auth();

export { db, auth };
