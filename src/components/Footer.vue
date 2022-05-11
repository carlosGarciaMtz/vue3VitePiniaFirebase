<template>
  <White v-if="path === 'white'"/>
  <Landing v-else-if="path === 'landing'"/>
  <Dark v-else-if="path === 'dark'"/>
</template>

<script setup>
  import Dark from './Footer/Dark.vue';
  import White from './Footer/White.vue';
  import Landing from './Footer/Landing.vue';
  const props = defineProps({
    path: {
      type: String,
      default: 'dark'}
  });
</script>