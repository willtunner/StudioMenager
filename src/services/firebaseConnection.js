import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

let firebaseConfig = {
    apiKey: "AIzaSyCOAJqd9EUMmkucsCoxTXPLVtpEP1wm3qk",
    authDomain: "projetostudios-56bd4.firebaseapp.com",
    databaseURL: "https://projetostudios-56bd4.firebaseio.com",
    projectId: "projetostudios-56bd4",
    storageBucket: "projetostudios-56bd4.appspot.com",
    messagingSenderId: "399624700360",
    appId: "1:399624700360:web:54f7d20537b7eb40dc00fd",
    measurementId: "G-DTP6Z382PC"
};


if (!firebase.apps.length) {
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
}

export default firebase;