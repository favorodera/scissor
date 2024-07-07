import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/authentication',
      name: 'authentication',
      component: () => import('../pages/Authentication.vue')
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: () => import('../pages/Dashboard.vue')
    }
  ]
})

export default router
