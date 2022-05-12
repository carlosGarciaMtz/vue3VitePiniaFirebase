<template>
  <footer>
    <div class="pure-g align-items-center">
      <div class="pure-u-1 pure-u-md-5-6 main-col">
        <img src="../assets/img/logos/izzi-white-logo.svg" alt="izzi" class="footer-logo">
        <ul>
          <li><a href="#" @click.prevent="goToIzziResidencial">Términos y condiciones izzi residencial</a></li>
          <li></li>
          <li><a href="#" @click.prevent="goToIzziResidencial">Términos y condiciones izzi negocios</a></li>
          <li></li>
          <li><a href="#" @click.prevent="goToIzziResidencial">Términos y condiciones izzi movil</a></li>
        </ul>
      </div>
      <div class="pure-u-1 pure-u-md-1-6 md-text-right">
        <p class="text-center">© 2021, izzi.mx. Todos los derechos reservados.</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
  import style from '../assets/index.scss';

  const goToIzziResidencial = () =>{
		window.open("https://www.izzi.mx/legales/terminos-condiciones-izzi")
	}

	const goToIzziNegocios = () =>{
		window.open("https://www.izzi.mx/legales/terminos-condiciones-izzi-negocios")
	}

	const goToIzziMovil = () =>{
		window.open("https://www.izzimovil.mx/izzi/izzi-movil/dist/legales/terminos_condiciones_legales_residencial.pdf")
	}
</script>