<template>
  <div>
    <h1>header</h1>
    <div>
    <router-link to="/">HOME</router-link> |
    <router-link to="/login">Login</router-link> |
    <router-link to="/register">Register</router-link> |
    <button @click="userStore.logout" :disabled="userStore.loader">Logout</button>
    </div>
  </div>
</template>

<script setup>
  import { useUserStore } from '../stores/users.js';
  const userStore = useUserStore();

</script>