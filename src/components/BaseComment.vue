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
  getIfLiked,
  likeByArticleId,
  cancleLike,
  dislikeByArticleId,
  cancelDislike,
} from '@/http'
import { withBase } from '@/utils'
import { computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'

const id = useRoute().fullPath.split('/')[2]

let isLiked = $ref(false)
let isDisliked = $ref(false)

const likeImgUrl = computed(() =>
  isLiked ? withBase(`/liked.png`) : withBase(`/like.png`)
)

async function handleLike() {
  if (!isLiked) {
    let res = await likeByArticleId(id)
    if (res.success) isLiked = true
    else console.error(res.message)
  } else {
    let res = await cancleLike(id)
    if (res.success) isLiked = false
    else console.error(res.message)
  }
}

const dislikeImgUrl = computed(() =>
  isDisliked ? withBase('/dislike.png') : withBase('/disliked.png')
)

function handleDisLike() {
  if (!isDisliked) {
    dislikeByArticleId(id)
    isDisliked = true
  } else {
    cancelDislike(id)
    isDisliked = false
  }
}

onMounted(async () => {
  let res = await getIfLiked(id)
  if (res.success) {
    isLiked = res.liked
    isDisliked = res.disliked
  }
})
</script>

<style scoped></style>
