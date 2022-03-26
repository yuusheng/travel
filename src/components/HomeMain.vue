<template>
  <div class="md:flex lg:h-[35rem] md:h-[20rem] w-full">
    <div class="text-3xl md:text-5xl h-full md:w-96 md: flex flex-col items-center justify-center p-6 mx-7 pt-0">
      <div class="w-full">
        <div class="font-bold text-gray-700">
          快来和我们一起<br />
          <span class="text-theme font-bold">旅行吧！</span>
        </div>
        <div class="text-gray-400 text-sm md:text-xl">
          Come and <span class="text-theme/90 font-extrabold">travel</span> with us !
        </div>
      </div>
      <div class="flex w-full my-3">
        <input
          class="h-8 w-4/5 px-2 border border-theme rounded focus:border-0 focus:ring-blue-300 text-base"
          v-model="inputContent"
          @input="inputChange"
        />
        <button
          class="h-8 w-1/5 ml-[0.3rem] text-sm bg-theme hover:bg-indigo-500 text-white rounded font-bold shadow"
          @click="handleSearch"
        >
          搜索
        </button>
      </div>
    </div>
    <!-- 右边图片 -->
    <div class="hidden md:flex md:items-center h-auto w-[calc(100%-27.5rem)] relative overflow-hidden">
      <img class="absolute" src="@/assets/img/homepage.jpeg" alt="" />
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

<style lang="scss" scoped></style>
