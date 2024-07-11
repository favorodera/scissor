<script setup lang="ts">
import { useAuthenticationStore } from '../stores/authentication'
const authentication = useAuthenticationStore()
import { useTogglersStore } from '../stores/togglers'
const togglers = useTogglersStore()
</script>

<template>
  <Transition name="authentication" mode="out-in">
    <div class="authentication-container" v-if="togglers.isAuthenticationPopupOpen === true">
      <button class="close-btn" @click="togglers.toggleAuthenticationPopup()">
        <img src="../media/svg/escape-white.svg" alt=" escape" />
      </button>
      <button class="authentication-button" @click="authentication.signIn()">
        SignUp or Login with Google
      </button>
    </div>
  </Transition>
</template>

<style scoped lang="scss">
@use '../scss/functions.scss' as function;

.authentication-container {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: calc(100% - 0.7rem);
  max-width: 30rem;
  box-shadow: 0rem 0.25rem 0.325rem 0rem rgba(0, 0, 0, 0.1);
  height: 15rem;
  border: 0.0625rem solid #353c4a;
  background: #181e29;
  z-index: 1;
  display: flex;
  border-radius: 1rem;
  flex-direction: column;
  padding: 0.75rem;
  align-items: center;
  justify-content: center;
  transition: opacity 0.5s ease-in-out;
  @include function.typography(1rem, 400, GilroySemiBold, #ffffff, 1.5rem, start);
}

.authentication-enter-active,
.authentication-leave-active {
  opacity: 1;
}

.authentication-leave-to,
.authentication-enter-from {
  opacity: 0;
}

.authentication-button {
  @include function.typography(1rem, 400, GilroySemiBold, #ffffff, 0.75rem, center);
  background: #181e29;
  padding: 0.75rem 1.5rem;
  border: 0.065rem solid #353c4a;
  border-radius: 0.25rem;
  transition: all 0.5s ease-in-out;
}

.authentication-button:hover {
  background: transparent;
  border: 0.065rem solid #0065fe;
  color: #0065fe;
}

.close-btn {
  position: absolute;
  top: 2%;
  right: 2%;
  @include function.mediaContainers(2rem, 2rem);
  background: transparent;
  border: none;
}
</style>
