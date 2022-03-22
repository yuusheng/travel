<template>
  <ul class="text-white">
    <li>名字：{{ user.name }}</li>
    <li>邮箱：{{ user.email }}</li>
  </ul>
</template>

<script setup>
import { onBeforeMount } from 'vue'
import { useStore } from 'vuex'

const user = useStore().state.user
console.log('user', user)
</script>

<style lang="scss" scoped></style>
