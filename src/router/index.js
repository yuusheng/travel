import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/pages/HomePage.vue'
import User from '../pages/User.vue'

const routes = [
  { path: '/', component: HomePage },
  { path: '/user', component: User },
]

const router = createRouter({
  //
  history: createWebHistory(),
  routes, // `routes: routes` 的缩写
})

export default router
