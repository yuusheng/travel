<template>
  <ul class="container p-10">
    <li>名字：{{ user.name }}</li>
    <li>邮箱：{{ user.email }}</li>
    <li>生日：{{ profile.birth }}</li>
    <li>性别：{{ profile.sex }}</li>
  </ul>
</template>

<script setup>
import { watchEffect, ref } from 'vue'
import { useStore } from 'vuex'
import { getProfile } from '../http/profile'

const store = useStore()
const user = ref({})
watchEffect(() => {
  user.value = store.state.user
})

const profile = ref({})
watchEffect(async () => {
  profile.value = await getProfile()
})
</script>

<style lang="scss" scoped></style>
