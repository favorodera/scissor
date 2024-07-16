import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useTogglersStore = defineStore('togglers', () => {
  // Toggler state for mobile navigation
  const isMobileNavOpen = ref(false)

  // Toggler state for user menu
  const isUserMenuOpen = ref(false)

  // Toggler state for authentication popup
  const isAuthenticationPopupOpen = ref(false)

  // Function to toggle mobile navigation
  const toggleMobileNav = () => (isMobileNavOpen.value = !isMobileNavOpen.value)

  // Function to toggle user menu
  const toggleUserMenu = () => (isUserMenuOpen.value = !isUserMenuOpen.value)

  //   Function to toggle authentication popup
  const toggleAuthenticationPopup = () =>
    (isAuthenticationPopupOpen.value = !isAuthenticationPopupOpen.value)

  return {
    isMobileNavOpen,
    toggleMobileNav,
    isUserMenuOpen,
    toggleUserMenu,
    isAuthenticationPopupOpen,
    toggleAuthenticationPopup
  }
})
