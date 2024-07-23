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
          //末尾的 ? 表示这个参数是可选的。也就是说，路径 rabbit/category 和 rabbit/category/123 都是有效的。
          path: 'rabbit/category/:id?',
          component: () => import('@/views/category/index.vue')
        },
        {
          path: 'rabbit/category/sub/:id?',
          component: () => import('@/views/subCategory/index.vue')
        },
        {
          path: '/rabbit/detail/:id?',
          component: () => import('@/views/detail/index.vue')
        },
        {
          path: '/rabbit/cart',
          component: () => import('@/views/cartList/index.vue')
        },
        {
          path: '/rabbit/checkout',
          component: () => import('@/views/checkout/index.vue')
        },
        {
          path: '/rabbit/pay/:id',
          component: () => import('@/views/pay/index.vue')
        }
      ]
    }
  ],
  //定制路由滚动行为
  scrollBehavior() {
    return { top: 0 }
  }
})

export default router
