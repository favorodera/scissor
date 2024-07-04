<script setup lang="ts"></script>

<template>
  <section>
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

.stats-container {
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
  gap: 2rem;
  background: #f9fbfd;
  width: 100%;
  flex-wrap: wrap;
}

.stats-heading {
  max-width: 21.0625rem;
  @include function.typography(2.5rem, 400, GilroyBold, #141414, 3rem, start);
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
  flex: 1 0 0;
}

.stat-box-container {
  display: flex;
  width: max-content;
  justify-content: space-around;
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
  @include function.typography(2rem, 400, GilroySemiBold, #141414, 2.5rem, start);
}

.stat-text {
  @include function.typography(1rem, 400, GilroyMedium, #141414, 1.5rem, start);
}
</style>
