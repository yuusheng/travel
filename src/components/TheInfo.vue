<template>
  <div
    class="absolute right-24 top-20 z-20 flex w-52 flex-col rounded-xl border-[2px] border-gray-100 bg-white p-3 shadow">
    <a
      href="/user"
      class="mx-auto my-1 border-b-[1px] border-gray-200/60 py-2 text-lg font-bold dark:text-black">
      <slot></slot>
    </a>
    <section class="mt-2 mb-4 flex flex-col justify-center text-gray-500">
      <a href="/user" target="_blank" class="section-item">个人中心</a>
      <a href="/contribute" target="_blank" class="section-item">投稿管理</a>
      <a href="/history" target="_blank" class="section-item">历史</a>
    </section>
    <footer class="flex flex-row-reverse">
      <button class="rounded bg-theme px-4 py-1 text-white" @click="signOut">
        退出登录
      </button>
    </footer>
  </div>
</template>

<script setup>
import { signOut } from '../http/user'
</script>

<style scoped>
.section-item {
  @apply cursor-pointer rounded px-2 py-1 transition-all duration-200 hover:bg-gray-200/60 dark:text-black;
}
</style>
