<template>
  <main class="mt-16 w-screen md:mt-0 md:flex md:justify-between">
    <aside
      class="flex flex-col items-center justify-center space-y-12 md:h-screen md:w-3/12 md:pl-8">
      <div class="spay4 flex flex-col items-center">
        <h1 class="mx-auto text-4xl font-bold">{{ data.title }}</h1>
        <div class="mx-auto text-gray-500">{{ data.author }}</div>
      </div>
      <!-- 目录 -->
      <div class="hidden md:block">
        <span class="mt-10 text-gray-500">文章目录</span>
        <div
          class="text-[0.8rem] text-gray-400"
          v-if="data.content"
          v-html="data.content.toc"></div>
      </div>
    </aside>
    <article class="space-y-6 p-10 md:w-9/12 md:p-20">
      <header class="mb-6">
        <h2 class="my-1 font-bold md:my-5 md:text-3xl">{{ data.desc }}</h2>
        <div class="text-gray-500">{{ data.create_time }}</div>
      </header>
      <div>
        <!--* 解析Markdown -->
        <div v-if="data.content" v-html="data.content.content"></div>
        <div class="text-gray-500" v-if="updateShow">
          {{ data.update_time }}
        </div>
      </div>
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
import { computed, ref } from 'vue'
import { useRoute } from 'vue-router'
import BlogTag from '../components/BlogTag.vue'
import markdown from '../utils/markdown'

const route = useRoute()
const blogId = ref(route.params.id)
const data = ref({})

axios.get(`/api/article/${blogId.value}`).then((res) => {
  data.value = res.data
  data.value.content = markdown.marked(data.value.content)

  // console.log(data.value.content)
  // console.log(data.value)
})

// update_time是否显示
const updateShow = computed(
  () => data.value.create_time !== data.value.update_time
)
</script>

<style lang="scss" scoped></style>
