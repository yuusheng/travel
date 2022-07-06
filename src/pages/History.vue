<template>
  <div class="flex h-screen flex-col">
    <div class="h-1/3 flex-1">?</div>
    <div class="w-full flex-1">
      <BaseArticleList
        v-for="article in articles"
        :key="article._id"
        :id="article._id"
        :title="article.title"
        :desc="article.desc"
        :time="article.create_time" />
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { getArticleListByAuthorId } from '../http/article'
const articles = ref([])

onMounted(async () => {
  // 根据作者id获取列表
  articles.value = await getArticleListByAuthorId('6231ce1348a3ea31bb4e5246')
})
</script>

<style lang="scss" scoped></style>
