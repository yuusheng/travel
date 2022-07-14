<template>
  <div class="my-5 space-y-5 px-14">
    <input v-model="title" placeholder="请输入标题" type="text" />
    <mavon-editor v-model="articleContent"></mavon-editor>

    <button @click="handleSubmit">submit</button>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { uploadArticle } from '@/http'
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
import { useUserStore } from '@/store'

const articleContent = ref('')
const title = ref('')
// 配置 mavon editor
const props = defineProps({
  modelValue: {
    type: String,
    default: '',
  },
})
const emits = defineEmits(['update:modelValue'])
watch(
  () => articleContent.value,
  (v) => {
    emits('update:modelValue', v)
  }
)

// const handleChange = (value) => {
//   console.log(value)
// }

// 发布文章
const store = useUserStore()
const handleSubmit = async () => {
  // todo 数据校验
  const data = {
    title: title.value,
    author: store.user.name,
    content: articleContent.value,
  }
  console.log(articleContent.value)
  await uploadArticle(data)
}
</script>

<style scoped></style>
