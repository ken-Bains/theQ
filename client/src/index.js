import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import * as firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyBGpfWr2iNT05JiDO3-jN0pwWFzlfJU9tY",
    authDomain: "bootcamp-q.firebaseapp.com",
    databaseURL: "https://bootcamp-q.firebaseio.com",
    projectId: "bootcamp-q",
    storageBucket: "bootcamp-q.appspot.com",
    messagingSenderId: "6648969871",
    appId: "1:6648969871:web:697b3f260b91bc1195cefa",
    measurementId: "G-09ENSJ2EPK"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
