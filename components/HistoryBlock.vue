<script setup lang="ts">
const parsedLinks = localStorage.getItem('userData')
  ? JSON.parse(localStorage.getItem('userData') as string).linksInfo
  : []
</script>

<template>
  <div class="history-block" v-for="link in parsedLinks" :key="link.linkId">
    <div class="qr-code-and-action-container">
      <div class="qr-code">
        <img :src="'data:image/png;base64,' + link.qrCode" alt="qr-code" />
      </div>
      <button class="delete-button">Delete</button>
    </div>
    <div class="other-history-block-details">
      <div class="long-url">
        <p class="long-url-header">Original:</p>
        <a :href="link.longUrl" target="_blank" rel="noopener noreferrer">{{ link.longUrl }}</a>
      </div>
      <div class="short-url">
        <p class="short-url-header">Shortened:</p>
        <a :href="link.shortUrl" target="_blank" rel="noopener noreferrer">{{ link.shortUrl }}</a>
      </div>
      <div class="time">
        <p class="time-header">Created:</p>
        <p>{{ link.timeCreated }}</p>
      </div>
      <div class="clicks">
        <p class="clicks-header">Clicks:</p>
        <p>{{ link.clicks }}</p>
      </div>
      <div class="status">
        <p class="status-header">Status:</p>
        <p>{{ link.status }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use '../scss/functions.scss' as function;

.history-block {
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  background: #181e29;
  padding: 0.5rem;
  border-radius: 1rem;
  flex: 1 1 28.8333rem;
}

.qr-code-and-action-container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 0.5rem;
}

.qr-code {
  @include function.mediaContainers(5rem, 5rem);
  border-radius: 0.25rem;
  background: #000000;

  img {
    max-width: 5rem;
    max-height: 5rem;
    border-radius: 0.25rem;
  }
}

.delete-button {
  @include function.typography(0.75rem, 400, GilroyMedium, #ffffff, 0rem, center);
  background: transparent;
  padding: 0.6rem;
  border: 0.065rem solid #54617c;
  border-radius: 0.35rem;
}

.delete-button:hover {
  background: #54617c;
}

.other-history-block-details {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  flex: 1 1 auto;
}

.long-url,
.short-url,
.time,
.clicks,
.status {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.long-url-header,
.short-url-header,
.time-header,
.clicks-header,
.status-header {
  @include function.typography(1rem, 400, GilroyBold, #ffffff3a, 1rem, start);
  min-width: 5rem;
}

.long-url-header + a,
.short-url-header + a,
.time-header + p,
.clicks-header + p,
.status-header + p {
  @include function.typography(0.875rem, 400, GilroyBold, #c9ced6, 1rem, start);
  overflow: hidden;
  height: 1rem;
  width: 6rem;
  text-overflow: ellipsis;
  white-space: nowrap;
  flex: 1 1 max-content;
  transition: all 0.5s ease-in-out;
}

.long-url-header + a:hover,
.short-url-header + a:hover {
  color: #0065fe;
}
</style>
