import { initializeApp, } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import { getFirestore, doc,updateDoc, setDoc, getDoc, getDocs, collection, query, where, onSnapshot, addDoc, orderBy } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDSB35MCoSeFy25lwoICvW4A97aCUPOjf8",
    authDomain: "react-hack-e0e65.firebaseapp.com",
    projectId: "react-hack-e0e65",
    storageBucket: "react-hack-e0e65.appspot.com",
    messagingSenderId: "431134331741",
    appId: "1:431134331741:web:5924aec21fe880ebe04eb4"
};

initializeApp(firebaseConfig)

const auth = getAuth();
const db = getFirestore();

export {
    auth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
    db,
    doc,
    setDoc,
    getDoc,
    getDocs,
    collection,
    query,
    where,
    onSnapshot,
    addDoc,
    orderBy,
    updateDoc
};