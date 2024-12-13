import { createRouter, createWebHistory } from 'vue-router'

import { publicRoutes } from './routes'

import App from '@/App.vue'
import NotFound from '@/views/NotFound/404.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: App,
    },
    ...publicRoutes,
    {
      path: '/404',
      name: 'notFound',
      component: NotFound,
    },
  ],
})

export default router
