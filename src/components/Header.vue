<template>
  <header>
    <div class="pure-g">
      <div class="pure-u-1 pure-u-sm-1-3 pure-u-lg-7-24">
        <div class="logo" v-if="path=='home'" >
          <router-link to="/">
            <img src="../assets/img/logos/izzi-flex-logo.svg" alt="izzi flex">
          </router-link>
        </div>
        <div class="logo flex-logo" v-if="path=='fq'">
          <router-link to="/">
            <img src="../assets/img/logos/flex-text-logo.png" alt="izzi flex">
          </router-link>
        </div>
        <div class="logo pocket-logo" v-if="path=='detail'">
          <router-link to="/">
            <img src="../assets/img/logos/pocket-text-logo.png" alt="izzi flex">
          </router-link>
        </div>
        <div class="logo flex-logo" v-if="path=='detail-flex'">
          <router-link to="/">
            <img src="../assets/img/logos/flex-text-logo.png" alt="izzi flex">
          </router-link>
        </div>
      </div>
      <MenuSession />
    </div>
  </header>
</template>

<script setup>
  import MenuSession from './Header/MenuSession.vue';
  const props = defineProps({
    path : String
  });
</script>

<style scoped>
</style>