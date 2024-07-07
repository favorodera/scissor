<script setup lang="ts">
import { useAuthenticationStore } from '../stores/authentication'
const authentication = useAuthenticationStore()
</script>

<template>
  <div class="authentication-container">
    <RouterLink to="/" rel="noopener noreferrer" class="logo-container">
      <div class="logo"><img src="../media/svg/scissor.svg" alt="logo" /></div>
      <div class="logo-line"></div>
      <p class="logo-text">SCISSOR</p>
    </RouterLink>

    <button class="authentication-button" @click="authentication.authenticate()">
      CONTINUE WITH GOOGLE
    </button>
  </div>
</template>

<style scoped lang="scss">
@use '../scss/functions.scss' as function;

.authentication-container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10rem;
  background: #ffffff;
  width: 100%;
}

.logo-container {
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0.5rem;
  gap: 0.5rem;
  justify-content: flex-start;
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

.authentication-button {
  @include function.typography(1.5rem, 400, GilroySemiBold, #141414, 2rem, center);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding: 1.5rem;
  border: 0.065rem solid #141414af;
  border-radius: 0.5rem;
  transition: all 0.5s ease-in-out;
  background: transparent;
}

.authentication-button:hover {
  background: #3d3c3cf5;
  color: #ffffff;
}
</style>
