<template>
  <router-view></router-view>
</template>

<script setup lang="ts">
import { useStore } from 'vuex'
import { currentUser, getStorage } from './http/user'
import { onBeforeMount } from 'vue'

const store = useStore()

onBeforeMount(async () => {
  if (!store.state.status) {
    // 获取token
    let token = getStorage()
    if (token) {
      // 获取当前用户
      let user = await currentUser(token)
      // 修改vuex
      store.commit('login', user)
      console.log('commit success')
    } else {
      store.commit('logout')
    }
  }
})
</script>

<style></style>
