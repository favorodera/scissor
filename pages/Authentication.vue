<script setup lang="ts">
import { useAuthenticationStore } from '../stores/authentication'
const authentication = useAuthenticationStore()
</script>

<template>
  <div class="authentication-container">
    <button class="authentication-button" @click="authentication.authenticate()">
      Continue with Google
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
  justify-content: center;
  gap: 10rem;
  background: #f9fbfd;
  width: 100%;
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
