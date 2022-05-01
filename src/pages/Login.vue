<template>
  <div
    class="flex h-screen w-full items-center justify-center md:justify-between md:space-x-24">
    <section class="hidden h-screen overflow-hidden md:block">
      <img
        src="@/assets/img/login.png"
        class="absolute h-screen w-auto"
        alt=" " />
      <svg
        width="686"
        height="894"
        viewBox="0 0 686 894"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M152.5 182C110.581 151.945 53 64.5 63 0H0V891.5C228.667 893 686 895.1 686 891.5C686 887 650.971 784.5 627.5 721.5C600.118 648 526 543.555 432.5 494C339 444.445 313.5 415 291.5 350.5C249.216 226.531 205.5 220 152.5 182Z"
          fill="url(#paint0_linear_2_7)" />
        <defs>
          <linearGradient
            id="paint0_linear_2_7"
            x1="343"
            y1="0"
            x2="343"
            y2="893.488"
            gradientUnits="userSpaceOnUse">
            <stop stop-color="#4444FF" stop-opacity="0.76" />
            <stop offset="1" stop-color="#C4C4C4" stop-opacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </section>
    <div
      class="relative -top-16 block w-80 rounded-lg bg-white p-6 dark:border-gray-700 dark:bg-body md:-left-20 md:dark:bg-gray-800">
      <!-- 头部 -->
      <header class="mb-16 flex flex-col items-center space-y-28">
        <h1>
          <a href="/" class="font-dancing text-6xl font-bold text-theme"
            >LvShu</a
          >
        </h1>
        <h2 class="mx-auto box-border text-2xl">
          {{ login ? '请登录' : '请注册' }}
        </h2>
      </header>
      <!-- 输入部分 -->
      <BaseInput
        v-model="name"
        :label="login ? '用户名/邮箱' : '请输入邮箱'"
        :error="errorCode"
        :errorList="[101]" />
      <div v-if="!login" class="flex">
        <BaseInput
          v-model="verifyCode"
          label="邮箱验证码"
          :error="errorCode"
          :errorList="[104, 105]" />
        <button @click="handleGetVerifyCode" class="w-4/5 text-sm">
          获取验证码
        </button>
      </div>
      <BaseInput
        v-model="pwd"
        pwd
        label="密码"
        :error="errorCode"
        :errorList="[102]" />
      <BaseInput
        v-model="verifyPwd"
        pwd
        v-if="!login"
        label="确认密码"
        :error="errorCode" />
      <!-- 按钮部分 -->
      <div class="flex flex-row-reverse">
        <a class="cursor-pointer text-xs text-blue-600" @click="changeState">{{
          login ? '还没有账号？点我注册' : '已有账号？点我登录'
        }}</a>
      </div>
      <footer class="mt-10 flex justify-center">
        <button
          v-if="login"
          class="w-28 rounded bg-theme px-6 py-2 text-white"
          @click="handleLogin">
          登录
        </button>
        <button
          v-else
          class="w-28 rounded bg-theme px-6 py-2 text-white"
          @click="handleRegister">
          注册
        </button>
      </footer>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { currentUser, getVerifyCode, signIn, signUp } from '../http/user'
import { useStore } from 'vuex'
import BaseInput from '../components/BaseInput.vue'

const name = ref('')
const pwd = ref('')
const verifyCode = ref('')
const verifyPwd = ref('')
const router = useRouter()
const login = ref(true)
const store = useStore()
const errorCode = ref(100)

// 去除空格
const handleBlank = (str) => {
  let reg = /\s*/g
  return str.replace(reg, '')
}

// 邮箱验证
const isEmail = (str) => {
  let reg = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/
  return reg.test(str)
}

// 登录、注册模块
const handleLogin = async () => {
  // 空格处理
  name.value = handleBlank(name.value)
  pwd.value = handleBlank(pwd.value)

  // 判断是邮箱还是用户名
  let res = isEmail(name.value)
    ? await signIn('', name.value, pwd.value)
    : await signIn(name.value, '', pwd.value)

  if (res.success) {
    store.state.user['token'] = res.token
    // 获取当前用户信息
    let user = await currentUser(res.token)
    // 修改state中的user
    store.commit('login', user)
    // 重定向到homepage
    router.push('/')
  } else {
    errorCode.value = res.code
  }
}

const handleGetVerifyCode = async () => {
  name.value = handleBlank(name.value)

  if (!isEmail(name.value)) {
    alert('请输入正确的邮箱地址')
    return
  }
  let res = await getVerifyCode(name.value)
  if (res.success) {
    console.log(res.msg)
  }
}

const handleRegister = async () => {
  // 空格处理
  name.value = handleBlank(name.value)
  pwd.value = handleBlank(pwd.value)
  verifyPwd.value = handleBlank(verifyPwd.value)
  verifyCode.value = handleBlank(verifyCode.value)

  if (pwd.value !== verifyPwd.value) {
    alert('请保持两次输入密码一致')
    return
  }
  let res = await signUp(name.value, verifyCode.value, pwd.value)
  if (res.success) {
    // todo 成功
  } else errorCode.value = res.code
}

// 改变登录、注册
const changeState = () => {
  login.value = !login.value
}
</script>

<style lang="scss" scoped></style>
