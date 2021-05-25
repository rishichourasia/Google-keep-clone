import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';


var firebaseConfig = {
    apiKey: "AIzaSyBYHuL4EUmbpxMHXN8_b7czclDXX1pFn34",
    authDomain: "keep-clone-c6aee.firebaseapp.com",
    projectId: "keep-clone-c6aee",
    storageBucket: "keep-clone-c6aee.appspot.com",
    messagingSenderId: "39476414660",
    appId: "1:39476414660:web:377b0706ade6a31770e191"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

var auth = firebase.auth();
var provider = new firebase.auth.GoogleAuthProvider(); 

export {auth , provider};

const dataBase = firebase.firestore();


export { dataBase };