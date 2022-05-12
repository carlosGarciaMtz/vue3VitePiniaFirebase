<template>
  <div id="login_form" class="main">
    <div class="pure-g">
      <div v-if="userStore.user.bearerToken ===''" class="pure-u-1 pure-u-md-5-6 pure-u-md-offset-1-12 pure-u-lg-2-3 pure-u-lg-offset-1-6">
        <div class="logo-holder text-logo m-b-40">
          <h1>
            <router-link to="/">
              <img v-if="typeProduct=='Pocket'" src="../assets/img/logos/pocket-text-logo.png" alt="izzi pocket">
              <img v-else src="../assets/img/logos/flex-text-logo.png" alt="izzi flex">
            </router-link>
          </h1>
        </div>
        <!-- <div v-if="cambioUsuarioExito" class="alert-wrapper pure-g">
            <div class="pure-u-1 pure-u-md-3-4 pure-u-md-offset-1-8 pure-u-lg-7-12 pure-u-lg-offset-5-24">
                <div class="alert mid m-b-10">
                    <p class="fw-semibold m-b-5">Estamos a un paso de cambiar tu correo.</p>
                    <p class="small">Ingresa a tu bandeja de correo y haz click en el enlace que te enviamos para confirmarlo.</p>
                </div>
            </div>
        </div> -->
        <div class="modal-form-wrapper m-b-20">
          <div class="contents">
            <div class="h6 fw-semibold spacing-m1 text-center m-b-20">Bienvenido a izzi flex.<br> Ingresa tu correo y contraseña </div>
            <form @submit.prevent="login()">
              <div class="ctrl-holder has-custom-validation m-b-10">
                  <label for="flex_login_correo" class="placeholder">Correo electrónico</label>
                  <input v-model.trim="user" type="email" name="flex_login_correo" id="flex_login_correo" required>
                  <svg class="icon on-valid">
                    <use xlink:href="../assets/img/icons/symbol-defs.svg#icon-check"></use>
                  </svg>
                  <svg class="icon on-error">
                    <use xlink:href="../assets/img/icons/symbol-defs.svg#icon-error"></use>
                  </svg>
              </div>
              <div class="ctrl-holder password-field no-strength-indicator m-b-10 sm-m-b-20">
                  <label for="flex_login_password" class="placeholder">Contraseña</label>
                  <input v-model.trim="pass" type="password" name="flex_login_password" id="flex_login_password" class="strength-indicator hideshow-pass" required>
                  <svg class="icon on-valid">
                    <use xlink:href="../assets/img/icons/symbol-defs.svg#icon-check"></use>
                  </svg>
                  <svg class="icon on-error">
                    <use xlink:href="../assets/img/icons/symbol-defs.svg#icon-error"></use>
                  </svg>
              </div>
              <div class="pure-g">
                  <div class="pure-u-1 text-center">
                    <p class="sm-m-b-20"><a href="recuperar-password.html" class="common-link primary-text forget-password">¿Olvidaste tu contraseña?</a></p>
                  </div>
              </div>
              <div class="pure-g">
                  <div class="pure-u-1 text-center">
                    <button class="pure-button small primary expand m-b-0" type="submit">Iniciar sesion</button>
                  </div>
              </div>
            </form>
        </div>
      </div>
      <div class="text-center">
          <div class="h6 m-b-10">¿Ya haz comprado un producto?</div>
          <a href="crear-cuenta-telemarketing.html" class="pure-button white small mid-width kissmterics" analytics-event-name="Clic crear login">Crea tu cuenta</a>
        </div>
      </div>
    </div>
    <!-- <div v-if="userStore.user.bearerToken !=''" class="text-center" v-cloak>
      <div class="loader pulse" style="display: block;"></div>
    </div> -->
  </div>
  <div id="footer-wrapper" v-cloak>
    <Footer path="white" /> 
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { useProductStore } from '../stores/products.js';
import { useUserStore } from '../stores/users.js';
import Footer from '../components/Footer.vue';
import {useRouter} from 'vue-router';

const userStore = useUserStore();
const productStore = useProductStore();
const router = useRouter()

const typeProduct = ref('');
const user = ref('')
const pass = ref('')

onMounted(()=>{
  typeProduct.value = productStore.typeProduct;
  user.value = "";
  pass.value = "";
  console.log(user.value)
  console.log(pass.value)
});

const login = async ()=>{
  try {
    await userStore.login({username: user.value, password: pass.value, sessionType: "WEB_SESSION"})
    user.value = "";
    pass.value = "";
    router.push("/")
  } catch (error) {
    console.log(error)
  }
}

</script>

<style scoped>

</style>