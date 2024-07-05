<template>
  <section>
    <div class="CTA-container">
      <p class="CTA-text">Revolutionizing Link Optimization</p>
      <RouterLink to="/authentication" class="CTA-button">Get Started</RouterLink>
    </div>
  </section>
</template>

<style scoped lang="scss">
@use '../scss/functions.scss' as function;

section {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(180deg, #1e3448 99.99%, rgba(30, 52, 72, 0) 100%);
  height: 18.69rem;
  border-radius: 1rem;
}

.CTA-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
}
.CTA-text {
  @include function.typography(2.5rem, 400, GilroyBold, #ffffff, 3rem, center);
}

.CTA-button {
  @include function.typography(1rem, 400, GilroySemiBold, #ffffff, 0.75rem, center);
  background: #0065fe;
  padding: 0.75rem 1.5rem;
  border: 0.065rem solid transparent;
  border-radius: 0.25rem;
}

.CTA-button:hover {
  background: transparent;
  border: 0.065rem solid #0065fe;
  color: #0065fe;
}
</style>
