import { defineStore } from 'pinia'
import router from '../router/router'
import {
  auth,
  dataBase,
  doc,
  getDoc,
  provider,
  setDoc,
  signInWithPopup,
  signOut
} from '../ts/firebase-config'
import { useDatabaseStore } from './database'
import { useTogglersStore } from './togglers'

export const useAuthenticationStore = defineStore('authentication', () => {
  // Get the toggle functions from the Togglers store
  const { toggleAuthenticationPopup, toggleUserMenu } = useTogglersStore()
  // Get the fetchUserData function from the Database store
  const { fetchUserData } = useDatabaseStore()

  // Function to sign in the user
  const signIn = async () => {
    try {
      // Sign in with popup using authentication provider
      const user = await signInWithPopup(auth, provider)
      toggleAuthenticationPopup()

      // Get the reference to the user document
      const userDocRef = doc(dataBase, 'userData', user.user?.email as string)

      // Get the snapshot of the user document
      const userDocSnapshot = await getDoc(userDocRef)
      if (userDocSnapshot.exists() === false) {
        // If user document doesn't exist, create a new document with user info
        await setDoc(userDocRef, {
          userInfo: {
            name: user.user?.displayName,
            email: user.user?.email,
            image: user.user?.photoURL
          },
          linksInfo: []
        })
      } else {
        // If user document exists, fetch user data
        await fetchUserData(user.user?.email as string)
      }
      // Set user email in local storage
      localStorage.setItem('userEmail', user.user?.email as string)
      // Redirect to dashboard after 2 seconds
      setTimeout(() => {
        router.push('/dashboard')
      }, 2000)
    } catch (error) {
      // Handle sign in error
      return null
    }
  }

  // Function to log out the user
  const logOut = async () => {
    try {
      // Sign out the user
      signOut(auth)
      toggleUserMenu()

      // Remove user email and links info from local storage
      localStorage.removeItem('userEmail')
      localStorage.removeItem('linksInfo')

      // Redirect to home page
      router.push('/')
      return null
    } catch (error) {
      // Handle log out error
      return null
    }
  }

  return {
    signIn,
    logOut
  }
})
