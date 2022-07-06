<template>
  <div class="flex space-x-2">
    <button @click="handleLike" class="h-8 w-8">
      <img :src="likeImgUrl" alt="" />
    </button>
    <button @click="handleDisLike" class="h-8 w-8">
      <img :src="dislikeImgUrl" alt="" />
    </button>
  </div>
</template>

<script setup lang="ts">
import {
  likeByArticleId,
  cancleLike,
  dislikeByArticleId,
  cancelDislike,
} from '@/http'
import { withBase } from '@/utils'
import { computed } from 'vue'

let isLiked = $ref(false)
let isDisliked = $ref(false)

const likeImgUrl = computed(() =>
  isLiked ? withBase(`/liked.png`) : withBase(`/like.png`)
)

function handleLike() {
  if (!isLiked) {
    likeByArticleId('', '')
    isLiked = true
  } else {
    cancleLike('', '')
    isLiked = false
  }
}

const dislikeImgUrl = computed(() =>
  isDisliked ? withBase('/dislike.png') : withBase('/disliked.png')
)

function handleDisLike() {
  if (!isDisliked) {
    dislikeByArticleId('', '')
    isDisliked = true
  } else {
    cancelDislike('', '')
    isDisliked = false
  }
}
</script>

<style scoped></style>
