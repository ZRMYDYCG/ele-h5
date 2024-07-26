import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView/HomeView.vue'
import MineView from '@/views/MineView/MineView.vue'
import PersonView from '@/views/PersonView/PersonView.vue'
import PlaceView from '@/views/PlaceView/PlaceView.vue'
import ShopView from '@/views/ShopView/ShopView.vue'

import Layout from '@/Layout/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'layout',
      component: Layout,
      redirect: '/home',
      children: [
        {
          path: '/home',
          name: 'home',
          component: HomeView
        },
        {
          path: '/place',
          name: 'place',
          component: PlaceView
        },
        {
          path: "/shop",
          name: "shop",
          component: ShopView
        },
        {
          path: "/person",
          name: "person",
          component: PersonView
        },
        {
          path: "/mine",
          name: "mine",
          component: MineView
        }
      ]
    },
    {
      path: '/city',
      name: 'city',
      component: () => import("@/views/CityView/CityView.vue")
    }
  ]
})

export default router
