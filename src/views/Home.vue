<template>
  <div>
    <h1>Home</h1>
    <p>
      {{userStore.userData?.email}}
    </p>
    <FormCU tituloBoton="Agregar"/>
    <p v-if="databaseStore.loadingDoc">Loading Docs...</p>
    <div v-else>
      <UrlList :docs="databaseStore.documents"/>
    </div>
  </div>
</template>

<script setup>
  import { useUserStore } from '../stores/users.js';
  import { useDatabaseStore } from '../stores/database.js';
  import UrlList from '../components/UrlList.vue';
  import FormCU from '../components/FormCU.vue';


  const userStore = useUserStore();
  const databaseStore = useDatabaseStore();

  databaseStore.getUrls();
</script>