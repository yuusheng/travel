<template>
  <div class="h-60 w-[48%] rounded shadow">
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
const props = defineProps({
  imgSrc: String,
})
</script>

<style lang="scss" scoped></style>
