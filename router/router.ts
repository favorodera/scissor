import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/HomePage.vue'

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
      component: () => import('../pages/AuthenticationPage.vue')
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: () => import('../pages/UserDashboard.vue')
    }
  ]
})

export default router
