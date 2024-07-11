import { defineStore } from 'pinia'
import router from '../router/router'
import {
  auth,
  dataBase,
  doc,
  provider,
  setDoc,
  signInWithPopup,
  signOut
} from '../ts/firebase-config'
import { useTogglersStore } from './togglers'

export const useAuthenticationStore = defineStore('authentication', () => {
  const { toggleAuthenticationPopup, toggleUserMenu } = useTogglersStore()
  const signIn = async () => {
    try {
      const user = await signInWithPopup(auth, provider)
      toggleAuthenticationPopup()
      await setDoc(doc(dataBase, 'userData', user.user?.email as string), {
        userInfo: {
          name: user.user?.displayName,
          email: user.user?.email,
          image: user.user?.photoURL
        },
        linksInfo: [],
        qrCodeInfo: []
      })
      router.push('/dashboard')
    } catch (error) {
      return null
    }
  }

  const logOut = async () => {
    try {
      signOut(auth)
      toggleUserMenu()
      router.push('/')
      return null
    } catch (error) {}
  }

  return {
    signIn,
    logOut
  }
})
