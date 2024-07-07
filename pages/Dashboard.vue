<script setup lang="ts">
import { useAuthenticationStore } from '../stores/authentication'
const authentication = useAuthenticationStore()
import { useMenuTogglersStore } from '../stores/menu-togglers'
const menuTogglers = useMenuTogglersStore()
</script>

<template>
  <section>
    <nav>
      <div class="user">
        <div class="user-text-container">
          <p class="welcome-text">Welcome</p>
          <p class="username">{{ authentication.username }}</p>
        </div>
        <button class="toggle-user-profile" @click="menuTogglers.toggleUserMenu">
          <img src="../media/svg/down.svg" alt="down-arrow" />
        </button>
      </div>
    </nav>

    <Transition name="user-menu" mode="out-in">
      <div class="user-menu" v-if="menuTogglers.isUserMenuOpen === true"></div>
    </Transition>
  </section>
</template>

<style scoped lang="scss">
@use '../scss/functions.scss' as function;

section {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
}

nav {
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 1.5rem 0rem;
}

.user {
  min-width: 11.9375rem;
  max-width: 18.75rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.62rem;
  padding: 1.3125rem 1.57425rem 1.2rem 1.5625rem;
  border-radius: 1rem;
  border: 0.0625rem solid #353c4a;
  background: #181e29;
  box-shadow: 0rem 0.25rem 0.325rem 0rem rgba(0, 0, 0, 0.1);
}

.user-text-container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: -0.0625rem;
  overflow: hidden;
}

.welcome-text {
  @include function.typography(0.625rem, 400, GilroySemiBold, #ffffff, 1.125rem, center);
}

.username {
  @include function.typography(1.25rem, 400, GilroyBold, #ffffff, 1.125rem, center);
}

.toggle-user-profile {
  @include function.mediaContainers(1.5rem, 1.5rem);
  background: transparent;
  border: none;
}

.user-menu {
  position: absolute;
  top: 8rem;
  right: 0rem;
  width: 18.75rem;
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
</style>
