<template>
  <img
    class="absolute top-4 right-7 z-50 inline h-12 w-12 rounded-full border border-theme object-cover shadow-lg ease-in-out md:top-6 md:mx-6 md:transition-all md:duration-500"
    :src="props.imgUrl"
    alt="" />
</template>

<script setup>
const props = defineProps({
  imgUrl: String,
})
</script>

<style lang="scss" scoped></style>
