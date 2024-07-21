<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { useShortenerStore } from 'root/stores/shortener'
import { useTogglersStore } from 'root/stores/togglers'
import HistoryBlock from './HistoryBlock.vue'
// Access the togglers store using the `useTogglersStore` hook.
// This store might contain state and methods related to UI toggle states (e.g., modals, dropdowns).
const togglers = useTogglersStore()

// Access the `fetchAnalytics` method from the shortener store using the `useShortenerStore` hook.
// This method is likely responsible for fetching analytics data, such as click counts or view statistics for shortened URLs.
const { fetchAnalytics } = useShortenerStore()

// Define the `historyRefresh` function, which is responsible for refreshing the analytics data and then reloading the page.
const historyRefresh = () => {
  // Call the `fetchAnalytics` method to update the analytics data.
  fetchAnalytics()

  // Reload the current page to reflect any updates.
  // This could be used to ensure the user sees the most up-to-date analytics after they are fetched.
  window.location.reload()
}
</script>

<template>
  <section :aria-haspopup="togglers.isUserMenuOpen">
    <div class="history-header-panel" :aria-haspopup="togglers.isUserMenuOpen">
      <div class="history-header-container">
        <div class="history-icon"><img src="../media/svg/clock.svg" alt="clock" /></div>
        <p class="history-header">History</p>
      </div>
      <button class="history-refresh" @click="historyRefresh">
        <img src="../media/svg/refresh.svg" alt="refresh" />
      </button>
    </div>
    <p class="download-instruction">Double click on QR code to download</p>
    <div class="history-blocks-container">
      <HistoryBlock />
    </div>
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
  gap: 1rem;
}

section[aria-haspopup='true'] {
  filter: blur(0.3rem);
  pointer-events: none;
}

.history-refresh {
  @include function.mediaContainers(0.9375rem, 0.9375rem);
  border: none;
  background: transparent;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease-in-out;
}

.history-header-panel {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #181e29;
  box-shadow: 0rem 0.25rem 0.625rem 0rem #00000026;
  padding: 1.3125rem 1.57425rem 1.3125rem 1.5625rem;
  border-radius: 0.625rem 0.625rem 0rem 0rem;
  transition: all 0.5s ease-in-out;
}

.history-header-container {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.625rem;
}

.history-icon {
  @include function.mediaContainers(0.9375rem, 0.9375rem);
}

.history-header {
  @include function.typography(0.9375rem, 400, GilroyBold, #c9ced6, 0rem, center);
}

.history-blocks-container {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(18.125rem, 1fr));
  gap: 1rem;
}

.download-instruction {
  @include function.typography(0.8rem, 400, GilroyBold, #4f9162, 0rem, center);
}
</style>
