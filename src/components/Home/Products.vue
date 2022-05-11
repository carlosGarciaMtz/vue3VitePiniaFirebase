<template>
  <div class="section products-section">
    <div class="pure-g large-row thumbs-row">
      <div class="product-image pocket-img m-b-40 sm-m-b-10">
        <img src="../../assets/img/dummy-img/misc/pocket-product-thumb.png" alt="izzi Pocket">
      </div>
      <div class="pure-u-1 pure-u-md-3-4 pure-u-xl-1-4 m-b-40">
        <div class="product-logo pocket-logo">
          <img src="../../assets/img/logos/pocket-text-logo.png" alt="">
        </div>
        <div class="h5 small fw-semibold m-b-10">El internet que va contigo</div>
        <ul class="gray-text">
          <li>Lo puedes llevar a donde quieras</li>
          <li>Elige 5,000, 10,000 o 20,000 Megas desde <span class="fw-bold">$150</span></li>
          <li>Compártelo fácilmente con varias personas</li>
        </ul>
        <div>
          <router-link to="/detalle-pocket" class="pure-button primary">Quiero pocket</router-link>
        </div>
      </div>
      <div class="product-image flex-img m-b-40 sm-m-b-10">
        <img src="../../assets/img/dummy-img/misc/flexplus-product-thumb.png" alt="izzi Flex">
      </div>
      <div class="pure-u-1 pure-u-md-3-4 pure-u-xl-1-4 m-b-40">
        <div class="product-logo flex-logo">
          <img src="../../assets/img/logos/flex-text-logo.png" alt="">
        </div>
        <div class="h5 small fw-semibold m-b-10">Módem inalámbrico para <br class="hide-for-xl">tu casa</div>
        <ul class="gray-text">
          <li>Sólo tienes que conectarlo</li>
          <li>Conoce flex 10 o flex 20. </li>
          <li>Lo puedes mover a cualquier parte de tu casa</li>
        </ul>
        <div>
          <router-link to="/detalle-flex" class="pure-button primary">Quiero flex</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
</style>