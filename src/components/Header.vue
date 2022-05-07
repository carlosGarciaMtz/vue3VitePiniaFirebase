<template>
  <div v-if="!userStore.loadingSessions">
    <router-link v-if="userStore.userData" to="/">HOME</router-link> |
    <router-link v-if="!userStore.userData" to="/login">Login</router-link> |
    <router-link v-if="!userStore.userData" to="/register">Register</router-link> |
    <button @click="userStore.logout" :disabled="userStore.loader">Logout</button>
  </div>
  <div v-else>
    <h1>Cargando sesion</h1>
  </div>
</template>

<script setup>
  import { useUserStore } from '../stores/users.js';
  const userStore = useUserStore();

</script>