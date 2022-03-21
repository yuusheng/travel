<template>
  <div
    class="absolute right-12 top-20 rounded-xl shadow-xl w-52 flex flex-col bg-white p-3 border-[1px] border-gray-100"
  >
    <a href="/user" class="mx-auto my-3 text-lg font-bold">{{ name }}</a>
    <section class="flex justify-center flex-col my-2">
      <a href="/user" class="section-item">个人中心</a>
      <a href="#" class="section-item">投稿管理</a>
    </section>
    <footer class="flex flex-row-reverse">
      <button class="bg-theme text-white px-4 py-1 rounded" @click="logout">退出登录</button>
    </footer>
  </div>
</template>

<script setup>
import { signOut } from '../http/user'

const props = defineProps({
  name: {
    type: String,
    default: 'user',
  },
})

const logout = () => {
  signOut()
}
</script>

<style scoped>
.section-item {
  @apply hover:bg-gray-200/60 rounded px-2 py-1 cursor-pointer transition-all duration-200;
}
</style>
