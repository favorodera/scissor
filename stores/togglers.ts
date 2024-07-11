import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useTogglersStore = defineStore('togglers', () => {
  const isMobileNavOpen = ref(false)
  const isUserMenuOpen = ref(false)
  const isAuthenticationPopupOpen = ref(false)

  const toggleMobileNav = () => {
    isMobileNavOpen.value = !isMobileNavOpen.value
  }

  const toggleUserMenu = () => {
    isUserMenuOpen.value = !isUserMenuOpen.value
  }

  const toggleAuthenticationPopup = () => {
    isAuthenticationPopupOpen.value = !isAuthenticationPopupOpen.value
  }

  return {
    isMobileNavOpen,
    toggleMobileNav,
    isUserMenuOpen,
    toggleUserMenu,
    isAuthenticationPopupOpen,
    toggleAuthenticationPopup
  }
})
