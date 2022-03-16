<template>
  <div class="w-full h-screen flex justify-center items-center flex-col">
    <div class="rounded-lg shadow-lg shadow-gray-300 px-14 py-16 flex justify-center items-center flex-col">
      <header class="">
        <div>
          <h1 class="mx-auto box-border">{{ login ? '请登录' : '请注册' }}</h1>
        </div>
      </header>

      <div class="my-6">
        <label for="#name">用户名</label>
        <el-input id="name" v-model="name" placeholder="请输入邮箱或用户名"></el-input>
        <label for="#pwd">密码</label>
        <el-input id="pwd" v-model="pwd" placeholder="请输入密码"></el-input>
      </div>

      <div>
        <a class="text-blue-700 hover:cursor-pointer" @click="changeState">{{
          login ? '还没有账号？点我注册' : '已有账号？点我登录'
        }}</a>
      </div>
      <footer class="mt-10"><el-button @click="handleClick">登录</el-button></footer>
    </div>
  </div>
</template>

<script setup>
import axios from 'axios'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
const name = ref('')
const pwd = ref('')
const router = useRouter()
const login = ref(true)
const handleClick = () => {
  const data = {
    name: name.value,
    password: pwd.value,
  }
  axios.post('/api/login', data).then((res) => {
    if (res.data.success) {
      router.push('/')
    }
  })
}
const changeState = () => {
  login.value = !login.value
}
</script>

<style lang="scss" scoped></style>
