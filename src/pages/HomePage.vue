<template>
  <the-header></the-header>
  <home-main></home-main>
  <div class="h-screen w-full"></div>
  <div
    class="flex w-full justify-center bg-indigo-600/95 py-3 text-xs text-white md:py-5 md:text-base">
    <a href="https://beian.miit.gov.cn/" target="_blank"
      >晋ICP备2022003109号-1</a
    >
    &nbsp©2016 - 2021 Copyright&nbsp
    <a href="http://lvshu.yuusheng.cn"> 旅书</a>
  </div>
</template>

<script setup>
import TheHeader from '../components/TheHeader.vue'
import HomeMain from '../components/HomeMain.vue'
</script>

<style lang="scss" scoped></style>
