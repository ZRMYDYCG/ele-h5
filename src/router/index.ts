import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'

import Layout from '@/Layout/index.vue'
import HomeView from '@/views/HomeView/index.vue'
import OrderView from '@/views/OrderView/index.vue'
import MineView from '@/views/MineView/index.vue'

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
          name: 'Home',
          component: HomeView
        },
        {
          path: '/order',
          name: 'Order',
          component: OrderView
        },
        {
          path: "/mine",
          name: "Mine",
          component: MineView
        },
      ]
    }
  ]
})

export default router
