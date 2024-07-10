<script setup lang="ts">
import FAQBlocks from './FAQBlocks.vue'
import { useTogglersStore } from 'root/stores/togglers'
const togglers = useTogglersStore()
</script>

<template>
  <section id="faq" :aria-haspopup="togglers.isAuthenticationOpen">
    <div class="faqs-container">
      <div class="faq-header-container">
        <div class="faq-header-line"><img src="../media/svg/line.svg" alt="line" /></div>
        <p class="faq-header">FAQs</p>
      </div>

      <div class="faq-blocks">
        <FAQBlocks
          question="How does URL shortening work?"
          answer="URL shortening works by taking a long URL and creating a shorter, condensed version that redirects to the original URL. When a user clicks on the shortened link, they are redirected to the intended destination."
        />

        <FAQBlocks
          question="Is it necessary to create an account to use the URL shortening service?"
          answer="Yes! As creating one unlocks a treasure trove of link-wrangling superpowers like crafting custom links,performance tracking of your links, and more. "
        />

        <FAQBlocks
          question=" What is a QR Code?"
          answer="Quick response or QR, is a type of barcode that can store a multitude of information. The obvious difference between a QR Code and Barcode is its appearance. A QR Code is usually in the shape of a square and contains smaller, even blocks similar to Tetris. A Barcode, on the other hand, has vertical bars in different thicknesses and is often accompanied by a serial number."
        />

        <FAQBlocks
          question="What can a QR Code do?"
          answer="Because of its versatility, a QR Code can be programmed to do a multitude of things. It can be split into two formats: Dynamic and Static. A Dynamic QR Code is useful for businesses or nonprofits in their marketing strategy because of its advantages. Though it needs a subscription to work, it is a small price to pay compared to the benefits it offers. Dynamic QR Code solutions are editable, which means if you made a mistake and only noticed it after the QR Codes are printed, you can easily log in to the dashboard and fix them without changing the appearance of the already printed Codes."
        />
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
@use '../scss/functions.scss' as function;

section {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 9.69rem;
}

section[aria-haspopup='true'] {
  filter: blur(0.3rem);
  pointer-events: none;
}

.faqs-container {
  max-width: 49.5rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4rem;
}

.faq-header-container {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
}

.faq-header-line {
  @include function.mediaContainers(3rem, 0.00625rem);
}

.faq-header {
  @include function.typography(2.5rem, 400, GilroyBold, #005ae2, 2rem, start);
}

.faq-blocks {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  width: 100%;
}
</style>
