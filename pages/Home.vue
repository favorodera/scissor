<script setup lang="ts">
import Nav from '../components/Nav.vue'
import Hero from '../components/Hero.vue'
import About from '../components/About.vue'
import FAQ from '../components/FAQ.vue'
import CTA from '../components/CTA.vue'
import MobileNav from '../components/MobileNav.vue'
import Footer from '../components/Footer.vue'
import Authentication from '../components/Authentication.vue'
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
