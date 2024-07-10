<script setup lang="ts">
import HistoryBlock from './HistoryBlock.vue'
import { useTogglersStore } from 'root/stores/togglers'
const togglers = useTogglersStore()
</script>

<template>
  <section :aria-haspopup="togglers.isUserMenuOpen">
    <div class="history-header-panel" :aria-haspopup="togglers.isUserMenuOpen">
      <div class="history-header-container">
        <div class="history-icon"><img src="../media/svg/clock.svg" alt="clock" /></div>
        <p class="history-header">History</p>
      </div>
    </div>
    <div class="history-blocks-container">
      <HistoryBlock />
      <HistoryBlock />
      <HistoryBlock />
      <HistoryBlock />
      <HistoryBlock />
      <HistoryBlock />
      <HistoryBlock />
      <HistoryBlock />
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

.history-header-panel {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
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
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}
</style>
