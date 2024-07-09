<template>
  <div class="history-block">
    <div class="qr-code-and-action-container">
      <div class="qr-code"><img src="" alt="" /></div>
      <button class="delete-button">Delete</button>
    </div>
    <div class="other-history-block-details">
      <div class="long-url">
        <p class="long-url-header">Original:</p>
        <p>https://linkly.com/Bn41aCOlnxj</p>
      </div>
      <div class="short-url">
        <p class="short-url-header">Shortened:</p>
        <p>https://linkly.com/Bn41aCOlnxj</p>
      </div>
      <div class="time">
        <p class="time-header">Time:</p>
        <p>1 day ago</p>
      </div>
      <div class="clicks">
        <p class="clicks-header">Clicks:</p>
        <p>1</p>
      </div>
      <div class="status">
        <p class="status-header">Status:</p>
        <p>Active</p>
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

.history-block:last-child {
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

.long-url-header + p,
.short-url-header + p,
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
}
</style>
