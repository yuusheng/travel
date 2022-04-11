<template>
  <main class="flex-col md:mt-0 md:flex md:flex-row md:justify-between">
    <aside
      class="fixed top-0 left-0 z-50 w-screen bg-white px-2 py-2 md:h-screen md:w-3/12 md:space-y-12 md:pl-8">
      <div
        class="z-50 md:mt-40 md:flex md:flex-col md:items-center md:justify-center">
        <img
          @click="toAuthorPage"
          class="h-20 cursor-pointer"
          src="@/assets/img/Lvshu.png"
          alt="author" />
        <h1 class="hidden md:mx-auto md:block md:text-4xl md:font-bold">
          {{ data.title }}
        </h1>
        <div class="text-gray-500 md:mx-auto md:block">
          {{ data.author }}
        </div>
      </div>
      <!-- 目录 -->
      <div class="hidden md:ml-8 md:block">
        <span class="mt-10 text-gray-500">文章目录</span>
        <div
          class="ml-6 mt-7 text-[0.8rem] text-gray-400"
          v-if="data.content"
          v-html="data.content.toc"></div>
      </div>
    </aside>

    <article
      class="space-y-6 px-10 md:ml-[25%] md:mb-28 md:w-9/12 md:px-20 md:py-3">
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
import dayjs from 'dayjs'
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
  data.value.create_time = dayjs(data.value.create_time).format(
    'YYYY月MM日DD h:m'
  )
  data.value.update_time = dayjs(data.value.update_time).format(
    'YYYY月MM日DD h:m'
  )
})

// update_time是否显示
const updateShow = computed(
  () => data.value.create_time !== data.value.update_time
)
</script>

<style lang="scss" scoped></style>
