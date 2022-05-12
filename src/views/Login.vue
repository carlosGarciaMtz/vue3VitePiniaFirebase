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
            />
            <TextInput 
              id="password_login"
              label="Contraseña"
              @action="getPass"
              classes="m-b-15"
              require="true"
            />
            <div class="select-holder m-b-20">
              <svg class="icon" aria-hidden="true"><use xlink:href="../assets/img/icons/symbol-defs.svg#icon-angle-left"></use></svg>						
              <select name="" id="select">
                <option value="-1">Selecciona una ciudad</option>
              </select>
            </div>
            <button class="pure__button pure__button--primary" type="submit">Iniciar sesión</button>
          </form>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import { useUserStore } from '../stores/users.js';
import { computed, onMounted, ref } from 'vue';
import TextInput from '../components/Form/TextInput.vue';
const userStore = useUserStore();
const user= ref('')
const pass= ref('')
const cities = ref([])

const getUser = (u) => {
  user.value = u;
}

const getPass = (p) => {
  pass.value = p;
}

const login = () => {
  console.log(user.value);
  console.log(pass.value);
};

onMounted(() => {
  cities.value = userStore.getCities();
});
</script>