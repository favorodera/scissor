import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useTogglersStore = defineStore('togglers', () => {
  const isMobileNavOpen = ref(false)
  const isUserMenuOpen = ref(false)
  const isAuthenticationOpen = ref(false)

  const toggleMobileNav = () => {
    isMobileNavOpen.value = !isMobileNavOpen.value
  }

  const toggleUserMenu = () => {
    isUserMenuOpen.value = !isUserMenuOpen.value
  }

  const toggleAuthentication = () => {
    isAuthenticationOpen.value = !isAuthenticationOpen.value
  }

  return {
    isMobileNavOpen,
    toggleMobileNav,
    isUserMenuOpen,
    toggleUserMenu,
    isAuthenticationOpen,
    toggleAuthentication
  }
})
