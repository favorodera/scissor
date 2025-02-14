<script setup lang="ts">
import { ref } from 'vue'
// Receive props from the parent component
defineProps({
  // The question string
  question: {
    type: String,
    required: true
  },
  // The answer string
  answer: {
    type: String,
    required: true
  }
})

// Initialize a reactive variable to keep track of whether this FAQ block is open
const isOpen = ref(false)

// Define a function to toggle the open state of the FAQ block
const toggleAnswer = () => {
  // Toggle the open state by setting isOpen to the opposite of what it currently is
  isOpen.value = !isOpen.value
}
</script>

<template>
  <div class="faq-block" :class="{ active: isOpen }" @click="toggleAnswer">
    <div class="faq-question-container">
      <p class="faq-question">{{ question }}</p>

      <div class="plus-icon" v-if="!isOpen"><img src="../media/svg/plus.svg" alt="plus" /></div>
      <div class="minus-icon" v-if="isOpen"><img src="../media/svg/minus.svg" alt="minus" /></div>
    </div>
    <Transition name="fade" mode="out-in">
      <p class="faq-answer" v-if="isOpen">
        {{ answer }}
      </p>
    </Transition>
  </div>
</template>

<style scoped lang="scss">
@use '../scss/functions.scss' as function;

.faq-block {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding-bottom: 1rem;
  border-bottom: 0.065rem solid #005ae2;
  cursor: pointer;
}

.faq-question-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  gap: 1.5rem;
}

.faq-question {
  @include function.typography(1.25rem, 400, GilroyMedium, #005ae2, 2rem, start);
}

.plus-icon,
.minus-icon {
  @include function.mediaContainers(1.5rem, 1.5rem);
}

.faq-answer {
  @include function.typography(1rem, 400, GilroyMedium, #ffffff, 2rem, start);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease-out;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
