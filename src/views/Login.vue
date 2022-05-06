<template>
  <div>
    <h1>Login</h1>
    <p>{{mayuscula}}</p>
    <p>{{userStore.minuscula}}</p>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useUserStore } from '../stores/users.js';

const userStore = useUserStore();

const mayuscula = computed(()=> userStore.userData.toLocaleUpperCase() );

</script>

<style scoped>

</style>