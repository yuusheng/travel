<template>
  <div class="my-5 space-y-5 px-14">
    <input v-model="title" placeholder="请输入标题" type="text" />
    <mavon-editor v-model="articleContent"></mavon-editor>

    <button @click="handleSubmit">submit</button>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import { uploadArticle } from '../http/article'
import { mavonEditor } from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
import { useStore } from 'vuex'

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
const store = useStore()
const handleSubmit = async () => {
  // todo 数据校验
  const data = {
    title: title.value,
    author: store.state.user.name,
    content: articleContent.value,
  }
  console.log(articleContent.value)
  await uploadArticle(data)
}
</script>

<style scoped></style>
