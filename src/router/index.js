// ~/src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      name: 'LandingPage',
      path: '/',
      component: () => import('../pages/LandingPage.vue')
    },
    {
      name: 'PostsPage',
      path: '/posts',
      component: () => import('../pages/PostsPage.vue')
    }
  ]
})

export default router
