import { createRouter, createWebHistory } from 'vue-router';
import { useUserStore } from './stores/users';
import Home from './views/Home.vue';
import Login from './views/Login.vue';
import Register from './views/Register.vue';
import Editar from './views/Editar.vue';

const requereAuth = async (to, from, next) => {
  const userStore = useUserStore();
  userStore.loadingSessions = true;
  const user = await userStore.currentUser();
  userStore.loadingSessions = false;
  console.log(user);
  if(user) {
    next();
  }else{
    next("/login");
  }
}

const routes = [
  { 
    path: '/', 
    component: Home,
    beforeEnter: requereAuth
  },
  { 
    path: '/edit/:id',
    component: Editar,
    beforeEnter: requereAuth
  },
  { 
    path: '/login', 
    component: Login
  },
  { 
    path: '/register', 
    component: Register
  },
];

const router = createRouter({
  routes, 
  history: createWebHistory()
});

export default router;