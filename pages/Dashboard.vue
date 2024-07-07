<script setup lang="ts">
import { useAuthenticationStore } from '../stores/authentication'
const authentication = useAuthenticationStore()
</script>

<template>
  Logged in
  <button @click="authentication.logout()">
    <RouterLink to="/authentication">Logout</RouterLink>
  </button>
</template>
