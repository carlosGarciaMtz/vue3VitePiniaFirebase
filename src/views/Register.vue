<template>
    <div>
      <form @submit.prevent="handleSubmit">
      <input type="email" placeholder="Email" v-model="email"/>
      <input type="password" placeholder="Password" v-model="pass"/>
      <button type="submit" :disabled="userStore.loader">Crear Usuario</button>
      </form>
    </div>
</template>

<script setup>
    import { ref } from 'vue';
    import { useUserStore } from '../stores/users';
    // import { useRouter } from 'vue-router';

    const userStore = useUserStore();
    // const router = useRouter();
    const email = ref('');
    const pass = ref('');


    const handleSubmit = async () => {
        if(!email.value || pass.value.length < 6) {
            return;
        }
        await userStore.registerUser(email.value, pass.value);
        // router.push('/');
    }
</script>