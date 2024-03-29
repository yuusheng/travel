<template>
  <main
    class="min-h-screen flex-col md:mt-0 md:flex md:flex-row md:justify-between"
    v-load="loading">
    <aside
      class="fixed top-0 left-0 z-50 w-screen bg-white px-2 py-2 md:h-screen md:w-3/12 md:space-y-12 md:pl-8">
      <div
        class="z-50 flex items-center space-x-3 md:mt-28 md:flex-col md:justify-center">
        <img
          @click="toAuthorPage"
          class="h-10 w-auto cursor-pointer md:h-20"
          src="@/assets/img/Lvshu.png"
          alt="author" />
        <h1 class="hidden md:mx-auto md:block md:text-4xl md:font-bold">
          {{ data?.title }}
        </h1>
        <div
          class="text-xl font-bold md:mx-auto md:block md:font-light md:text-gray-500">
          {{ data?.author }}
        </div>
      </div>
      <!-- 目录 -->
      <div v-if="data?.content" class="hidden md:ml-8 md:block">
        <span class="mt-10 text-gray-700">文章目录</span>
        <div
          class="ml-6 mt-7 text-[0.8rem] text-gray-400"
          v-html="data?.content.toc"></div>
      </div>

      <base-comment></base-comment>
    </aside>

    <article
      class="space-y-6 px-10 md:ml-[25%] md:mb-28 md:w-9/12 md:px-20 md:py-3">
      <header class="mb-6">
        <h2 class="my-1 font-bold md:my-5 md:text-3xl">{{ data?.desc }}</h2>
        <div class="text-gray-500">{{ data?.create_time }}</div>
      </header>
      <div>
        <!--* 解析Markdown -->
        <div v-if="data?.content" v-html="data.content.content"></div>
        <div class="text-gray-500" v-if="updateShow">
          {{ data?.update_time }}
        </div>
      </div>
      <div>
        <div class="inline-flex" v-for="item in data?.tags" :key="item">
          <blog-tag>{{ item }}</blog-tag>
        </div>
      </div>
    </article>
  </main>
</template>

<script setup lang="ts">
import dayjs from 'dayjs'
import { computed, onMounted, Ref, ref } from 'vue'
import { useRoute } from 'vue-router'
import BlogTag from '@/components/BlogTag.vue'
import { markdown } from '@/utils'
import { getArticleContentById, ArticleContent } from '@/http'
import BaseComment from '@/components/BaseComment.vue'

const route = useRoute()
const blogId = ref(route.params.id as string)
const data: Ref<ArticleContent | undefined> = ref()
const loading = ref(true)

onMounted(async () => {
  data.value = await getArticleContentById(blogId)
  // 处理markdown
  data.value.content = markdown.marked(data.value.content)
  // 修改日期格式
  data.value.create_time = dayjs(data.value.create_time).format(
    'YYYY月MM日DD h:m'
  )
  data.value.update_time = dayjs(data.value.update_time).format(
    'YYYY月MM日DD h:m'
  )
  // 更改标题为当前页面标题
  document.title = data.value.title
  loading.value = false
})

// update_time是否显示
const updateShow = computed(
  () => data.value?.create_time !== data.value?.update_time
)

function toAuthorPage() {}
</script>

<style lang="scss" scoped></style>
