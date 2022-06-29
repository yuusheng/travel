<template>
  <!-- <building>History</building> -->
  <BaseArticleList
    v-for="article in articles"
    :key="article._id"
    :id="article._id"
    :title="article.title"
    :desc="article.desc"
    :time="article.create_time" />
</template>

<script setup>
import Building from './Building.vue'
import BaseArticleList from '../components/BaseArticleList.vue'
import { onMounted, ref } from 'vue'
import { getArticleListByAuthorId } from '../http/article'
const articles = ref([])

onMounted(async () => {
  // 根据作者id获取列表
  articles.value = await getArticleListByAuthorId('6231ce1348a3ea31bb4e5246')
})
</script>

<style lang="scss" scoped></style>
