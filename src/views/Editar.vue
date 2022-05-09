<template>
  <div>
    <h1>Editar doc</h1>
    <form @submit.prevent="editSubmit">
      <input type="text" placeholder="Ingrese la nueva url" v-model.trim="url"/>
      <br><br>
      <button type="submit">Editar</button>
    </form>
  </div>
</template>

<script setup>
  import { onMounted, ref } from 'vue';
  import { useRoute } from 'vue-router';
  import { useDatabaseStore } from '../stores/database.js';

  const databaseStore = useDatabaseStore();
  const route = useRoute();
  // console.log(route.params);
  const url = ref('');
  const editSubmit = () => {
      const regex = new RegExp(/[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/gi);
      const urlValid = url.value.match(regex);
      if (!urlValid) {
        alert('La url no es valida');
        return;
      }

      databaseStore.updateUrl(route.params.id, url.value);
  }

  onMounted(async ()=>{
    url.value = await databaseStore.getUrl(route.params.id);
  });
</script>