<template>
  <div class="home-px mt-24">
    <span id="recommend">内容推荐</span>

    <section class="flex w-full flex-wrap overflow-hidden">
      <base-card
        :url="`/blog/${article._id}`"
        :imgSrc="'http:' + article.author.avatar"
        :key="article._id"
        v-for="article in articleList">
        南京一日游
        <template #title>
          {{ article.title }}
        </template>
        <template #footer>
          {{ article.create_time }}
        </template>
        <template #desc>
          {{ article.desc }}
        </template>
        <template #user-name>
          {{ article.author.name }}
        </template>
      </base-card>
    </section>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { useStore } from 'vuex'
import { getArticleListByAuthorId } from '../http/aritcle'

import BaseCard from './BaseCard.vue'

const store = useStore()
const articleList = ref([])
onMounted(async () => {
  articleList.value = await getArticleListByAuthorId('6231ce1348a3ea31bb4e5246')
  console.log(articleList.value)
})
</script>

<style lang="scss" scoped></style>
