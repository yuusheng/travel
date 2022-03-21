<template>
  <header class="flex justify-between items-center mx-auto px-6 md:px-10 lg:px-14 w-full py-3 md:py-4 lg:py-5">
    <ul class="flex">
      <li>
        <a href="/"><h1 class="text-3xl md:text-4xl lg:text-5xl font-dancing text-theme">LvShu</h1></a>
      </li>
    </ul>
    <section class="flex">
      <ul class="hidden md:flex space-x-12 items-center">
        <li class="text-selected-text"><a href="/">主页</a></li>
        <li class=""><a href="/blog">博客</a></li>
        <li class=""><a href="/about">关于</a></li>
      </ul>
      <ul>
        <li class="cursor-pointer w-12 group">
          <Avatar
            @click="handleClick"
            v-if="store.state.status"
            class="md:group-hover:translate-y-6 md:group-hover:-translate-x-10 md:group-hover:w-20 md:group-hover:h-20"
            :imgUrl="'http://' + store.state.user.avatar"
          />
          <a href="/login" v-else>登录</a>
          <Info :name="store.state.user.name" class="hidden md:group-hover:flex"></Info>
        </li>
      </ul>
    </section>
  </header>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
import Avatar from './Avatar.vue'
import Info from './Info.vue'
const store = useStore()
const router = useRouter()

const handleClick = () => {
  if (store.state.status) {
    router.push('/user')
  } else {
    router.push('/login')
  }
}

const hoverAvatar = ref(false)
</script>

<style>
/* .avatar:hover .show {
  @apply block;
} */
</style>
