import { createRouter, createWebHistory } from 'vue-router'
import CheckList from './../components/CheckList.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: CheckList
    }
  ]
})

export default router
