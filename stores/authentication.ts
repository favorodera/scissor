import { defineStore } from 'pinia'
import { auth, signInWithPopup, provider, signOut } from '../ts/firebase-config'
import { computed, ref } from 'vue'
import router from '../router/router'

interface userData {
  displayName: string
  email: string
  photoURL: string
}

export const useAuthenticationStore = defineStore('authentication', () => {
  const userData = ref<userData | null>(null)
  const isLoggedIn = ref(false)
  const parsedUserData = localStorage.getItem('userData')

  const username = computed(() =>
    parsedUserData
      ? JSON.parse(parsedUserData).displayName.split(' ')[0]
      : userData.value?.displayName.split(' ')[0]
  )
  const userEmail = computed(() =>
    parsedUserData ? JSON.parse(parsedUserData).email : userData.value?.email
  )
  const userImage = computed(() =>
    parsedUserData ? JSON.parse(parsedUserData).photoURL : userData.value?.photoURL
  )

  const signIn = async (): Promise<userData | null> => {
    try {
      const result = await signInWithPopup(auth, provider)
      userData.value = result.user as userData
      localStorage.setItem('userData', JSON.stringify(userData.value))
      router.push('/dashboard')
      isLoggedIn.value = true
      return userData.value
    } catch (error) {
      return null
    }
  }

  const logOut = async () => {
    try {
      signOut(auth)
      userData.value = null
      localStorage.removeItem('userData')
      router.push('/')
      isLoggedIn.value = false
      return userData.value
    } catch (error) {
      return null
    }
  }

  return {
    userData: computed(() => userData.value),
    isLoggedIn,
    signIn,
    logOut,
    username,
    userEmail,
    userImage
  }
})
