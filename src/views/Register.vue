<template>
    <div>
      <form @submit.prevent="handleSubmit">
      <input type="email" placeholder="Email" v-model="email"/>
      <input type="password" placeholder="Password" v-model="pass"/>
      <button type="submit">Crear Usuario</button>
      </form>
    </div>
</template>

<script setup>
    import { ref } from 'vue';
    import { useUserStore } from '../stores/users';

    const email = ref('');
    const pass = ref('');

    const userStore = useUserStore();

    const handleSubmit = () => {
        if(!email.value || pass.value.length < 6) {
            return;
        }
        userStore.registerUser(email.value, pass.value);
    }
</script>