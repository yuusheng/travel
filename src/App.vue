<template>
  <router-view></router-view>
</template>

<script setup>
import { useStore } from 'vuex'
import axios from './request'
import { currentUser } from './http/user'

// const store = useStore()
// if (store.state.user.token) {
//   let res = currentUser(store.state.user.token)
//   console.log(res)
// }
</script>

<style></style>
