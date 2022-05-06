<template>
  <div>
    <h1>Home</h1>
    <p>
      {{userStore.userData}}
    </p>
  </div>
</template>

<script setup>
import { useUserStore } from '../stores/users.js';

const userStore = useUserStore();

</script>

<style scoped>

</style>