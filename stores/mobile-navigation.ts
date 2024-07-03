import { defineStore } from "pinia";
import { ref } from "vue";

export const useMobileNavigationStore = defineStore("mobileNavigation", () => {
  const isMobileNavOpen = ref(false);

  const toggleMobileNav = () => {
    isMobileNavOpen.value = !isMobileNavOpen.value;
  };

  return { isMobileNavOpen, toggleMobileNav };
});