import firebase from "firebase/compat/app";

const firebaseConfig = {
  apiKey: "AIzaSyCGdUrXcRDldp-oedyv8u9WcgZiVMQde3o",
  authDomain: "coding-community-159ed.firebaseapp.com",
  projectId: "coding-community-159ed",
  storageBucket: "coding-community-159ed.appspot.com",
  messagingSenderId: "990991048349",
  appId: "1:990991048349:web:c4cfa9536f587dbb5abe74",
};

const firebaseApp = firebase.InitializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider}