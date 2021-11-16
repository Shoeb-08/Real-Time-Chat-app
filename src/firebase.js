import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
//GET Below Settings from Firebase > Project Overview > Settings > General > Your apps > Firebase SDK snippet > Config
const firebaseConfig = {
  apiKey: "AIzaSyAmIxHU1H_L3CMijTZyakjyhU2Dj3xumYY",
  authDomain: "chat-f527c.firebaseapp.com",
  projectId: "chat-f527c",
  storageBucket: "chat-f527c.appspot.com",
  messagingSenderId: "551524673631",
  appId: "1:551524673631:web:7b11fd7877e39c164913ea",
  measurementId: "G-LH2E8K0RRC"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore(); 
  const auth = firebaseApp.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth,provider};
  export default db;
