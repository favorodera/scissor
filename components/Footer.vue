<template>
  <footer>
    <div class="logo-container">
      <div class="logo"><img src="../media/svg/scissor-black.svg" alt="logo" /></div>
      <div class="logo-line"></div>
      <p class="logo-text">SCISSOR</p>
    </div>
    <a href="https://www.github.com/favorodera/scissor" target="_blank" rel="noopener noreferrer"
      >favorodera</a
    >
  </footer>
</template>

<style scoped lang="scss">
@use '../scss/functions.scss' as function;

footer {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #ffffff;
  padding-top: 5.94rem;
}

.logo-container {
  display: flex;
  align-items: center;
  padding: 0.5rem;
  gap: 0.5rem;
  justify-content: center;
}

.logo {
  @include function.mediaContainers(1.5rem, 1.5rem);
}

.logo-line {
  width: 0.125rem;
  height: 1.5rem;
  background: #141414;
}

.logo-text {
  @include function.typography(1.5rem, 400, GilroyBold, #141414, 2rem, start);
}

a {
  text-decoration: none;
  @include function.typography(1.5rem, 400, GilroyMedium, #141414, 2rem, center);
  transition: all 0.5s ease-in-out;
}

a:hover {
  color: #0065fe;
}
</style>
