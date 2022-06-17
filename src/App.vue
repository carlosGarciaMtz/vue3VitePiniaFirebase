<template>
    <router-view></router-view>
  <Footer />
</template>

<script setup>
import Footer from './components/Footer.vue';
import style from './assets/index.scss';

import { useEnvironmentStore } from './stores/environment.js';
import { onMounted } from 'vue';

const envStore = useEnvironmentStore();

onMounted(() => {
  if(import.meta.env.DEV || import.meta.env.MODE == "development") {
    envStore.setStage("test");
  }
  if (import.meta.env.PROD || import.meta.env.MODE == "production") {
    const env = JSON.parse(import.meta.env.VITE_APP_ENV)
    envStore.setEnv(env)
  }
});
</script>