<script setup lang="ts"></script>

<template>
  <section>
    <div class="history-header-panel">
      <p class="short-link-header">Short Link</p>
      <p class="original-link-header">Original Link</p>
      <p class="qr-code-header">QR Code</p>
      <p class="clicks-header">Clicks</p>
      <p class="status-header">Status</p>
      <p class="date-header">Date</p>
      <p class="action-header">Action</p>
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

  gap: 0.1875rem;
}

.history-header-panel {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #181e29;
  box-shadow: 0rem 0.25rem 0.625rem 0rem #00000026;
  backdrop-filter: blur(0.875rem);
  padding: 1.3125rem 1.57425rem 1.3125rem 1.5625rem;
  border-radius: 0.625rem 0.625rem 0rem 0rem;

  p {
    @include function.typography(0.9375rem, 400, GilroyExtraBold, #c9ced6, 0rem, start);
  }
}

.history-top-panel {
  background: #0d1117;
  box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(14px);
}
</style>
