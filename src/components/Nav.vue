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
      <li class=""><a href="/user">用户</a></li>
    </ul>
  </nav>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const handleSelect = (key, keyPath) => {
  if (key === '3') {
    router.push('/user')
  }
}
</script>

<style></style>
