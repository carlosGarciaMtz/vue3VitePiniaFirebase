<template>
  <div>
    <h1>header</h1>
    <div>
    <router-link to="/">HOME</router-link> |
    <router-link to="/login">Login</router-link> |
    <router-link to="/register">Register</router-link> |
    <button @click="logOut">Logout</button>
    </div>
  </div>
</template>

<script setup>
const logOut = ()=>{
  console.log('cerrar');
}
</script>

<style lang="scss" scoped>

</style>