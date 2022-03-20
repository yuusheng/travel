<template>
  <nav
    class="bg-transparent text-white border-gray-400 px-2 sm:px-4 py-2.5 flex justify-between items-center dark:bg-gray-800"
  >
    <ul class="flex">
      <li>
        <a href="/"><h1>logo</h1></a>
      </li>
      <li class="my-auto text-xl mx-3"><a href="/">主页</a></li>
    </ul>
    <ul class="flex">
      <li class="mx-2"><a href="/about">关于</a></li>
      <li class="">
        <a @click="handleClick" class="cursor-pointer">{{ store.state.user.name ? store.state.user.name : '登录' }}</a>
      </li>
    </ul>
  </nav>
</template>

<script setup>
import { computed, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
const store = useStore()
const router = useRouter()

const handleClick = () => {
  if (store.state.status) {
    router.push('/user')
  } else {
    router.push('/login')
  }
}
</script>

<style></style>
