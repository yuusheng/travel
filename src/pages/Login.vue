<template>
  <div class="w-full h-screen flex justify-center items-center flex-col">
    <div class="block p-6 w-80 bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
      <!-- 头部 -->
      <header class="flex justify-center">
        <div>
          <h1 class="mx-auto box-border">{{ login ? '请登录' : '请注册' }}</h1>
        </div>
      </header>
      <!-- 输入部分 -->
      <div class="my-6">
        <label for="#name">用户名</label>
        <el-input id="name" v-model="name" placeholder="请输入邮箱或用户名" />
        <label for="#pwd">密码</label>
        <el-input id="pwd" v-model="pwd" placeholder="请输入密码" type="password" />
        <label for="#verify" v-if="!login">确认密码</label>
        <el-input id="verify" v-model="verifyPwd" v-if="!login" placeholder="请确认密码" type="password" />
      </div>
      <!-- 界面升级 -->
      <!-- <div class="relative z-0 mb-6 w-full group">
        <input
          name="floating_email"
          class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" "
          required
        />
        <label
          for="floating_email"
          class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >Email address</label
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
        />
        <label
          for="floating_password"
          class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >Password</label
        >
      </div>
      <div class="relative z-0 mb-6 w-full group">
        <input
          type="password"
          name="repeat_password"
          id="floating_repeat_password"
          class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" "
          required
        />
        <label
          for="floating_repeat_password"
          class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >Confirm password</label
        >
      </div> -->
      <!-- 按钮部分 -->
      <div>
        <a class="text-theme cursor-pointer" @click="changeState">{{
          login ? '还没有账号？点我注册' : '已有账号？点我登录'
        }}</a>
      </div>
      <footer class="mt-10 flex justify-center">
        <button class="bg-theme text-white px-6 py-2 rounded-sm" @click="handleClick">
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
