import firebase from 'firebase'
import firestore from 'firebase/firestore'
// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyBEElQmGPCS6bXevXpxTQTMPe5r7Py0Q_U",
    authDomain: "ninja-chat-680a5.firebaseapp.com",
    databaseURL: "https://ninja-chat-680a5.firebaseio.com",
    projectId: "ninja-chat-680a5",
    storageBucket: "ninja-chat-680a5.appspot.com",
    messagingSenderId: "607248573470",
    appId: "1:607248573470:web:6411ca6882fa941249fa0f",
    measurementId: "G-7212WPL9KH"
  };
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  //firebase.analytics();
  //firebaseApp.firestore().settings({ timestampsInSnapshots: true})

export default firebaseApp.firestore()