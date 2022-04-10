<template>
  <main class="mt-16 md:flex md:justify-between">
    <aside
      class="flex flex-col items-center justify-center space-y-4 md:h-screen md:w-3/12">
      <h1 class="text-4xl font-bold">{{ data.title }}</h1>
      <div class="text-gray-500 md:pl-24">{{ data.author }}</div>
    </aside>
    <article class="space-y-6 p-10 md:w-9/12 md:p-20">
      <header class="mb-6">
        <h2 class="my-1 font-bold md:my-5 md:text-3xl">{{ data.desc }}</h2>
        <div class="text-gray-500">{{ data.create_time }}</div>
      </header>
      <div>{{ data.content }}</div>
      <div>
        <div class="inline-flex" v-for="item in data.tags" :key="item">
          <blog-tag>{{ item }}</blog-tag>
        </div>
      </div>
    </article>
  </main>
</template>

<script setup>
import axios from 'axios'
import { ref } from 'vue'
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
