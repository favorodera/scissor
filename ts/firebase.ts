import { initializeApp } from 'firebase/app'
import { GoogleAuthProvider, getAuth, signInWithRedirect,getRedirectResult } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCC64Nn4jBqVsSnEkyRXk_2XGTzwL2VDFM",
  authDomain: "scissortool.firebaseapp.com",
  projectId: "scissortool",
  storageBucket: "scissortool.appspot.com",
  messagingSenderId: "881658314273",
  appId: "1:881658314273:web:1bdcd991530b9d36a76d60"
};

const app = initializeApp(firebaseConfig)


const provider = new GoogleAuthProvider()
const auth = getAuth()

export { auth, provider , app, signInWithRedirect,getRedirectResult}

