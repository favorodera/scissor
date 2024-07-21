import { defineStore } from 'pinia'
import { ref } from 'vue'

/**
 * Define a Pinia store for managing toggles.
 *
 * @returns {object} The Pinia store.
 */
export const useTogglersStore = defineStore('togglers', () => {
  // Toggler state for mobile navigation
  const isMobileNavOpen = ref(false)

  // Toggler state for user menu
  const isUserMenuOpen = ref(false)

  // Toggler state for authentication popup
  const isAuthenticationPopupOpen = ref(false)

  /**
   * Function to toggle mobile navigation.
   *
   * @returns {void}
   */
  const toggleMobileNav = () => (isMobileNavOpen.value = !isMobileNavOpen.value)

  /**
   * Function to toggle user menu.
   *
   * @returns {void}
   */
  const toggleUserMenu = () => (isUserMenuOpen.value = !isUserMenuOpen.value)

  /**
   * Function to toggle authentication popup.
   *
   * @returns {void}
   */
  const toggleAuthenticationPopup = () =>
    (isAuthenticationPopupOpen.value = !isAuthenticationPopupOpen.value)

  return {
    // Return the toggler states
    isMobileNavOpen,
    // Return the function to toggle mobile navigation
    toggleMobileNav,
    // Return the toggler state for user menu
    isUserMenuOpen,
    // Return the function to toggle user menu
    toggleUserMenu,
    // Return the toggler state for authentication popup
    isAuthenticationPopupOpen,
    // Return the function to toggle authentication popup
    toggleAuthenticationPopup
  }
})
