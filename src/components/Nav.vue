<template>
  <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
    <el-menu-item index="1">首页</el-menu-item>
    <el-menu-item index="2" disabled>信息</el-menu-item>
    <el-menu-item index="3">用户</el-menu-item>
  </el-menu>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const activeIndex = ref('1')

const router = useRouter()
const handleSelect = (key, keyPath) => {
  if (key === '3') {
    router.push('/user')
  }
}
</script>
