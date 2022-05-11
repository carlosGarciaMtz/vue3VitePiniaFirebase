<template>
  <div style="z-index: 1000" id="menuSession" class="pure-u-1 pure-u-sm-2-3 pure-u-lg-17-24 text-right">
    <div v-if="userStore.user.bearerToken === ''">
      <router-link to="/preguntas-frecuentes" class="faq-link">
        Preguntas frecuentes
      </router-link>
      <a href="tel:+800 120 0240" class="phone-link" style="font-weight: bold  !important;" >
        800 120 0240
      </a>
      <router-link to="/login" class="pure-button login-button small">
          <svg class="icon">
            <use xlink:href="../../assets/img/icons/symbol-defs.svg#icon-user"></use>
          </svg>
          <span>INICIAR SESIÓN</span>
      </router-link>
    </div>  
    <div v-else class="pure-u-1 pure-u-sm-1-2 text-right">
      <div id="sessionAccion">
          <div class="user-block">
            <a href="#" class="user-toggle" onclick="$(this).parent().toggleClass('active');">
                <span class="thumb"></span>
                <span class="username">{{userStore.profile.name}}</span>
                <svg class="icon">
                  <use xlink:href="../../assets/img/icons/symbol-defs.svg#icon-caret-down"></use>
                </svg>
            </a>
            <div class="user-options">
                <p class="user-email small m-b-10">{{userStore.profile.email}}</p>
                <ul v-if="userStore.profile.hasProducts" class="m-b-20" id="sessionValuehasPedidos">
                  <li><a href="micuenta-miflex.html">Mi Cuenta</a></li>
                  <li><a href="micuenta-pedido.html">Mis Pedidos</a></li>
                </ul>
                <a href="#" class="pure-button white small" @click.prevent="session">Cerrar sesión</a>
            </div>
          </div>
      </div>
    </div>
    <!-- <div v-if="this.$store.getters.getFlexVendor.usersiebel !=''" class="pure-u-1 pure-u-sm-1-2 text-right">
      <div class="logo-holder text-logo m-b-40">
          <a href="vendorlogin.html" class="pure-button white small mid-width" onclick="session.destroySession(); ">  Nueva venta  </a>
          <h7>
            <div class="h5 mid aqua-text fw-bold m-b-40">Vendedor: {{this.$store.getters.getFlexVendor.vendorname}}</div>
          </h7>
      </div>
    </div> -->
  </div>
</template>

<script setup>
  import { useUserStore } from '../../stores/users';
  
  const userStore = useUserStore();

  const session = ()=>{
    userStore.logout();
  }
</script>

<style scoped>
.icon{
  margin-right: .2em;
}
</style>