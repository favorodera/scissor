<script setup lang="ts">
import Nav from '../components/NavSection.vue'
import Hero from '../components/HeroSection.vue'
import About from '../components/AboutSection.vue'
import FAQ from '../components/FAQSection.vue'
import CTA from '../components/CTASection.vue'
</script>

<template>
  <section class="hero-section">
    <Nav />
    <Hero />
  </section>
  <About />
  <FAQ />
  <CTA />
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
