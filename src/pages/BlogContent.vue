<template>
  <main class="flex justify-between">
    <aside class="flex h-screen w-2/5 flex-col items-center justify-center">
      <h1 class="text-4xl font-bold">{{ data.title }}</h1>
      <div>{{ data.author }}</div>
    </aside>
    <article class="w-3/5 p-20">
      <header class="mb-6">
        <h2 class="my-5 text-3xl font-bold">{{ data.desc }}</h2>
        <div class="text-gray-500">{{ data.create_time }}</div>
      </header>
      <div>{{ data.content }}</div>
      <div class="inline-flex" v-for="item in data.tags" :key="item">
        <blog-tag>{{ item }}</blog-tag>
      </div>
    </article>
  </main>
</template>

<script setup>
import axios from 'axios'
import { onBeforeMount, ref } from 'vue'
import { useRoute } from 'vue-router'
import BlogTag from '../components/BlogTag.vue'

const route = useRoute()
const blogId = ref(route.params.id)
const data = ref({})

axios.get(`/api/article/${blogId.value}`).then((res) => {
  data.value = res.data
  console.log(data.value)
})
</script>

<style lang="scss" scoped></style>
