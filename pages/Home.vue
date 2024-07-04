<script setup lang="ts">
import Nav from '../components/Nav.vue'
import Hero from '../components/Hero.vue'
import About from '../components/About.vue'
</script>

<template>
  <section class="hero-section">
    <Nav />
    <Hero />
    <About />
  </section>
</template>

<style scoped lang="scss">
.hero-section {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
