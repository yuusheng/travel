<template>
  <header
    class="mx-auto flex w-full items-center justify-between px-7 py-4 md:px-10 md:pt-4 md:pb-0 lg:px-14 lg:pt-5 lg:pb-0">
    <ul class="flex">
      <li>
        <a href="/">
          <h1 class="font-dancing text-4xl text-theme md:text-5xl lg:text-6xl">
            LvShu
          </h1>
        </a>
      </li>
    </ul>
    <section class="flex">
      <ul
        class="relative hidden items-center divide-x divide-slate-300 md:flex">
        <li class="nav-item">
          <button @click="router.push('/')">主页</button>
        </li>
        <li class="nav-item">
          <button @click="router.push('/blog')">博客</button>
        </li>
        <li class="nav-item">
          <button @click="router.push('/history')">历史</button>
        </li>
        <li class="nav-item">
          <button @click="router.push('/about')">关于</button>
        </li>
      </ul>
      <ul>
        <li class="group w-12 cursor-pointer">
          <!-- todo imgUrl change -->
          <BaseAvatar
            @click="handleClick"
            v-if="store.status"
            class="md:group-hover:h-20 md:group-hover:w-20 md:group-hover:translate-y-6 md:group-hover:-translate-x-2"
            :imgUrl="'http://' + store.user.avatar" />
          <a
            href="/login"
            class="rounded bg-theme px-3 py-2 font-bold text-white shadow"
            v-else>
            <button>登 录</button>
          </a>
          <TheInfo v-if="store.status" class="hidden md:group-hover:flex">
            {{ store.user.name }}
          </TheInfo>
        </li>
      </ul>
    </section>
  </header>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { useUserStore } from '@/store'
import BaseAvatar from './BaseAvatar.vue'
import TheInfo from './TheInfo.vue'
const store = useUserStore()
const router = useRouter()

const handleClick = () => {
  if (store.status) {
    router.push('/user')
  } else {
    router.push('/login')
  }
}
</script>

<style>
.nav-item {
  @apply px-6 hover:text-selected-text;
}
</style>
