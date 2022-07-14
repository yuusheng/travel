<template>
  <router-view></router-view>
</template>

<script setup lang="ts">
import { useUserStore } from '@/store'
import { currentUser } from '@/http'
import { getStorage, setStorage } from '@/utils'
import { onBeforeMount } from 'vue'
import { User } from '@/types'

const userStore = useUserStore()

onBeforeMount(async () => {
  if (!userStore.status) {
    // 获取token
    let token = getStorage()
    if (token) {
      // 获取当前用户
      let user: User = await currentUser(token)
      // 修改vuex
      userStore.login(user)
      console.log('commit success')
    } else {
      userStore.logout()
    }
  }
})
</script>

<style></style>
