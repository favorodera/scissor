<template>
  <div class="authentication-container">
    <button class="authentication-button">
      <div class="authentication-icon">
        <img src="../media/svg/google.svg" alt="Google" />
      </div>
      <div>
        <p class="authentication-text">Continue with Google</p>
      </div>
    </button>
  </div>
</template>

<style scoped lang="scss">
@use '../scss/functions.scss' as function;

.authentication-container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10rem;
  background: #f9fbfd;
  width: 100%;
}

.authentication-button {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding: 1.5rem;
  border: 0.065rem solid #141414af;
  border-radius: 0.5rem;
  transition: all 0.5s ease-in-out;
  background: transparent;
}

.authentication-button:hover {
  background: #3d3c3cf5;
  .authentication-text {
    color: #ffffff;
  }
}

.authentication-icon {
  @include function.mediaContainers(1.25rem, 1.25rem);
}

.authentication-text {
  @include function.typography(1.5rem, 400, GilroySemiBold, #141414, 1rem, center);
  transition: all 0.5s ease-in-out;
}
</style>
