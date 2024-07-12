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
import { useTogglersStore } from './togglers'
import { useDatabaseStore } from './database'

export const useAuthenticationStore = defineStore('authentication', () => {
  const { toggleAuthenticationPopup, toggleUserMenu } = useTogglersStore()
  const { fetchUserData } = useDatabaseStore()

  const signIn = async () => {
    try {
      const user = await signInWithPopup(auth, provider)
      toggleAuthenticationPopup()

      const userDocRef = doc(dataBase, 'userData', user.user?.email as string)

      // Check if the user already has an account
      const userDocSnapshot = await getDoc(userDocRef)
      if (userDocSnapshot.exists() === false) {
        await setDoc(userDocRef, {
          userInfo: {
            name: user.user?.displayName,
            email: user.user?.email,
            image: user.user?.photoURL
          },
          linksInfo: []
        })
      }

      // Save user email to localStorage
      localStorage.setItem('userEmail', user.user?.email as string)

      await fetchUserData()
      router.push('/dashboard')
    } catch (error) {
      return null
    }
  }

  const logOut = async () => {
    try {
      signOut(auth)
      toggleUserMenu()

      // Clear user-related data from localStorage
      localStorage.removeItem('userEmail')
      localStorage.removeItem('linksInfo')

      router.push('/')
      return null
    } catch (error) {}
  }

  return {
    signIn,
    logOut
  }
})
