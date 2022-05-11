<template>
  <Header path="fq"/>
</template>

<script setup>
import { onMounted } from 'vue';
import Header from '../components/Header.vue';

onMounted(()=>{
  document.title = 'izzi flex - Preguntas frecuentes'
  document.querySelector('body').removeAttribute('class');
  document.querySelector('body').classList.add('detail');
});
</script>