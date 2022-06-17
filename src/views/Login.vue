<template>
  <main class="login-page">
    <div class="pure-g justify-content-center">
      <div class="pure-u-1">
        <div class="panel panel--small panel--centered m-b-30 text-center">
          <div class="m-b-15">
            <img class="izzi-logo m-b-15" src="../assets/img/logos/izzi-logo.svg" alt="izzi"/>
            <p class="fw-semibold m-b-0"> Inicia sesión con tus credenciales izzi </p>
          </div>
          <form @submit.prevent="login">
            <TextInput 
              id="user_login"
              label="Usuario"
              @action="getUser"
              classes="m-b-15"
              require="true"
              type="text"
            />
            <TextInput 
              id="password_login"
              label="Contraseña"
              @action="getPass"
              classes="m-b-15"
              require="true"
              type="pass"
            />
            <div v-if="cities.length > 0">
              <CustomSelect 
                id="city_login"
                label="Ciudad"
                classes="m-b-15"
                :values="cities"
                @action="getCity"
                require="true"
              />
            </div>
            <div v-else>
              <p>{{label}}</p>
            </div>
            <button class="pure__button pure__button--primary" type="submit" :disabled="cities.length == 0 || disabled">Iniciar sesión</button>
          </form>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import { useUserStore } from '../stores/users.js';
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';
import TextInput from '../components/Form/TextInput.vue';
import CustomSelect from '../components/Form/CustomSelect.vue';

const userStore = useUserStore();
const router = useRouter();

const user= ref('');
const pass= ref('');
const ciudad = ref('');
const cities = ref([]);
const disabled = ref(false);
const label = ref('Cargando ciudades');

const getUser = (u) => {
  user.value = u;
}

const getPass = (p) => {
  pass.value = p;
}

const getCity = (c) =>{
  ciudad.value = c;
}

const login = async() => {
  disabled.value = true; 
  if(user.value.trim() == ''){
    alert('Ingresa tu usuario');
    return;
  } 
  if(pass.value.trim() == ''){
    alert('Ingresa tu contraseña');
    return;
  }
  if(ciudad.value.trim() == '-1'){
    return;
  }
  const payload = {
    usuario: user.value,
    contrasena: pass.value
  }
  const result = await userStore.loginOC(payload, ciudad.value);
  console.log("result LOGIN.VUE", result);
  if(result.message){
    alert(result.message);
    disabled.value = false;
    return;
  }
  disabled.value = false;
  router.push('/');
};

onMounted(async () => {
  const next = userStore.currentUser();
  if(next){
    router.push('/home');
  }
  const result = await userStore.getCities(); 
  if(result && !result.response){
    label.value = "Ocurrio un error al cargar las ciudades";
    return;
  }
  cities.value = await result.response;
});
</script>