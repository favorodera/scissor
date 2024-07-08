<script setup lang="ts">
import { useMenuTogglersStore } from '../stores/menu-togglers'
import { useAuthenticationStore } from '@/stores/authentication'
const authentication = useAuthenticationStore()
const menuTogglers = useMenuTogglersStore()
</script>

<template>
  <Transition name="user-menu" mode="out-in">
    <div class="user-menu" v-if="menuTogglers.isUserMenuOpen === true">
      <div class="user-info">
        <div class="user-image"><img :src="authentication.userImage" alt="user-image" /></div>

        <div class="user-details">
          <p class="username">{{ authentication.username }}</p>
          <p class="user-email">
            {{ authentication.userEmail }}
          </p>
        </div>
      </div>
      <button class="sign-out-button" @click="authentication.logOut">Sign Out</button>
    </div>
  </Transition>
</template>

<style scoped lang="scss">
@use '../scss/functions.scss' as function;

.user-menu {
  position: absolute;
  top: 5rem;
  right: 0rem;
  width: 100%;
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
  align-items: flex-start;
  justify-content: space-between;
  transition: opacity 0.5s ease-in-out;
  @include function.typography(1rem, 400, GilroySemiBold, #ffffff, 1.5rem, start);
}

.user-menu-enter-active,
.user-menu-leave-active {
  opacity: 1;
}

.user-menu-leave-to,
.user-menu-enter-from {
  opacity: 0;
}

.user-info {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 0.625rem;
  width: 100%;
  padding: 1rem;
  gap: 1rem;
  border-bottom: 0.065rem solid #353c4a40;
}

.user-image {
  @include function.mediaContainers(3.5rem, 3.5rem);
  border: 0.065rem solid #353c4a40;
  border-radius: 50%;

  img {
    width: 3.5rem;
    height: 3.5rem;
    border-radius: 50%;
  }
}

.user-details {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  overflow: hidden;
  gap: 0.25rem;
}

.username {
  @include function.typography(1rem, 400, GilroySemiBold, #ffffff, 1.25rem, start);
}

.user-email {
  @include function.typography(0.875rem, 400, GilroyMedium, #ffffffcc, 1.25rem, start);
}

.sign-out-button {
  @include function.typography(1rem, 400, GilroySemiBold, #ffffff, 0.75rem, center);
  background: #181e29;
  padding: 0.75rem 1.5rem;
  border: 0.065rem solid #353c4a;
  border-radius: 0.25rem;
  transition: all 0.5s ease-in-out;
  align-self: flex-end;
}

.sign-out-button:hover {
  background: transparent;
  border: 0.065rem solid #0065fe;
  color: #0065fe;
}
</style>
