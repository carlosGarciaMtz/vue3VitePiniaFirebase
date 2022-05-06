<template>
  <div>
    <h1>Register</h1>
    <button @click="userStore.setUserData('Carlos')">Register</button>
  </div>
</template>

<script setup>
import { useUserStore } from '../stores/users.js';
const userStore = useUserStore();

</script>

<style scoped>

</style>