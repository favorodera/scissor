<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { useShortenerStore } from 'root/stores/shortener'
const shortener = useShortenerStore()
let longUrl = ''
let alias = ''
</script>

<template>
  <form action="" method="get">
    <div class="long-url-container">
      <label for="long-url">Long URL</label>
      <input
        type="url"
        name="long-url"
        id="long-url"
        placeholder="Enter Long URL"
        class="long-url-input"
        v-model="longUrl"
      />
    </div>
    <div class="domain-container">
      <label for="domain">Domain</label>
      <input
        type="url"
        name="domain"
        id="domain"
        placeholder="Enter Domain"
        class="domain-input"
        value="https://linkdom.co"
        readonly
      />
    </div>
    <div class="alias-container">
      <label for="alias">Alias</label>
      <input
        type="text"
        name="alias"
        id="alias"
        placeholder="Enter Alias"
        class="alias-input"
        v-model="alias"
      />
    </div>

    <button type="submit" @click.prevent="shortener.generateLink(longUrl, alias)">Shorten</button>
  </form>
  <p
    class="fetch-state"
    :style="{
      color:
        shortener.fetchState === 'URL Generated Successfully... Refreshing Page...'
          ? '#4f9162'
          : shortener.fetchState === 'Awaiting Long URL...'
            ? '#b79a42'
            : shortener.fetchState === 'Generating URL... Please wait...'
              ? '#7078f9'
              : '#d73726'
    }"
  >
    {{ shortener.fetchState }}
  </p>
</template>

<style scoped lang="scss">
@use '../scss/functions.scss' as function;

form {
  max-width: 45rem;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 1rem;
}

.fetch-state {
  @include function.typography(0.8rem, 400, GilroyBold, #ffffffcc, 1.75rem, center);
  letter-spacing: 0.125rem;
}

.long-url-container,
.domain-container,
.alias-container {
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 45rem;
  border-radius: 1rem;
  position: relative;
}

input {
  @include function.typography(1rem, 400, GilroyBold, #c9ced6, 1.75rem, start);
  width: 100%;
  max-width: 45rem;
  border-radius: 1rem;
  padding: 1.3125rem 1.57425rem 1.3125rem 1.5625rem;
  border: 0.065rem solid #353c4a;
  background: #181e29;
  box-shadow: 0rem 0.25rem 0.625rem 0rem #0000001a;
}

label {
  @include function.typography(0.8rem, 400, GilroyBold, #ffffffcc, 1.75rem, start);
  position: absolute;
  top: -19%;
  left: 1.5rem;
  z-index: 1;
  letter-spacing: 0.125rem;
}

input::placeholder {
  @include function.typography(1rem, 400, GilroyBold, #c9ced6, 1.75rem, start);
}

.long-url-container {
  flex: 0 0 100%;
}

.domain-container,
.alias-container {
  flex: 1 0 18rem;
}

button {
  @include function.typography(1.5rem, 400, GilroySemiBold, #c9ced6, 1.75rem, center);
  width: 100%;
  max-width: 11rem;
  border-radius: 1rem;
  padding: 1rem;
  border: 0.065rem solid #353c4a;
  background: #181e29;
  box-shadow: 0rem 0.25rem 0.625rem 0rem #0000001a;
  cursor: pointer;
  transition: all 0.5s ease-in-out;
}

button:hover {
  border: 0.065rem solid #0065fe;
  background: #353c4a8f;
}
</style>
