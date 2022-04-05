import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDmqhSCVVGp_xGb1zs32Qq-80QdN3m96HE",
  authDomain: "myworld-87f77.firebaseapp.com",
  projectId: "myworld-87f77",
  storageBucket: "myworld-87f77.appspot.com",
  messagingSenderId: "232457149252",
  appId: "1:232457149252:web:a59135c7321bf7950f1511",
  measurementId: "G-YQ4FYCWFH7",
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const apiKey = firebaseConfig.apiKey;
const firestore = firebase.firestore();
const storage = firebase.storage();

export { auth, apiKey, firestore, storage };
