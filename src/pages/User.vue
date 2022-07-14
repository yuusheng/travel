<template>
  <ul class="container p-10 dark:text-white" v-load="loading">
    <li>名字：{{ user?.name }}</li>
    <li>邮箱：{{ user?.email }}</li>
    <li>生日：{{ profile?.birth }}</li>
    <li>性别：{{ profile?.sex }}</li>
  </ul>
</template>

<script setup>
import { ref, onBeforeMount } from 'vue'
import { useUserStore } from '@/store'
import { getProfile } from '@/http'

const user = ref()
const store = useUserStore()
const profile = ref()
const loading = ref(true)

onBeforeMount(async () => {
  user.value = store.user
  profile.value = await getProfile()
  // router.push(`/user/${user.value.id}`)
  loading.value = false
})
</script>

<style lang="scss" scoped></style>
