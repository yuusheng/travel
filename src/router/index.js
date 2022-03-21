import { createRouter, createWebHistory } from 'vue-router'
const HomePage = () => import('@/pages/HomePage.vue')
const User = () => import('@/pages/User.vue')
const Login = () => import('@/pages/Login.vue')
const About = () => import('@/pages/About.vue')
const Blog = () => import('@/pages/Blog.vue')

const routes = [
  // { path: '/:id', component: HomePage },
  { path: '/', component: HomePage },
  { path: '/user', component: User },
  { path: '/login', component: Login },
  { path: '/about', component: About },
  { path: '/blog', component: Blog },
]

const router = createRouter({
  //
  history: createWebHistory(),
  routes, // `routes: routes` 的缩写
})

export default router
