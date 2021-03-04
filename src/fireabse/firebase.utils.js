import firebase from "firebase/app";

import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBDdxsg4VqBsF5YGYnOAWmAx6nvpCbk1PQ",
  authDomain: "react-test-5e32f.firebaseapp.com",
  projectId: "react-test-5e32f",
  storageBucket: "react-test-5e32f.appspot.com",
  messagingSenderId: "838822914808",
  appId: "1:838822914808:web:4b01e99594cb17a592e90d",
  measurementId: "G-94RZXC6QTL",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: "select_account" });


export const signInWIthGoogle = () => auth.signInWithPopup(provider);

export default firebase;
