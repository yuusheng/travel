<template>
  <main class="bg-indigo-600"><Nav></Nav></main>
  <div>this is home page</div>
  <el-input v-model="b"></el-input>
  <div>{{ b }}</div>
  <el-button @click="handleClick">fff</el-button>
</template>

<script setup>
import { ref } from 'vue'
import Nav from '../components/Nav.vue'

const a = ref(1)

const handleClick = () => {
  a.value++
  console.log(a.value)
}

const b = ref('')
</script>

<style lang="scss" scoped></style>
