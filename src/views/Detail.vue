<template>
  <Header :path="route.params.id === 'pocket'?'detail': 'detail-flex'"/>
  <div v-if="route.params.id === 'pocket'">
    <Pocket/>
  </div>
  <div v-else>
    <Flex/>
  </div>
  <Footer path="home"/>
</template>

<script setup>
import { useRoute } from 'vue-router';
import Pocket from '../components/Detail/Pocket.vue';
import Flex from '../components/Detail/Flex.vue';
import Footer from '../components/Footer.vue';
import Header from '../components/Header.vue';
import { onMounted } from 'vue';

const route = useRoute();

onMounted(()=>{
  document.title = 'izzi flex - Detalle ' + route.params.id;
  document.querySelector('body').removeAttribute('class');
  document.querySelector('body').classList.add('detail');
  document.querySelector('body').classList.add('pocket-detail');
})

</script>