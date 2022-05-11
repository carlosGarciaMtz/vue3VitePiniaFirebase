import { createRouter, createWebHistory } from 'vue-router';
import Home from './views/Home.vue';
import Login from './views/Login.vue';
import Register from './views/Register.vue';
import Detail from './views/Detail.vue';
import FrecuentQuestions from './views/FrecuentQuestions.vue';

const routes = [
  { 
    path: '/', 
    component: Home
  },
  { 
    path: '/login', 
    component: Login
  },
  { 
    path: '/register', 
    component: Register
  },
  {
    path: '/detalle-:id',
    component: Detail
  },
  {
    path: '/preguntas-frecuentes',
    component: FrecuentQuestions
  }
];

const router = createRouter({
  routes, 
  history: createWebHistory()
});

export default router;