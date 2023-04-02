import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import ListSurah from '../views/ListSurah.vue';
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/listSurah',
      name: 'listSurah',
      component:ListSurah
    }
  ]
})

export default router
