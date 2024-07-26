import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'

import Layout from '@/Layout/index.vue'
import ElHome from '@/views/ElHome/index.vue'
import ElOrder from '@/views/ElOrder/index.vue'
import ElMine from '@/views/ElMine/index.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Layout',
      component: Layout,
      redirect: '/home',
      children: [
        {
          path: '/home',
          name: 'home',
          component: ElHome
        },
        {
          path: '/order',
          name: 'Order',
          component: ElOrder
        },
        {
          path: "/mine",
          name: "mine",
          component: ElMine
        },
      ]
    }
  ]
})

export default router
