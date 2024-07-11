import { initializeApp } from 'firebase/app'
import { GoogleAuthProvider, getAuth, signInWithPopup, signOut } from 'firebase/auth'
import 'firebase/firestore'
import {
  addDoc,
  collection,
  doc,
  getDoc,
  getFirestore,
  setDoc,
  updateDoc,
  arrayUnion,
  arrayRemove
} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: 'scissortool.firebaseapp.com',
  projectId: 'scissortool',
  storageBucket: 'scissortool.appspot.com',
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID
}

const app = initializeApp(firebaseConfig)
const provider = new GoogleAuthProvider()
const auth = getAuth(app)
const dataBase = getFirestore(app)

export {
  addDoc,
  auth,
  collection,
  dataBase,
  doc,
  getDoc,
  provider,
  setDoc,
  signInWithPopup,
  signOut,
  updateDoc,
  arrayUnion,
  arrayRemove
}
