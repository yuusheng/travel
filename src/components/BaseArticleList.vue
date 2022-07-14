<template>
  <a
    :href="`/blog/${id}`"
    target="_blank"
    class="mx-3 my-5 flex h-24 w-8/12 justify-around space-x-4 rounded px-7 py-2 shadow-sm">
    <!-- 封面 -->
    <div class="h-auto w-auto">
      <img class="h-full bg-center" v-lazy="imgSrc" alt="加载中" />
    </div>
    <div class="flex w-4/5 flex-col">
      <h2>{{ title }}</h2>
      <div class="flex w-full justify-between text-sm text-gray-400">
        <div class="">{{ desc }}</div>
        <div class="">{{ time }}</div>
      </div>
    </div>
  </a>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import dayjs from 'dayjs'

const props = defineProps({
  id: String,
  title: String,
  desc: String,
  time: String,
  imgSrc: { type: String, default: '/src/assets/img/Lvshu.png' },
})

const time = ref(dayjs(props.time).format('YY-MM-DD hh:mm'))
</script>

<style scoped></style>
