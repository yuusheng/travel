import { createRouter, createWebHistory } from 'vue-router'
const HomePage = () => import('@/pages/HomePage.vue')
const User = () => import('@/pages/User.vue')
const Login = () => import('@/pages/Login.vue')
const About = () => import('@/pages/About.vue')
const Blog = () => import('@/pages/Blog.vue')
const BlogContent = () => import('@/pages/BlogContent.vue')
const TagArticles = () => import('@/pages/TagArticles.vue')

const routes = [
  // { path: '/:id', component: HomePage },
  { path: '/', component: HomePage },
  {
    path: '/user',
    name: '用户',
    component: User,
  },
  { path: '/login', name: '登录', component: Login },
  { path: '/about', name: '关于', component: About },
  {
    path: '/blog',
    name: '动态',
    component: Blog,
  },
  {
    path: '/blog/:id',
    name: '详情',
    component: BlogContent,
  },
  {
    path: '/tag/:name',
    name: '标签',
    component: TagArticles,
  },
]

const router = createRouter({
  //
  history: createWebHistory(),
  routes, // `routes: routes` 的缩写
})

export default router
