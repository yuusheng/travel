<template>
  <ul>
    <li>名字：{{ user.name }}</li>
    <li>邮箱：{{ user.email }}</li>
  </ul>
</template>

<script setup>
import { useStore } from 'vuex'

const user = useStore().state.user
</script>

<style lang="scss" scoped></style>
