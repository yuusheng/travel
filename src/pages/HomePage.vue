<template>
  <main class="bg-indigo-600"><Nav></Nav></main>
  <div>this is home page</div>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import Nav from '../components/Nav.vue'

const route = useRoute()
const router = useRouter()
</script>

<style lang="scss" scoped></style>
