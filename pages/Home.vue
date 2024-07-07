<script setup lang="ts">
import Nav from '../components/Nav.vue'
import Hero from '../components/Hero.vue'
import About from '../components/About.vue'
import FAQ from '../components/FAQ.vue'
import CTA from '../components/CTA.vue'
import MobileNav from '../components/MobileNav.vue'
import Footer from '../components/Footer.vue'
</script>

<template>
  <section class="hero-section">
    <Nav />
    <MobileNav />
    <Hero />
  </section>
  <About />
  <FAQ />
  <CTA />
  <Footer />
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
