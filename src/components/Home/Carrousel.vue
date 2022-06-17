<template>
  <div class="pure-u-1 pure-u-md-1-2">
    <div class="featured-tabs">
      <div class="featured-tab__content-holder">
        <div v-for="image of images" :key="image.index" :id="'feature'+image.index" class="featured-tab-content" :class="'feature'+image.index == showImage?'featured-tab-content--active':''">
          <img :src="image.imagen" :alt="image.tipo">
        </div>
        <div class="featured-tab-controls">
          <a v-for="image of images" :key="image.index" class="featured-tab-control" :class="'feature'+image.index == showImage?'featured-tab-control--active':''" @click="changeActive('feature'+image.index)"><span></span></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { ref } from 'vue';

  const props = defineProps({
    images: Array,
  });

  const showImage = ref("feature1");

  const changeActive = (id) => {
    showImage.value = id;
  }
</script>

<style scoped>
</style>