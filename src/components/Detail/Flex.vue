<template>
  <div class="main">
		<div class="pure-g">
			<div class="pure-u-1">
				<div class="breadcrumbs">
					<router-link to="/" class="step previous">Inicio</router-link>
					<div class="arrow"><svg class="icon"><use xlink:href="../../assets/img/icons/symbol-defs.svg#icon-angle-right"></use></svg></div>
					<router-link to="" class="step current">izzi flex</router-link>
				</div>
			</div>
		</div>
    
    <div class="pure-g m-b-60">
			<div class="pure-u-1 pure-u-lg-custom-11-24 pure-u-md-custom-push-13-24">
				<div class="product-thumb has-info-boxes m-b-20">
					<div id="vue-component-copy-2" v-cloak>
						<div class="package-box flex-5mb" v-if="false">
							<span class="package-info"><span>Hasta</span> 5 Megas</span>
							<span class="package-price">$200 mensuales</span>
						</div>
					</div>
					<div class="package-box flex-10mb">
						<span class="package-info">flex 10</span>
						<span class="package-price">$350 mensuales</span>
					</div>
					<div class="package-box flex-20mb">
						<span class="package-info">flex 20</span>
						<span class="package-price">$450 mensuales</span>
					</div>
					<img class="flexplus-thumb" src="../../assets/img/dummy-img/thumbs/izzi-flexplus-thumb.png" alt="Izzi–flex–internet-inalámbrico-en-casa">
				</div>
			</div>
			<div class="pure-u-1 pure-u-lg-custom-13-24 pure-u-md-custom-pull-11-24">
				<div class="detail-desc">
					<h1 class="smaller fw-bold">izzi flex</h1>
					<h2 class="xsmall pink-text fw-semibold m-b-20">Módem inalámbrico que instalas tú mismo.</h2>
					<div id="vue-component-copy">
						<div class="pure-g" v-if="false" v-cloak>
							<div class="pure-u-1 pure-u-lg-custom-1-2">
								<div class="signup-info">
									<div class="price">
										<div class="h4 small pink-text fw-semibold">$1,000</div>
									</div>
									<div class="description">
										<p class="fw-bold m-b-0">Para flex 5</p>
										<p class="gray-text fw-light">Incluye costo suscripción y primer mes de servicio</p>
									</div>
								</div>
							</div>
							<div class="pure-u-1 pure-u-lg-custom-1-2">
								<div class="signup-info">
									<div class="price">
										<div class="h4 small pink-text fw-semibold">$2,000</div>
									</div>
									<div class="description">
										<p class="fw-bold m-b-0">Para flex 10 y flex 20</p>
										<p class="gray-text	fw-light">Incluye costo suscripción y primer mes de servicio</p>
									</div>
								</div>
							</div>
						</div>
						<div class="signup-info" v-if="true" v-cloak>
							<div class="price">
								<div class="h4 small pink-text fw-semibold">$2,000</div>
							</div>
							<div class="description">
								<p class="gray-text	 fw-light" style="width:190px">Incluye costo suscripción y primer mes de servicio</p>
							</div>
						</div>
					</div>
				</div>
				<div class="pure-g">
					<div class="pure-u-1">
						<div id="component-wrapper">
							<div class="m-b-40">
								<img class="banner_pago" src="../../assets/img/dummy-img/misc/banner_pago.gif" alt="">
							</div>
						</div>
						<h2 class="xxsmaller fw-semibold m-b-10">Busca tu calle y número para verificar la opción que más te convenga.</h2>
						<div class="common-panel alt-gray min m-b-20">
							<form @submit.prevent="">
								<div id="autocomplete-component" class="ctrl-holder search-input has-bg">
									<label for="flex_buscadireccion_calle" class="placeholder">Ingresa tu dirección</label>
									<input type="text" name="flex_buscadireccion_calle" id="flex_buscadireccion_calle" placeholder="" required>
									<svg class="icon on-valid"><use xlink:href="../../assets/img/icons/symbol-defs.svg#icon-check"></use></svg>
									<svg class="icon on-error"><use xlink:href="../../assets/img/icons/symbol-defs.svg#icon-error"></use></svg>
									<button v-on:click="buttonSearchOnClickListener" type="button">
										<svg class="icon"><use xlink:href="../../assets/img/icons/symbol-defs.svg#icon-search"></use></svg>
									</button>
								</div>
								<div v-show="true" id="map-component" v-cloak >
									<div id="map_block" class="map-holder small">
										<div id="div_map" style="height: 100%; object-fit: cover; width: 100%;">
										<GMapMap
												:center="placeCDMX"
												:zoom="100"
												map-type-id="terrain"
												style="width: 500px; height: 400px"
										>
											<GMapCluster>
												<GMapMarker
														:key="index"
														v-for="(m, index) in markers"
														:position="m.position"
														:clickable="true"
														:draggable="true"
														@click="center=m.position"
												/>
											</GMapCluster>
										</GMapMap>
										</div>
									</div>
								</div>
								<div v-show="true" id="coverage-component" v-cloak >
									<div class="text-center" style="margin-top: 20px; margin-bottom: 20px;">
										<span class="fw-bold pink-text" style="margin-right: -3px">Felicidades</span>
										<span class="fw-semibold">, velocidad disponible en tu ubicación</span>
									</div>
									<div class="text-center">
										<!-- <div class="pure-u-1 pure-u-md-1-2 pure-u-lg-1-3" v-for="(item, index) in products">
											<div class="product-selector text-center" >
												<input  :id="'flex_'+index+'m'" v-bind:value="index" v-model="indexSelectedProduct" type="radio" name="paqueteflex" >
												<label :for="'flex_'+index+'m'">
													<span class="indicator"></span>
													<div class="contents">
														<div class="product-info">{{ item.productDescription }}</div>
														<div class="product-price">${{ item.regularProductCost }} al mes</div>
													</div>
												</label>
											</div>
										</div> -->
									</div>
								</div>
								<div v-show="true" id="continue-component" v-cloak >
									<div class="location-action text-center">
										<button class="pure-button primary mobile-expand m-b-0 sm-m-b-10" v-on:click="onClickListener">---</button>
									</div>
								</div>
								<div v-show="true" id="continue-flex-component" v-cloak >
									<div class="location-action text-center">
										<button class="pure-button primary mobile-expand m-b-0 sm-m-b-10" v-on:click="onClickListener">+++</button>
									</div>
								</div>

							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
  </div>
</template>

<script setup >
	import { onMounted, ref } from 'vue';
	
	const flagModalFlexPlus = ref(false);

	const placeCDMX = ref({
		lat: 19.4334004,
		lng: -99.1344391
	});

	const markers = ref([ {
          position: placeCDMX.value}])

</script>

<style scoped>

</style>