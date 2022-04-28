<template>
  <div class="flex w-8/12 rounded bg-slate-700 px-5 py-2">
    <!-- 封面 -->
    <section class="h-full w-20">
      <img src="" alt="" />
    </section>
    <section>
      <h2>title</h2>
      <div>
        <div>desc</div>
        <div>time</div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { watch } from '@vue/runtime-core'
import dayjs from 'dayjs'
const props = defineProps({
  title: String,
  desc: String,
  time: String,
  imgSrc: String,
})

watch(
  () => props.time,
  () => {
    props.time = dayjs(props.time).format('YY-MM-DD hh:mm')
  }
)
</script>

<style scoped></style>
