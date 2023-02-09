import firebase from 'firebase/compat/app';
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword  } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {
	apiKey: 'AIzaSyCz8-ALdCmJBDno2x33bfGlHNUo6FZBt8I',
	authDomain: 'netflix-build-project-b6cdc.firebaseapp.com',
	projectId: 'netflix-build-project-b6cdc',
	storageBucket: 'netflix-build-project-b6cdc.appspot.com',
	messagingSenderId: '65090112586',
	appId: '1:65090112586:web:d242300650e43954abaab3'
};


// initialise the app 
// const firebaseApp = firebase.initializeApp(firebaseConfig);
const firebaseApp = initializeApp(firebaseConfig);
// const db = firebaseApp.firestore(); // firestore is the database we will be using 
const db = getFirestore(); // firestore is the database we will be using 
const auth = getAuth();
const createUserWithEmailAndPasswor = createUserWithEmailAndPassword();
const signInWithEmailAndPasswor = signInWithEmailAndPassword();
// const firestore = getFirestore();


// you can have many explicit exports 
export { auth, createUserWithEmailAndPasswor, signInWithEmailAndPasswor, firebaseApp  } ;
export default db; // you can only have 1 default exports 