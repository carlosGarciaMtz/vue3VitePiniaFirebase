<template>
  <router-view></router-view>
</template>

<script setup>
import { useEnvStore } from './stores/enviroment.js';
import { onMounted } from 'vue';

const ennvStore = useEnvStore();

onMounted(() => {
  console.log(import.meta.env)
  if(import.meta.env.DEV || import.meta.env.MODE == "development") {
    ennvStore.setEnv('dev');
  }
  if (import.meta.env.PROD || import.meta.env.MODE == "production") {
    ennvStore.setEnv('prod');
  }
});

</script>