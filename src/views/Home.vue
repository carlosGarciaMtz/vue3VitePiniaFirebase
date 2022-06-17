<template>
  <Header />
  <main>
    <div v-if="carrusel.length>0" class="pure-g justify-content-center">
      <div class="pure-u-1-2 text-center">
        <Carrousel 
          :images="carrusel"
        />
      </div>
      <div class="pure-u-1-2 text-center">
        b
      </div>
    </div>
    <div v-else>
      <div class="pure-u-1 text-center">
        b
      </div>
    </div>
  </main>
</template>

<script setup>
  import { useUserStore } from '../stores/users.js';
  import Header from '../components/Header.vue';
  import Carrousel from '../components/Home/Carrousel.vue';
  import { onMounted, ref } from 'vue';

  const userStore = useUserStore();
  const carrusel = ref([]);
  
  onMounted(async () => {
    try {
      const imgs = await userStore.getCarrusel()
      if(imgs.izziError.toLowerCase() !== "success"){
        alert('sin imagenes')
        return;
      }
      carrusel.value = await imgs.response;
      console.log(carrusel);
    } catch (error) {
      carrusel.value =[];
    }
  });
</script>

<style scoped>

</style>