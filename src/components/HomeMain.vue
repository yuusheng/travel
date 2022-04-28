<template>
  <div class="w-full md:flex md:h-[20rem] lg:h-[35rem]">
    <div
      class="md: mx-7 flex h-full flex-col items-center justify-center p-6 pt-0 text-3xl md:w-96 md:text-5xl">
      <div class="w-full">
        <div class="font-bold text-gray-700 dark:text-white">
          快来和我们一起<br />
          <span class="font-bold text-theme">旅行吧！</span>
        </div>
        <div class="text-sm text-gray-400 md:text-xl">
          Come and
          <span class="font-extrabold text-theme/90 dark:text-theme"
            >travel</span
          >
          with us !
        </div>
      </div>
      <div class="my-3 flex w-full">
        <input
          class="h-8 w-4/5 rounded border border-theme px-2 text-base focus:border-0 focus:ring-blue-300"
          v-model="inputContent"
          v-focus="true"
          @input="inputChange" />
        <button
          class="ml-[0.3rem] h-8 w-1/5 rounded bg-theme text-sm font-bold text-white shadow hover:bg-indigo-500"
          @click="handleSearch">
          搜索
        </button>
      </div>
    </div>
    <!-- 右边图片 -->
    <div class="img-container">
      <img src="@/assets/img/homepage.jpeg" alt="" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { debounce } from '../router/tools'

const router = useRouter()
const route = useRoute()
const inputContent = ref('')
const inputChange = debounce(() => {
  // if (!inputContent.value) {
  //   route.query = null
  // }
  router.push({ ...route.query, query: { q: inputContent.value } })
}, 500)

const handleSearch = () => {
  // todo 输入内容
}
</script>

<style scoped>
.img-container {
  @apply relative hidden h-auto w-[calc(100%-27.5rem)] overflow-hidden md:block md:bg-center;
}
</style>
