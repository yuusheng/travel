<template>
  <TheHeader></TheHeader>
  <div class="container">this is home page</div>
  <el-input v-model="inputContent" @input="inputChange"></el-input>
</template>

<script setup>
import TheHeader from '../components/TheHeader.vue'
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { debounce } from '../router/tools'

const router = useRouter()
const route = useRoute()
const inputContent = ref('')
const inputChange = debounce((content) => {
  router.push({ ...route.query, query: { q: content[0] } })
}, 500)
</script>

<style lang="scss" scoped></style>
