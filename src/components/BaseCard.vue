<template>
  <div
    class="mx-[0.23rem] my-1 h-60 w-[10.5rem] cursor-pointer rounded bg-gray-700 shadow md:mx-4 md:h-60 md:w-96"
    @click="handleDetail">
    <div class="h-3/4"><img :src="imgSrc" alt="" /></div>
    <section class="grid w-full px-2">
      <h3><slot></slot></h3>
      <footer class="flex w-full flex-row-reverse text-second-text">
        <slot name="footer"></slot>
      </footer>
    </section>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const props = defineProps({
  imgSrc: String,
  url: String,
})

const router = useRouter()

const handleDetail = () => {
  console.log('object')
  // 添加路由
  router.push(props.url)
}
</script>

<style lang="scss" scoped></style>
