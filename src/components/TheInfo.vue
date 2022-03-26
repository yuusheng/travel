<template>
  <div
    class="absolute right-24 top-20 rounded-xl shadow-xl w-52 flex flex-col bg-white p-3 border-[2px] border-gray-100 z-20"
  >
    <a href="/user" class="mx-auto py-2 my-1 text-lg font-bold border-b-[1px] border-gray-200/60 dark:text-black">
      <slot></slot>
    </a>
    <section class="flex justify-center flex-col mt-2 mb-4 text-gray-500">
      <a href="/user" class="section-item">个人中心</a>
      <a href="/contribute" class="section-item">投稿管理</a>
      <a href="/history" class="section-item">历史</a>
    </section>
    <footer class="flex flex-row-reverse">
      <button class="bg-theme text-white px-4 py-1 rounded" @click="logout">退出登录</button>
    </footer>
  </div>
</template>

<script setup>
import { signOut } from '../http/user'

const logout = () => {
  signOut()
}
</script>

<style scoped>
.section-item {
  @apply hover:bg-gray-200/60 rounded px-2 py-1 cursor-pointer transition-all duration-200 dark:text-black;
}
</style>
