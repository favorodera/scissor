<script setup lang="ts">
import About from '../components/About.vue'
import Authentication from '../components/Authentication.vue'
import CTA from '../components/CTA.vue'
import FAQ from '../components/FAQ.vue'
import Footer from '../components/Footer.vue'
import Hero from '../components/Hero.vue'
import MobileNav from '../components/MobileNav.vue'
import Nav from '../components/Nav.vue'
</script>

<template>
  <section>
    <Nav />
    <MobileNav />
    <Hero />
    <About />
    <FAQ />
    <CTA />
    <Footer />
    <Authentication />
  </section>
</template>

<style scoped lang="scss">
section {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
