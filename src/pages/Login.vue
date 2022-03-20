<template>
  <div class="w-full h-screen flex justify-center items-center flex-col">
    <div class="rounded-lg shadow-lg shadow-gray-300 px-14 py-16 flex justify-center items-center flex-col">
      <header class="">
        <div>
          <h1 class="mx-auto box-border">{{ login ? '请登录' : '请注册' }}</h1>
        </div>
      </header>
      <!-- 输入部分 -->
      <div class="my-6">
        <label for="#name">用户名</label>
        <el-input id="name" v-model="name" placeholder="请输入邮箱或用户名"></el-input>
        <label for="#pwd">密码</label>
        <el-input id="pwd" v-model="pwd" placeholder="请输入密码"></el-input>
        <label for="#verify" v-if="!login">确认密码</label>
        <el-input id="verify" v-model="verifyPwd" v-if="!login"></el-input>
      </div>

      <div>
        <a class="text-blue-700 cursor-pointer" @click="changeState">{{
          login ? '还没有账号？点我注册' : '已有账号？点我登录'
        }}</a>
      </div>
      <footer class="mt-10">
        <el-button @click="handleClick">{{ login ? '登录' : '注册' }}</el-button>
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
