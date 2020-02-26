import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  // copy and paste your firebase credential here
  apiKey: "AIzaSyBGpfWr2iNT05JiDO3-jN0pwWFzlfJU9tY",
  authDomain: "bootcamp-q.firebaseapp.com",
  databaseURL: "https://bootcamp-q.firebaseio.com",
  projectId: "bootcamp-q",
  storageBucket: "bootcamp-q.appspot.com",
  messagingSenderId: "6648969871",
  appId: "1:6648969871:web:697b3f260b91bc1195cefa",
  measurementId: "G-09ENSJ2EPK"
});

const db = firebaseApp.firestore();

export default db ;