<script setup lang="ts">
import { useMobileNavigationStore } from '../stores/mobile-navigation'
const mobileNavStore = useMobileNavigationStore()
</script>

<template>
  <Transition name="mobile-nav" mode="out-in"
    ><div class="mobile-nav" v-if="mobileNavStore.isMobileNavOpen === true">
      <nav>
        <div class="logo-container">
          <div class="logo"><img src="../media/icons/scissor.svg" alt="logo" /></div>
          <div class="logo-line"></div>
          <p class="logo-text">SCISSOR</p>
        </div>
        <div class="login-and-escape-container">
          <button class="login">Login</button>
          <button class="close-btn" @click="mobileNavStore.toggleMobileNav">
            <img src="../media/icons/escape.svg" alt="escape" />
          </button>
        </div>
      </nav></div
  ></Transition>
</template>

<style scoped lang="scss">
@use '../scss/functions.scss' as function;
.mobile-nav {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #ffffff;
  z-index: 9999;
  display: flex;
  flex-direction: column;
  padding: 0.75rem;
  align-items: center;
  transition: transform 0.3s ease-in-out;
}

.mobile-nav-enter-active,
.mobile-nav-leave-active {
  transform: translateX(100%);
}

.mobile-nav-leave-to {
  transform: translateX(-100%);
}

nav {
  width: 100%;
  max-width: 71.875rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.close-btn {
  @include function.mediaContainers(2rem, 2rem);
  background: transparent;
  border: none;
}

.logo-container {
  display: flex;
  align-items: center;
  padding: 0.5rem;
  gap: 0.5rem;
  justify-content: center;
}
.logo {
  @include function.mediaContainers(1.5rem, 1.5rem);
}

.logo-line {
  width: 0.125rem;
  height: 1.5rem;
  background: #0065fe;
}

.logo-text {
  @include function.typography(1.5rem, 400, Gilroy-Bold, #0065fe, 2rem, start);
}

.login {
  @include function.typography(1rem, 400, GilroySemiBold, #ffffff, 0.75rem, center);
  background: #0065fe;
  padding: 0.75rem 1.5rem;
  border: 0.065rem solid transparent;
  border-radius: 0.25rem;
  transition: all 0.5s ease-in-out;
}

.login-and-escape-container {
  display: flex;
  gap: 1rem;
  align-items: center;
  padding: 0.5rem;
}
</style>
