import { createRouter, createWebHistory } from 'vue-router';
import Homeview from '../views/Home.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Homeview
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
