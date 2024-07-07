<template>
  <section>
    <div class="CTA-container">
      <p class="CTA-text">Revolutionizing Link Optimization!</p>
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
  @include function.typography(2.5rem, 400, GilroyBold, transparent, 3rem, center);
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
