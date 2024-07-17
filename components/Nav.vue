<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import { RouterLink } from 'vue-router'
import { useTogglersStore } from '../stores/togglers'
const togglers = useTogglersStore()

const windowWidth = ref(window.innerWidth)

const windowResize = () => {
  windowWidth.value = window.innerWidth
}

onMounted(() => {
  window.addEventListener('resize', windowResize)
})

onUnmounted(() => {
  window.removeEventListener('resize', windowResize)
})
</script>

<template>
  <nav :aria-haspopup="togglers.isAuthenticationPopupOpen">
    <RouterLink to="/" class="logo-container">
      <div class="logo"><img src="../media/svg/scissor.svg" alt="logo" /></div>
      <div class="logo-line"></div>
      <p class="logo-text">SCISSOR</p>
    </RouterLink>

    <ul class="nav-urls" v-if="windowWidth >= 600">
      <li><a href="#about">Features</a></li>
      <li><a href="#faq">FAQs</a></li>
    </ul>

    <button @click="togglers.toggleAuthenticationPopup()" class="login" v-if="windowWidth >= 600">
      Login
    </button>

    <div class="hamburger" v-if="windowWidth < 600" @click="togglers.toggleMobileNav()">
      <div class="line"></div>
      <div class="line"></div>
      <div class="line"></div>
    </div>
  </nav>
</template>

<style scoped lang="scss">
@use '../scss/functions.scss' as function;

nav {
  width: 100%;
  max-width: 71.875rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

nav[aria-haspopup='true'] {
  filter: blur(0.3rem);
  pointer-events: none;
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
  @include function.typography(1.5rem, 400, GilroyBold, #0065fe, 1.5rem, start);
}

.nav-urls {
  display: flex;
  gap: 5rem;
  list-style-type: none;

  li {
    display: flex;
    align-items: center;
    justify-content: center;

    a {
      @include function.typography(1.125rem, 400, GilroyMedium, #ffffff, normal, start);
      text-decoration: none;
      transition: all 0.5s ease-in-out;
    }

    a:hover {
      color: #0065fe;
    }
  }
}

.login {
  @include function.typography(1rem, 400, GilroySemiBold, #ffffff, 0.75rem, center);
  background: #0065fe;
  padding: 0.75rem 1.5rem;
  border: 0.065rem solid transparent;
  border-radius: 0.25rem;
  transition: all 0.5s ease-in-out;
}

.login:hover {
  background: transparent;
  border: 0.065rem solid #0065fe;
  color: #0065fe;
}

.hamburger {
  cursor: pointer;
}

.line {
  width: 1.5rem;
  height: 0.125rem;
  background: #0065fe;
  margin: 0.25rem 0;
}
</style>
