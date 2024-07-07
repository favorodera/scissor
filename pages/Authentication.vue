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
  background: #0e131e;
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
  @include function.typography(1.5rem, 400, GilroySemiBold, transparent, 2rem, center);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding: 1.5rem;
  border: 0.065rem solid #005ae2;
  border-radius: 0.5rem;
  transition: all 0.5s ease-in-out 0.5s;
  background: linear-gradient(
    90deg,
    #144ee3 -0.02%,
    #eb568e 18.86%,
    #a353aa 64.49%,
    #144ee3 100.67%
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.authentication-button:hover {
  background: linear-gradient(
    90deg,
    #144ee3 -0.02%,
    #005ae2 18.86%,
    #a353aa 64.49%,
    #144ee3 100.67%
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
