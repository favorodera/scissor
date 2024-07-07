import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useMenuTogglersStore = defineStore('menu-togglers', () => {
  const isMobileNavOpen = ref(false)
  const isUserMenuOpen = ref(false)

  const toggleMobileNav = () => {
    isMobileNavOpen.value = !isMobileNavOpen.value
  }

  const toggleUserMenu = () => {
    isUserMenuOpen.value = !isUserMenuOpen.value
    console.log(isUserMenuOpen.value)
  }

  return { isMobileNavOpen, toggleMobileNav, isUserMenuOpen, toggleUserMenu }
})
