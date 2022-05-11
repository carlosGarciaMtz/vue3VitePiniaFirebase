<template>
{{path}}
  <header>
    <div class="pure-g">
      <div class="pure-u-1 pure-u-sm-1-3 pure-u-lg-7-24">
        <div class="logo">
          <router-link to="/">
            <img src="../assets/img/logos/izzi-flex-logo.svg" alt="izzi flex">
          </router-link>
        </div>
      </div>
      <MenuSession />
    </div>
  </header>
</template>

<script setup>
import { watch, watchEffect } from 'vue';
import MenuSession from './Header/MenuSession.vue';

watchEffect(()=>{
  if (document.title.includes('detalle')){
    console.log('hola')
  }else{
    console.log('adios')
  }
});
</script>

<style lang="scss" scoped>

</style>