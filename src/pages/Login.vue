<template>
  <div class="w-full h-screen flex justify-center md:justify-between items-center md:space-x-24">
    <section class="h-screen overflow-hidden hidden md:block">
      <img src="@/assets/img/login.png" class="absolute h-screen w-auto" alt=" " />
      <svg width="686" height="894" viewBox="0 0 686 894" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M152.5 182C110.581 151.945 53 64.5 63 0H0V891.5C228.667 893 686 895.1 686 891.5C686 887 650.971 784.5 627.5 721.5C600.118 648 526 543.555 432.5 494C339 444.445 313.5 415 291.5 350.5C249.216 226.531 205.5 220 152.5 182Z"
          fill="url(#paint0_linear_2_7)"
        />
        <defs>
          <linearGradient id="paint0_linear_2_7" x1="343" y1="0" x2="343" y2="893.488" gradientUnits="userSpaceOnUse">
            <stop stop-color="#4444FF" stop-opacity="0.76" />
            <stop offset="1" stop-color="#C4C4C4" stop-opacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </section>
    <div
      class="block p-6 w-80 bg-white rounded-lg dark:bg-body md:dark:bg-gray-800 dark:border-gray-700 relative -top-16 md:-left-20"
    >
      <!-- 头部 -->
      <header class="flex flex-col items-center space-y-28 mb-16">
        <h1 class="font-dancing font-bold text-6xl text-theme">LvShu</h1>
        <h2 class="mx-auto box-border text-2xl">{{ login ? '请登录' : '请注册' }}</h2>
      </header>
      <!-- 输入部分 -->
      <div class="relative z-0 mb-6 w-full group">
        <input
          name="floating_email"
          class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" "
          required
          v-model="name"
        />
        <label
          for="floating_email"
          class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >用户名/邮箱</label
        >
      </div>
      <div class="relative z-0 mb-6 w-full group">
        <input
          type="password"
          name="floating_password"
          id="floating_password"
          class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" "
          required
          v-model="pwd"
        />
        <label
          for="floating_password"
          class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >密码</label
        >
      </div>
      <div class="relative z-0 mb-6 w-full group" v-if="!login">
        <input
          type="password"
          name="repeat_password"
          id="floating_repeat_password"
          class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" "
          required
          v-model="verifyPwd"
        />
        <label
          for="floating_repeat_password"
          class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >确认密码</label
        >
      </div>
      <!-- 按钮部分 -->
      <div class="flex flex-row-reverse">
        <a class="text-blue-600 cursor-pointer text-xs" @click="changeState">{{
          login ? '还没有账号？点我注册' : '已有账号？点我登录'
        }}</a>
      </div>
      <footer class="mt-10 flex justify-center">
        <button class="bg-theme text-white px-6 py-2 rounded w-28" @click="handleClick">
          {{ login ? '登录' : '注册' }}
        </button>
      </footer>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { currentUser, signIn } from '../http/user'
import { useStore } from 'vuex'
const name = ref('')
const pwd = ref('')
const verifyPwd = ref('')
const router = useRouter()
const login = ref(true)
const store = useStore()

// 登录、注册模块
const handleClick = async () => {
  let res = await signIn(name.value, '', pwd.value)
  store.state.user['token'] = res.token
  // 获取当前用户信息
  let user = await currentUser(res.token)
  // 修改state中的user
  store.commit('login', user)
  // 重定向到homepage
  router.push('/')
  // console.log(store.state.user)
}

const log = () => {}

const changeState = () => {
  login.value = !login.value
}
</script>

<style lang="scss" scoped></style>
