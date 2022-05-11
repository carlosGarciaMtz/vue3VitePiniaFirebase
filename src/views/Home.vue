<template>
	<Header />
  <div class="main">
    <Titulo />
    <Products />
    <div class="section cities-section">
      <div class="pure-g">
        <div class="pure-u-1" id="component-wrapper" v-cloak>
          <h2 class="fw-medium m-b-20 text-center">Ciudades con cobertura y servicio</h2>
          <div class="pure-g">
            <div class="pure-u-1">
              <div class="cities-list">
                <div class="city" v-for="(city, index) of cities" :key="index"><span>{{city}}</span></div>
              </div>
            </div>
          </div>
          <div class="h6 small fw-bold text-center m-b-40"><a href="/docs/izzi_flex_cobertura_por_municipio_.pdf" class="common-link primary-text" target="_blank">Consulta más ciudades</a></div>
        </div>
      </div>
      <div class="product-features-grid big-icons m-b-10">
        <div class="pure-g">
          <div class="pure-u-sm-1-2 pure-u-md-1-4 pure-u-lg-5-24 pure-u-lg-offset-1-12 m-b-20">
            <div class="graphic"><img src="../assets/img/dummy-img/misc/ayuda-icon.svg" alt=""></div>
            <span>Ayuda y soporte <br>24/7</span>
          </div>
          <div class="pure-u-sm-1-2 pure-u-md-1-4 pure-u-lg-5-24 m-b-20">
            <div class="graphic"><img src="../assets/img/dummy-img/misc/modem-icon.svg" alt=""></div>
            <span>Módem <br>inalámbrico</span>
          </div>
          <div class="pure-u-sm-1-2 pure-u-md-1-4 pure-u-lg-5-24 m-b-20">
            <div class="graphic"><img src="../assets/img/dummy-img/misc/ayuda-icon.svg" alt=""></div>
            <span>Sin plazos <br>forzosos</span>
          </div>
          <div class="pure-u-sm-1-2 pure-u-md-1-4 pure-u-lg-5-24 m-b-20">
            <div class="graphic"><img src="../assets/img/dummy-img/misc/recarga-icon.svg" alt=""></div>
            <span>Recarga fácilmente vía <br>web o app</span>
          </div>
        </div>
      </div>
    </div>
    <div class="section app-section">
      <div class="pure-g">
        <div class="pure-u-1 pure-u-md-2-5 pure-u-lg-offset-1-12 pure-u-lg-1-4 hide-for-mobile md-text-right">
          <img class="device-thumb sm-m-b-20" src="../assets/img/dummy-img/thumbs/device-thumb.png" alt="">
        </div>
        <div class="pure-u-1 pure-u-md-3-5 pure-u-lg-7-12">
          <h2 class="fw-bold white-text">Descarga la <img class="flex-app-logo" src="../assets/img/logos/flex-app-logo.png" alt="flex"> app</h2>
          <div class="h6 fw-medium white-text m-b-20">Activa, recarga, consulta tu saldo y optimiza tus servicios.</div>
          <div class="app-links">
            <a href="https://itunes.apple.com/us/app/izziflex/id1436985353?ls=1&mt=8"
              onclick="
                gtag('event', 'Clic_app_store', {
                  'event_label': 'Clic app store',
                  'event_category': 'home'
                });
                ">
              <img src="../assets/img/dummy-img/logos/app-store.png" alt="App Store">
            </a>
            <a href="https://play.google.com/store/apps/details?id=com.izzi.izziflex"
              onclick="
                gtag('event', 'Clic_play_store', {
                  'event_label': 'Clic play store',
                  'event_category': 'home'
                });
                ">
              <img src="../assets/img/dummy-img/logos/google-play.png" alt="Google Play">
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="mobile-chat-holder">
    <a href="chat.html" class="mobile-chat-btn">
      <svg class="icon"><use xlink:href="../assets/img/icons/symbol-defs.svg#icon-chat"></use></svg>
      <span>¿Tienes dudas?</span>
    </a>
  </div>
  <a href="#" class="chat-btn" onclick="window.open('chat.html', 'Chat', 'width=500,height=730');" >
	<svg class="icon"><use xlink:href="../assets/img/icons/symbol-defs.svg#icon-chat"></use></svg>
	<span class="m-0">¿Tienes dudas?</span>
	</a>
	<div class="mfp-hide">
		<div id="llamada_exito" class="modal-wrapper mid">
			<div class="modal-contents text-center">
				<a href="#" class="close-modal"><svg class="icon"><use xlink:href="../assets/img/icons/symbol-defs.svg#icon-close"></use></svg></a>
				<div class="h4 fw-semibold m-t-10 m-b-10">¡Gracias!</div>
				<p class="m-b-0">Nos pondremos en contacto contigo en algunos minutos.</p>
			</div>
		</div>
		<div id="ciudades" class="modal-wrapper largest">
			<div class="modal-contents map-modal">
				<a href="#" class="close-modal"><svg class="icon"><use xlink:href="../assets/img/icons/symbol-defs.svg#icon-close"></use></svg></a>
				<div class="pure-g">
					<div class="pure-u-1 pure-u-md-push-1-2 pure-u-md-1-2">
						<div class="pure-g">
							<div class="pure-u-1 pure-u-sm-custom-1-2 pure-u-md-1-2">
								<p class="aqua-text fw-semibold m-b-0">Aguascalientes</p>
								<ul class="common-list m-b-15">
									<li>Real de Asientos</li>
									<li>San José de Gracia</li>
								</ul>
								<p class="aqua-text fw-semibold m-b-0">Colima</p>
								<ul class="common-list m-b-15">
									<li>Comala</li>
								</ul>
								<p class="aqua-text fw-semibold m-b-0">Estado de México</p>
								<ul class="common-list m-b-15">
									<li>El Oro de Hidalgo</li>
									<li>Metepec</li>
									<li>San Martín de las Pirámides</li>
									<li>Tepotzotlán</li>
									<li>Valle de Bravo</li>
									<li>Villa del Carbón</li>
								</ul>
								<p class="aqua-text fw-semibold m-b-0">Guanajuato</p>
								<ul class="common-list m-b-15">
									<li>Jalpa de Cánovas</li>
								</ul>
								<p class="aqua-text fw-semibold m-b-0">Hidalgo</p>
								<ul class="common-list m-b-15">
									<li>Huasca de Ocampo</li>
									<li>Huichapan</li>
									<li>Mineral del Chico</li>
									<li>Tecozautla</li>
								</ul>
								<p class="aqua-text fw-semibold m-b-0">Jalisco</p>
								<ul class="common-list m-b-15">
									<li>San Sebastián del Oeste</li>
									<li>Tapalpa</li>
									<li>Tequila</li>
								</ul>
							</div>
							<div class="pure-u-1 pure-u-sm-custom-1-2 pure-u-md-1-2">
								<p class="aqua-text fw-semibold m-b-0">Michoacán</p>
								<ul class="common-list m-b-15">
									<li>Mineral del Angangueo</li>
									<li>Cuitzeo del Porvenir</li>
									<li>Jiquilpan de Juárez</li>
								</ul>
								<p class="aqua-text fw-semibold m-b-0">Morelos</p>
								<ul class="common-list m-b-15">
									<li>Emiliano Zapata</li>
									<li>Juitepec</li>
									<li>Temixco</li>
									<li>Tlayacapan</li>
									<li>Xochitepec</li>
								</ul>
								<p class="aqua-text fw-semibold m-b-0">Nayarit</p>
								<ul class="common-list m-b-15">
									<li>Jala</li>
								</ul>
								<p class="aqua-text fw-semibold m-b-0">Nuevo León</p>
								<ul class="common-list m-b-15">
									<li>Linares</li>
									<li>Santiago</li>
								</ul>
								<p class="aqua-text fw-semibold m-b-0">Querétaro</p>
								<ul class="common-list m-b-15">
									<li>Bernal</li>
									<li>Tequisquiapan</li>
								</ul>
								<p class="aqua-text fw-semibold m-b-0">Zacatecas</p>
								<ul class="common-list">
									<li>Teúl de González Ortega</li>
									<li>Nochistlán de Mejía</li>
								</ul>
							</div>
						</div>
					</div>
					<div class="pure-u-1 pure-u-md-pull-1-2 pure-u-md-1-2">
						<div class="map-thumb">
							<img src="../assets/img/dummy-img/misc/mexico-map.png" alt="Mapa de México">
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<Footer />
</template>

<script setup>
import { useUserStore } from '../stores/users.js';
import Titulo from '../components/Home/Titulo.vue';
import Products from '../components/Home/Products.vue';
import { ref } from 'vue';
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';

const userStore = useUserStore();

const cities = ref(['AGUASCALIENTES','CANCÚN','CELAYA','CAMPECHE','CD. DEL CARMEN','CD. OBREGÓN','CHETUMAL','CHIHUAHUA','CIUDAD DE MÉXICO','CIUDAD JUÁREZ','COATEPEC DE LAS HARINAS','COATZACOALCOS','COLIMA','CÓRDOBA','COSALA','CUERNAVACA','CULIACÁN','DURANGO','ENSENADA','ESTADO DE MÉXICO','GUADALAJARA','GUAYMAS','HERMOSILLO','ISLAS MUJERES','LEÓN','LOS MOCHIS','MAZATLÁN','MÉRIDA','MEXICALI','MINATITLÁN','MINERAL DEL MONTE','MORELIA','MONTERREY','PACHUCA','PLAYA DEL CARMEN','PUEBLA','QUERÉTARO','SALTILLO','SAN CRISTÓBAL DE LAS CASAS','SAN LUIS POTOSÍ','SAN MIGUEL DE ALLENDE','TAMPICO','TEPIC','TEPOZTLÁN','TIJUANA','TORREÓN','TUXTLA GUTIÉRREZ','VERACRUZ','VILLAHERMOSA','XALAPA','ZACANGO']);

</script>

<style scoped>

</style>