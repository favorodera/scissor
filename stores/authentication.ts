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
  const { toggleAuthenticationPopup, toggleUserMenu } = useTogglersStore()
  const { fetchUserData } = useDatabaseStore()

  const signIn = async () => {
    try {
      const user = await signInWithPopup(auth, provider)
      toggleAuthenticationPopup()

      const userDocRef = doc(dataBase, 'userData', user.user?.email as string)

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
      } else {
        await fetchUserData(user.user?.email as string)
      }
      localStorage.setItem('userEmail', user.user?.email as string)
      setTimeout(() => {
        router.push('/dashboard')
      }, 2000)
    } catch (error) {
      return null
    }
  }

  const logOut = async () => {
    try {
      signOut(auth)
      toggleUserMenu()

      localStorage.removeItem('userEmail')
      localStorage.removeItem('linksInfo')

      router.push('/')
      return null
    } catch (error) {
      return null
    }
  }

  return {
    signIn,
    logOut
  }
})
