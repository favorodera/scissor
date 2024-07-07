import { defineStore } from 'pinia'
import { auth, signInWithPopup, provider } from '../ts/firebase-config'
import { computed, ref } from 'vue'
import router from '../router/router'

interface userData {
  displayName: string
  email: string
  photoURL: string
}

export const useAuthenticationStore = defineStore('authentication', () => {
  const userData = ref<userData | null>(null)
  const isUserAuthenticated = ref(false)

  const authenticate = async () => {
    try {
      const result = await signInWithPopup(auth, provider)
      userData.value = result.user as userData
      isUserAuthenticated.value = !isUserAuthenticated.value
      router.push('/dashboard')
      return userData.value
    } catch (error) {
      return error
    }
  }

  return {
    userData: computed(() => userData.value),
    isUserAuthenticated,
    authenticate
  }
})
