<template>
  <div>
    <h1>Home</h1>
    <p>
      {{userStore.userData?.email}}
    </p>
    <p v-if="databaseStore.loadingDoc">Loading Docs...</p>
    <ul v-else>
      <li v-for="document of databaseStore.documents" :key="document.id">
        {{document.id}} - {{document.name}} - {{document.short}}
      </li>
    </ul>
  </div>
</template>

<script setup>
  import { useUserStore } from '../stores/users.js';
  import { useDatabaseStore } from '../stores/database.js';

  const userStore = useUserStore();
  const databaseStore = useDatabaseStore();

  databaseStore.getUrls();
</script>