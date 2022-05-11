<template>
  <div v-if="route.params.id === 'pocket'">
    <Pocket/>
  </div>
  <div v-else>
    <Flex/>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router';
import Pocket from '../components/Detail/Pocket.vue';
import Flex from '../components/Detail/Flex.vue';

const route = useRoute();

</script>