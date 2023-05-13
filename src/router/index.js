import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import ListSurah from '../views/ListSurah.vue';
import DetailSurah from '../views/DetailSurah.vue';
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
    },
    { 
      path: '/Detail/:id',
      name:'DetailSurah',
     component: DetailSurah
     }
  ]
})

export default router
