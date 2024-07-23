<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { useDatabaseStore } from 'root/stores/database'
import router from 'root/router/router'
import { onBeforeMount } from 'vue'
import Form from '../components/Form.vue'
import History from '../components/History.vue'
import UserMenu from '../components/UserMenu.vue'
import { useTogglersStore } from '../stores/togglers'
import { auth } from '../ts/firebase-config'

// Create a reference to the useTogglersStore function
const togglers = useTogglersStore()

// Destructure the fetchUserData property from the useDatabaseStore function
const { fetchUserData } = useDatabaseStore()

// Call the onBeforeMount function to execute the provided callback function when the component is mounted
// The onBeforeMount function is useful for running code when the component is mounted onto the DOM.
// The callback function we provide will check if there is a 'userData' item in the localStorage.
// If there isn't, we redirect the user to the home page and return early to avoid running the rest of the callback function.
onBeforeMount(async () => {
  // Check if there is a 'userData' item in the localStorage
  // If the 'userData' item is null, this means that the user has not logged in yet and we need to redirect them to the home page
  if (localStorage.getItem('userData') === null) {
    await router.push('/')
    return
  }

  // Call the fetchUserData function with the parsedUserInfo.email as an argument
  // The fetchUserData function fetches the user data from the database based on the current user's email
  // The parsedUserInfo.email is obtained from the 'userData' item in the localStorage
  await fetchUserData(parsedUserInfo.email as string)
})

// Check if there is a 'userData' item in the localStorage
// If there is, parse the JSON string and retrieve the userInfo property
// If there isn't, set parsedUserInfo to an empty array
const parsedUserInfo = localStorage.getItem('userData')
  ? JSON.parse(localStorage.getItem('userData') as string).userInfo
  : []
</script>

<template>
  <section class="dashboard">
    <nav :aria-haspopup="togglers.isUserMenuOpen">
      <RouterLink to="/" class="back"> Back</RouterLink>
      <div class="user" @click="togglers.toggleUserMenu">
        <div class="user-text-container">
          <p class="welcome-text">Welcome</p>
          <p class="username">
            {{ auth.currentUser?.displayName?.split(' ')[0] || parsedUserInfo.name.split(' ')[0] }}
          </p>
        </div>
        <div class="menu-state-icon">
          <Transition name="menu-state-icon" mode="out-in">
            <img
              src="../media/svg/down.svg"
              alt="down-arrow"
              v-if="togglers.isUserMenuOpen === false"
            />
            <img src="../media/svg/minus-user-menu.svg" alt="minus" v-else />
          </Transition>
        </div>
      </div>
    </nav>
    <UserMenu />

    <main :aria-haspopup="togglers.isUserMenuOpen">
      <Form />
      <History />
    </main>
  </section>
</template>

<style scoped lang="scss">
@use '../scss/functions.scss' as function;

.dashboard {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  gap: 5rem;
}

main[aria-haspopup='true'] {
  filter: blur(0.3rem);
  pointer-events: none;
}

nav[aria-haspopup='true'] {
  .back {
    filter: blur(0.3rem);
    pointer-events: none;
  }
}

nav {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.back {
  @include function.typography(1.25rem, 400, GilroySemiBold, #ffffff, 1.125rem, center);
  transition: all 0.5s ease-in-out;
}

.back:hover {
  color: #0065fe;
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
  cursor: pointer;
  transition: all 0.5s ease-in-out;
}

.user:hover {
  border: 0.0625rem solid #0065fe;
  background: #353c4a8f;
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

.menu-state-icon {
  @include function.mediaContainers(1.5rem, 1.5rem);
}

.menu-state-icon-enter-active,
.menu-state-icon-leave-active {
  transition: opacity 0.5s ease-in-out;
}

.menu-state-icon-leave-to,
.menu-state-icon-enter-from {
  opacity: 0;
}

main {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2.81rem;
  transition: all 0.5s ease-in-out;
}
</style>
