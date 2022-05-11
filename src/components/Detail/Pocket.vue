<template>
	<div class="main">
		<div class="pure-g">
			<div class="pure-u-1">
				<div class="breadcrumbs">
					<router-link to="/" class="step previous">Inicio</router-link>
					<div class="arrow"><svg class="icon">
							<use xlink:href="../../assets/img/icons/symbol-defs.svg#icon-angle-right"></use>
						</svg></div>
					<router-link to="/detalle-pocket" class="step current">izzi pocket</router-link>
				</div>
			</div>
		</div>
		<img src="../../assets/img/dummy-img/misc/pocket-product-alt-thumb.png" alt="" class="pocket-alt-thumb">
		<div class="pure-g">
			<div class="pure-u-1 pure-u-lg-custom-1-3">
			</div>
			<div class="pure-u-1 pure-u-lg-custom-2-3">
				<h1 class="smallest secondary-text fw-bold m-b-5">izzi pocket, <span class="aqua-text">el internet que va
						contigo</span></h1>
				<p class="large m-b-10">Vigencia de 30 días <span class="text-separator">|</span> <span class="fw-bold">Costo de
						suscripción $1,000</span></p>
				<div id="component-wrapper" v-cloak>
					<div class="m-b-40">
						<img class="banner_pago" src="../../assets/img/dummy-img/misc/banner_pago.gif" alt="">
					</div>
				</div>
				<div class="pue-g">
					<div class="h5 small fw-medium m-b-10">Selecciona tu paquete</div>
					<form>
						<div id="selector_paquete_pocket">
							<div v-if="productStore.loader" class="psw-button-holder pure-g">
								<div class="pure-u-1 text-center" style="margin-bottom:50px">
									<img src="../../assets/img/loader.gif" width="70" />
								</div>
							</div>
							<div v-else>
								<div class="pure-u-1 pure-u-md-1-2 pure-u-lg-1-3" v-for="(item, index) in productStore.pocket" :key="index">
									<div class="product-selector">
										<input @click="changeProduct(index)" :id="'flex_' + index + 'm'" v-bind:value="index"
											v-model="indexRadioFlex" type="radio" name="paqueteflex">
										<label :for="'flex_' + index + 'm'">
											<span class="indicator"></span>
											<div class="contents">
												<div class="product-info">{{ item.productMB }} MB <span>de datos</span></div>
												<div class="product-price">${{ item.regularProductCost }}</div>
											</div>
										</label>
									</div>
								</div>
								<div class="psw-button-holder pure-g align-items-center m-b-60">
									<div class="pure-u-1 pure-u-lg-1-3">
										<button class="pure-button primary expand m-b-0 sm-m-b-20" v-on:click="getPocket">Comprar
											pocket</button>
									</div>
								</div>
							</div>
						</div>
					</form>
				</div>

			</div>
		</div>
		<div class="pure-g">
			<div class="pure-u-1">
				<h4 class="small fw-bold m-b-30 text-center">Llévalo a cualquiera de estas ciudades:</h4>
				<div class="pure-g">
					<div class="pure-u-1 text-center">
						<div class="cities-list">
							<div class="city" v-for="(city, index) of cities" :key="index"><span>{{ city }}</span></div>
						</div>
						<p class="fw-bold lg-custom-up-text-center m-b-80">
							<a href="/docs/izzi_flex_cobertura_por_municipio_.pdf" class="common-link primary-text"
								target="_blank">Consulta más ciudades</a>
						</p>
					</div>
				</div>
				<div class="pure-g">
					<div class="pure-u-1 pure-u-lg-5-6 pure-u-lg-offset-1-12">
						<div class="product-features-grid big-icons m-b-40">
							<div class="pure-g">
								<div class="pure-u-1 pure-u-md-1-4 m-b-20">
									<div class="graphic"><img src="../../assets/img/dummy-img/misc/compartir-icon.svg" alt=""></div>
									<span>Comparte tu conexión hasta con 10 personas</span>
								</div>
								<div class="pure-u-1 pure-u-md-1-4 m-b-20">
									<div class="graphic"><img src="../../assets/img/dummy-img/misc/sinplazos-icon.svg" alt=""></div>
									<span>Sin plazos forzosos</span>
								</div>
								<div class="pure-u-1 pure-u-md-1-4 m-b-20">
									<div class="graphic"><img src="../../assets/img/dummy-img/misc/recarga-icon.svg" alt=""></div>
									<span>Recarga inmediata vía web o app sin comisiones</span>
								</div>
								<div class="pure-u-1 pure-u-md-1-4 m-b-20">
									<div class="graphic"><img src="../../assets/img/dummy-img/misc/ayuda-icon.svg" alt=""></div>
									<span>Ayuda y soporte <br>24/7</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="mobile-chat-holder">
		<a href="#" class="mobile-chat-btn" referrerpolicy="unsafe-url" onclick="
				window.open('chat.html', 'Chat', 'width=500,height=730');
				gtag('event', 'Clic_chat', {
				  'event_label': 'Clic chat',
				  'event_category': 'home'
				});
				">
			<svg class="icon">
				<use xlink:href="../../assets/img/icons/symbol-defs.svg#icon-chat"></use>
			</svg>
			<span>Chat</span>
		</a>
	</div>
</template>

<script setup>
	import { onMounted, ref } from 'vue';
	import {useProductStore} from '../../stores/products.js';

	const productStore = useProductStore();

	const cities = ref(['AGUASCALIENTES', 'CANCÚN', 'CELAYA', 'CAMPECHE', 'CD. DEL CARMEN', 'CD. OBREGÓN', 'CHETUMAL', 'CHIHUAHUA', 'CIUDAD DE MÉXICO', 'CIUDAD JUÁREZ', 'COATEPEC DE LAS HARINAS', 'COATZACOALCOS', 'COLIMA', 'CÓRDOBA', 'COSALA', 'CUERNAVACA', 'CULIACÁN', 'DURANGO', 'ENSENADA', 'ESTADO DE MÉXICO', 'GUADALAJARA', 'GUAYMAS', 'HERMOSILLO', 'ISLAS MUJERES', 'LEÓN', 'LOS MOCHIS', 'MAZATLÁN', 'MÉRIDA', 'MEXICALI', 'MINATITLÁN', 'MINERAL DEL MONTE', 'MORELIA', 'MONTERREY', 'PACHUCA', 'PLAYA DEL CARMEN', 'PUEBLA', 'QUERÉTARO', 'SALTILLO', 'SAN CRISTÓBAL DE LAS CASAS', 'SAN LUIS POTOSÍ', 'SAN MIGUEL DE ALLENDE', 'TAMPICO', 'TEPIC', 'TEPOZTLÁN', 'TIJUANA', 'TORREÓN', 'TUXTLA GUTIÉRREZ', 'VERACRUZ', 'VILLAHERMOSA', 'XALAPA', 'ZACANGO']);
	const indexRadioFlex = ref(false);

	const changeProduct=(id)=>{
		
		indexRadioFlex.value=id
	}

	onMounted(async()=>{
		await productStore.getProducts('POCKET');
		document.title='izzi flex - Detalle Pocket'
		console.log(productStore.pocket);
		console.log(productStore.flex);
	});
</script>

<style scoped>
.pocket-alt-thumb {
	position: absolute;
	left: -36px;
	top: 170px;
	width: 475px;
	z-index: 2;
	pointer-events: none;
}
</style>