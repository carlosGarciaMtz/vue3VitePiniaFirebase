import { createRouter, createWebHistory } from 'vue-router';
import { useUserStore } from './stores/users';
import Home from './views/Home.vue';
import Login from './views/Login.vue';

const requireAuth = async (to, from, next) => {
  const userStore = useUserStore();
  if (!userStore.currentUser) {
    next();
  }else{
    next("/login");
  }
}

const routes = [
  { 
    path: '/login', 
    component: Login
  },
  { 
    path: '/', 
    component: Home,
    beforeEnter: requireAuth
  },
];

const router = createRouter({
  routes, 
  history: createWebHistory()
});

export default router;