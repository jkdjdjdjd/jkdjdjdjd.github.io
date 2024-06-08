import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/login', component: () => import('@/views/login/index.vue') },
    {
      path: '/',
      redirect: '/rabbit/home',
      component: () => import('@/views/layout/index.vue'),
      children: [
        {
          path: 'rabbit/home',
          component: () => import('@/views/home/index.vue')
        },
        {
          path: 'rabbit/category',
          component: () => import('@/views/category/index.vue')
        }
      ]
    }
  ]
})

export default router
