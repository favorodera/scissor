<template>
  <div class="intro">
    <div class="intro-text-container">
      <p class="intro-text">
        Optimize Your Online Experience with Our Advanced
        <span class="highlight"> URL Shortening </span> Solution
      </p>
      <p class="intro-description">
        Personalize your shortened URLs to align with your brand identity. Utilize custom slugs,
        branded links, and domain customization options to reinforce your brand presence and enhance
        user engagement.
      </p>
    </div>
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
  @include function.typography(3rem, 400, GilroyBold, #141414, 6rem, center);
}

.highlight {
  @include function.typography(3rem, 400, GilroyBold, #005ae2, 6rem, center);
}

.intro-description {
  @include function.typography(1.125rem, 400, GilroyMedium, #141414, 1.75rem, center);
  max-width: 48.8125rem;
}
</style>
