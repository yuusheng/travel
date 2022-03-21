<template>
  <img
    class="inline object-cover h-12 w-12 md:mx-6 rounded-full shadow-lg border border-theme absolute top-4 right-7 md:transition-all md:duration-500 ease-in-out z-50"
    :src="props.imgUrl"
    alt=""
  />
</template>

<script setup>
const props = defineProps({
  imgUrl: String,
})
</script>

<style lang="scss" scoped></style>
