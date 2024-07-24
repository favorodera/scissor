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

  // Sign in the user asynchronously
  // This function is called when the user clicks the sign in button
  // It signs in the user using the Google authentication provider
  // It then gets the user's document from the database
  // If the user document doesn't exist, it creates a new document with the user's info
  // If the user document exists, it fetches the user's data from the database
  // It sets the user's email in local storage
  // It redirects the user to the dashboard after 2 seconds
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
            name: user.user?.displayName, // Get the user's display name
            email: user.user?.email, // Get the user's email
            image: user.user?.photoURL // Get the user's photo URL
          },
          linksInfo: []
        })
      } else {
        // If user document exists, fetch user data
        setTimeout(() => {
          fetchUserData(user.user?.email as string)
        }, 3000)
      }

      // Check if userData is null
      if (localStorage.getItem('userData') === null) {
        fetchUserData(user.user?.email as string)
      }
      // Set user email in local storage
      localStorage.setItem('userEmail', user.user?.email as string)
      // Redirect to dashboard after 2 seconds
      setTimeout(() => {
        router.push('/dashboard')
      }, 5000)
    } catch (error) {
      // Handle sign in error
      return null
    }
  }

  // Log out the user asynchronously
  // This function is called when the user clicks the sign out button
  // It signs out the user
  // It removes the user's email and links info from local storage
  // It redirects the user to the home page
  const logOut = async () => {
    try {
      // Sign out the user
      signOut(auth)
      toggleUserMenu()

      // Remove user email and links info from local storage
      localStorage.removeItem('userEmail')
      localStorage.removeItem('userData')

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
