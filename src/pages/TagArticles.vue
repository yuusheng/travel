<template>
  <div></div>
</template>

<script setup>
import axios from 'axios'
import { useRoute } from 'vue-router'

const route = useRoute()
let tag = route.params.name

axios.get(`/api/tag/${tag}`).then((res) => {
  console.log(res)
})
</script>

<style lang="scss" scoped></style>
