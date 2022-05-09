<template>
  <div>
    <h1>Agrega una nueva url</h1>
    <form @submit.prevent="handleSubmit">
    <input type="text" placeholder="Name" v-model.trim="name">
    <button type="submit">{{tituloBoton}}</button>
    </form>
    {{name}}
  </div>
</template>

<script setup>
import { ref, defineProps } from 'vue';
import { useDatabaseStore } from '../stores/database';

const databaseStore = useDatabaseStore();

const props = defineProps({
  tituloBoton: String
});

const name = ref('');
const handleSubmit = () => {
  
  const regex = new RegExp(/[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/gi);
  const urlValid = name.value.match(regex);
  if (!urlValid) {
    alert('La url no es valida');
    
    return;
  }

  databaseStore.addUrl(name.value);
  
}
</script>