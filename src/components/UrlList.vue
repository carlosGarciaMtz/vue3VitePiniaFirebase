<template>
  <h1>lista de urls</h1>
  <ul>
    <li v-for="doc in docs" :key="doc.id">
    <span>{{doc.id}} - {{doc.name}} - {{doc.short}}</span> | 
    <button @click="router.push(`/edit/${doc.id}`);">Editar</button> | 
    <button @click="databaseStore.deleteUrl(doc.id)">Eliminar</button>
    </li>
  </ul>
</template>

<script setup>
import {defineProps} from 'vue';
import { useDatabaseStore } from '../stores/database.js';
import { useRouter } from 'vue-router';

const databaseStore = useDatabaseStore();
const router = useRouter();
const props = defineProps({
  docs: Array,
});
</script>