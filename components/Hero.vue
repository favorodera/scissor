<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'

const windowWidth = ref(window.innerWidth)

const windowResize = () => {
  windowWidth.value = window.innerWidth
}

onMounted(() => {
  window.addEventListener('resize', windowResize)
})

onUnmounted(() => {
  window.removeEventListener('resize', windowResize)
})
</script>

<template>
  <div class="intro">
    <div class="intro-text-container">
      <p class="intro-text">
        Optimize Your Online Experience with Our Advanced URL Shortening Solution
      </p>
      <p class="intro-description">
        Personalize your shortened URLs to align with your brand identity. Utilize custom slugs,
        branded links, and domain customization options to reinforce your brand presence and enhance
        user engagement.
      </p>
    </div>
    <div class="intro-cta-container">
      <RouterLink to="/authentication" class="intro-cta-button">Get Started</RouterLink>
      <a href="#about" class="intro-cta-text">Learn More</a>
    </div>
  </div>

  <div class="hero-visuals-container">
    <div class="hero-visual-image">
      <div class="coupled-links">
        <div class="link"><img src="../media/svg/link.svg" alt="link" /></div>
        <div class="link"><img src="../media/svg/link.svg" alt="link" /></div>
        <div class="link" v-if="windowWidth >= 450">
          <img src="../media/svg/link.svg" alt="link" />
        </div>
      </div>
      <div class="arrow"><img src="../media/svg/arrow.svg" alt="arrow" /></div>
      <div class="link"><img src="../media/svg/link.svg" alt="link" /></div>
    </div>
    <p class="hero-visual-text">
      Seamlessly transform your long <span class="hero-visual-text-highlight">URLs</span> into
      <span class="hero-visual-text-highlight">concise</span> and
      <span class="hero-visual-text-highlight">shareable</span> links with just few clicks.
    </p>
  </div>
</template>

<style scoped lang="scss">
@use '../scss/functions' as function;

.intro {
  max-width: 59.2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  margin-top: 6.62rem;
}

.intro-text-container {
  max-width: 59.25rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
}

.intro-text {
  @include function.typography(3rem, 400, GilroyBold, transparent, 6rem, center);
  background: linear-gradient(
    90deg,
    #144ee3 -0.02%,
    #eb568e 18.86%,
    #a353aa 64.49%,
    #144ee3 100.67%
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.intro-description {
  @include function.typography(1.125rem, 400, GilroyMedium, #ffffff, 1.75rem, center);
  max-width: 48.8125rem;
}

.intro-cta-container {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3.5rem;
}

.intro-cta-button {
  @include function.typography(1rem, 400, GilroySemiBold, #ffffff, 0.75rem, center);
  background: #0065fe;
  padding: 0.75rem 1.5rem;
  border: 0.065rem solid transparent;
  border-radius: 0.25rem;
  transition: all 0.5s ease-in-out;
}

.intro-cta-button:hover {
  background: transparent;
  border: 0.065rem solid #0065fe;
  color: #0065fe;
}

.intro-cta-text {
  @include function.typography(1rem, 400, GilroySemiBold, #ffffff, 0.75rem, center);
  text-decoration: none;
  transition: all 0.5s ease-in-out;
}

.intro-cta-text:hover {
  color: #005ae2;
}

.hero-visuals-container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin-top: 5rem;
  gap: 1rem;
  padding: 0.25rem;
  border-radius: 1.5rem;
  border: 0.03125rem solid #005ae2;
  max-width: 48rem;
  flex: 1 1 auto;
}

.hero-visual-image {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.125rem;
}

.coupled-links {
  display: flex;
  align-items: center;
  justify-content: center;

  :nth-child(2),
  :nth-child(3) {
    margin-left: -0.5rem;
  }
}

.link {
  @include function.mediaContainers(5rem, 5rem);
}

.arrow {
  @include function.mediaContainers(0rem, 2.5rem);
}

.hero-visual-text {
  align-self: center;
  width: 95%;
  @include function.typography(1rem, 400, GilroyMedium, #ffffff, 1.5rem, center);

  .hero-visual-text-highlight {
    @include function.typography(1rem, 400, GilroySemiBold, transparent, 1.5rem, center);
    background: linear-gradient(
      90deg,
      #144ee3 -0.02%,
      #eb568e 18.86%,
      #a353aa 64.49%,
      #144ee3 100.67%
    );
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
}
</style>
