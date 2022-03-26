<template>
  <header
    class="flex justify-between items-center mx-auto px-7 md:px-10 lg:px-14 w-full py-4 md:pt-4 md:pb-0 lg:pt-5 lg:pb-0"
  >
    <ul class="flex">
      <li>
        <a href="/"><h1 class="text-4xl md:text-5xl lg:text-6xl font-dancing text-theme">LvShu</h1></a>
      </li>
    </ul>
    <section class="flex">
      <ul class="hidden md:flex items-center relative md:right-10 divide-x divide-slate-300">
        <li class="nav-item text-selected-text"><a href="/">主页</a></li>
        <li class="nav-item"><a href="/blog">博客</a></li>
        <li class="nav-item"><a href="/about">关于</a></li>
      </ul>
      <ul>
        <li class="cursor-pointer w-12 group">
          <BaseAvatar
            @click="handleClick"
            v-if="store.state.status"
            class="md:group-hover:translate-y-6 md:group-hover:-translate-x-2 md:group-hover:w-20 md:group-hover:h-20"
            :imgUrl="'http://' + store.state.user.avatar"
          />

          <a href="/login" class="px-3 py-2 bg-theme rounded font-bold text-white shadow" v-else
            ><button>登 录</button></a
          >
          <TheInfo v-if="store.state.status" class="hidden md:group-hover:flex">{{ store.state.user.name }}</TheInfo>
        </li>
      </ul>
    </section>
  </header>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
import BaseAvatar from './BaseAvatar.vue'
import TheInfo from './TheInfo.vue'
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

<style>
/* .avatar:hover .show {
  @apply block;
} */
.nav-item {
  @apply px-6;
}
</style>
