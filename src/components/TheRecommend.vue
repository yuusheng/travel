<template>
  <div class="home-px mt-24">
    <span id="recommend">内容推荐</span>

    <section class="flex w-full flex-wrap overflow-hidden">
      <base-card
        :url="`/blog/${article._id}`"
        :imgSrc="'http:' + article.author.avatar"
        :key="article._id"
        v-for="article in articleList"
        :article="article">
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

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useUserStore } from '@/store'
import { getArticleListByAuthorId } from '../http/article'

import BaseCard from './BaseCard.vue'

const store = useUserStore()
// todo add articleList type
const articleList = ref<any[]>([])
onMounted(async () => {
  articleList.value = await getArticleListByAuthorId('6231ce1348a3ea31bb4e5246')
})
</script>

<style lang="scss" scoped></style>
