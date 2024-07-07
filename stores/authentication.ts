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
  const username = computed(() => userData.value?.displayName)

  const authenticate = async (): Promise<userData | null> => {
    try {
      const result = await signInWithPopup(auth, provider)
      userData.value = result.user as userData
      isLoggedIn.value = !isLoggedIn.value
      router.push('/dashboard')
      return userData.value
    } catch (error) {
      return null
    }
  }

  const logout = async () => {
    try {
      signOut(auth)
      userData.value = null
      isLoggedIn.value = !isLoggedIn.value
      router.push('/')
      return userData.value
    } catch (error) {
      return null
    }
  }

  return {
    userData: computed(() => userData.value),
    isLoggedIn,
    authenticate,
    logout,
    username
  }
})
