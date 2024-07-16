<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { useTogglersStore } from 'root/stores/togglers'
const togglers = useTogglersStore()
</script>

<template>
  <section id="about" :aria-haspopup="togglers.isAuthenticationPopupOpen">
    <div class="stats-container">
      <p class="stats-heading">
        One Stop, <br />Four <span class="stats-heading-highlight">Possibilities</span>.
      </p>
      <div class="stats">
        <div class="stat-box-container" id="stat-box-container1">
          <div class="stat-box">
            <p class="stat-number">12M</p>
            <p class="stat-text">Active Users</p>
          </div>
          <div class="stat-box">
            <p class="stat-number">60M</p>
            <p class="stat-text">Links & QR codes created</p>
          </div>
        </div>

        <div class="stat-box-container">
          <div class="stat-box">
            <p class="stat-number">1B</p>
            <p class="stat-text">Clicked & Scanned connections</p>
          </div>
          <div class="stat-box">
            <p class="stat-number">300K</p>
            <p class="stat-text">App Integrations</p>
          </div>
        </div>
      </div>
    </div>
    <div class="about-container">
      <div class="why-choose-container">
        <div class="why-choose-heading-container">
          <div class="why-choose-heading-line"><img src="../media/svg/line.svg" alt="line" /></div>
          <p class="why-choose-heading">
            Why Choose <span class="why-choose-heading-highlight">Scissor</span>
          </p>
        </div>
        <p class="why-choose-text">
          Scissor is the hub of everything that has to do with your link management. We shorten your
          URLs, allow you creating custom ones for your personal, business, event usage. Our swift
          QR code creation, management and usage tracking with advance analytics for all of these is
          second to none.
        </p>
      </div>

      <div class="features-container">
        <div class="features-box-container">
          <div class="feature-box">
            <div class="feature-box-icon"><img src="../media/svg/about-link.svg" alt="link" /></div>
            <div class="feature-box-text-container">
              <p class="feature-box-text-header">URL Shortening</p>
              <p class="feature-box-text">
                Scissor allows you to shorten URLs of your business, events. Shorten your URL at
                scale, URL redirects.
              </p>
            </div>
          </div>

          <div class="feature-box">
            <div class="feature-box-icon"><img src="../media/svg/edit.svg" alt="link" /></div>
            <div class="feature-box-text-container">
              <p class="feature-box-text-header">Custom URLs</p>
              <p class="feature-box-text">
                With Scissor, you can create custom URLs, with the length you want! A solution for
                socials and businesses.
              </p>
            </div>
          </div>
        </div>

        <div class="features-box-container">
          <div class="feature-box">
            <div class="feature-box-icon"><img src="../media/svg/grid.svg" alt="link" /></div>
            <div class="feature-box-text-container">
              <p class="feature-box-text-header">QR Codes</p>
              <p class="feature-box-text">
                Generate QR codes to your business, events. Bring your audience and customers to
                your doorstep with this scan and go solution.
              </p>
            </div>
          </div>

          <div class="feature-box">
            <div class="feature-box-icon"><img src="../media/svg/activity.svg" alt="link" /></div>
            <div class="feature-box-text-container">
              <p class="feature-box-text-header">Data Analytics</p>
              <p class="feature-box-text">
                Receive data on the usage of either your shortened URL, custom URLs or generated QR
                codes. Embedded to monitor progress.
              </p>
            </div>
          </div>
        </div>
      </div>
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
  gap: 8rem;
  padding-bottom: 8.12rem;
  margin-top: 5.8125rem;
}

section[aria-haspopup='true'] {
  filter: blur(0.3rem);
  pointer-events: none;
}
.stats-container {
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: space-around;
  gap: 2rem;
  width: 100%;
  flex-wrap: wrap;
}

.stats-heading {
  max-width: 21.0625rem;
  @include function.typography(2.5rem, 400, GilroyBold, #ffffff, 3rem, start);
}
.stats-heading-highlight {
  @include function.typography(2.5rem, 400, GilroyBold, #005ae2, 3rem, start);
}
.stats {
  display: flex;
  align-items: baseline;
  justify-content: space-around;
  align-content: center;
  gap: 2rem;
  max-width: 44.3125rem;
  width: 100%;
  flex-wrap: wrap;
  flex: 1 1 100%;
}

.stat-box-container {
  display: flex;
  width: max-content;
  justify-content: space-between;
  align-items: flex-start;
  gap: 2rem;
}

#stat-box-container1 {
  min-width: 18.5rem;
}

.stat-box {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  max-width: 8.9375rem;
  flex: 1 1 100%;
}

.stat-number {
  @include function.typography(2rem, 400, GilroySemiBold, #005ae2, 2.5rem, start);
}

.stat-text {
  @include function.typography(1rem, 400, GilroyMedium, #ffffff, 1.5rem, start);
}

.about-container {
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 2rem;
  width: 100%;
}

.why-choose-container {
  display: flex;
  align-self: flex-start;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 1rem;
  width: 100%;
  flex: 1 1 18.75rem;
}

.why-choose-heading-container {
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: center;
}

.why-choose-heading-line {
  @include function.mediaContainers(3rem, 0.00625rem);
}

.why-choose-heading {
  @include function.typography(2.5rem, 400, GilroyBold, #ffffff, 2rem, start);
}
.why-choose-heading-highlight {
  @include function.typography(2.5rem, 400, GilroyBold, #005ae2, 2rem, start);
}
.why-choose-text {
  @include function.typography(1rem, 400, GilroyMedium, #ffffff, 1.75rem, start);
}

.features-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  max-width: 44.25rem;
  flex: 1 1 18.5rem;
}

.features-box-container {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 2rem;
  max-width: 100%;
  flex: 1 1 18.5rem;
}

.feature-box {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 2.5rem;
  max-width: 21.25rem;
  flex: 1 1 18.5rem;
}

.feature-box-icon {
  @include function.mediaContainers(3.5rem, 3.5rem);
  border-radius: 100%;
  background: #3284ff21;
}

.feature-box-text-container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 1rem;
  width: 100%;
}

.feature-box-text-header {
  @include function.typography(2rem, 400, GilroySemiBold, #005ae2, 1.75rem, start);
}

.feature-box-text {
  @include function.typography(1rem, 400, GilroyMedium, #ffffff, 1.5rem, start);
}
</style>
