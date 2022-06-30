const HomePage = () => import('@/pages/HomePage.vue')
const User = () => import('@/pages/User.vue')
const Login = () => import('@/pages/Login.vue')
const About = () => import('@/pages/About.vue')
const Blog = () => import('@/pages/Blog.vue')
const BlogContent = () => import('@/pages/BlogContent.vue')
const TagArticles = () => import('@/pages/TagArticles.vue')
const History = () => import('@/pages/History.vue')
const Profile = () => import('@/pages/Profile.vue')
const Contribute = () => import('@/pages/Contribute.vue')

const routes = [
  {
    path: '/',
    component: HomePage,
  },
  {
    path: '/user',
    name: '用户',
    component: User,
    meta: { title: '用户' },
  },
  {
    path: '/profile/:id',
    name: '用户信息',
    component: Profile,
  },
  { path: '/login', name: '登录', component: Login },
  { path: '/about', name: '关于', component: About },
  { path: '/blog', name: '动态', component: Blog },
  { path: '/tag/:name', name: '标签', component: TagArticles },
  {
    path: '/blog/:id',
    name: '详情',
    component: BlogContent,
    meta: { title: '博客' },
  },
  {
    path: '/history',
    name: '历史记录',
    component: History,
    meta: { title: '历史记录' },
  },
  {
    path: '/contribute',
    name: '投稿管理',
    component: Contribute,
    meta: { title: '投稿管理' },
  },
]

export default routes
