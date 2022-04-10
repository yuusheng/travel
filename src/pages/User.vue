<template>
  <ul class="container p-10 dark:text-white">
    <li>名字：{{ user.name }}</li>
    <li>邮箱：{{ user.email }}</li>
    <li>生日：{{ profile.birth }}</li>
    <li>性别：{{ profile.sex }}</li>
  </ul>
</template>

<script setup>
import { ref, onBeforeMount } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
import { getProfile } from '../http/profile'

const user = ref({})
const store = useStore()
const profile = ref({})
const loading = ref(true)
const router = useRouter()
onBeforeMount(async () => {
  user.value = store.state.user
  profile.value = await getProfile()
  // router.push(`/user/${user.value.id}`)
  loading.value = false
})
</script>

<style lang="scss" scoped></style>
