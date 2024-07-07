import { initializeApp } from 'firebase/app'
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth'

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

export { provider, auth, signInWithPopup }
