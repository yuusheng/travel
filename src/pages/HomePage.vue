<template>
  <the-header></the-header>
  <home-main></home-main>
  <the-recommend></the-recommend>
  <div class="mt-20 h-screen w-full"></div>
  <!-- <footer
    class="flex w-full justify-center bg-xxl py-2 text-xs text-white md:py-3">
    <a href="https://beian.miit.gov.cn/" target="_blank"
      >晋ICP备2022003109号-1</a
    >
    &nbsp©2021 - 2022 Copyright&nbsp
    <a href="http://lvshu.yuusheng.cn"> 旅书</a>
  </footer> -->
  <base-footer></base-footer>
</template>

<script setup>
import TheHeader from '../components/TheHeader.vue'
import HomeMain from '../components/HomeMain.vue'
import TheRecommend from '../components/TheRecommend.vue'
import BaseFooter from '../components/BaseFooter.vue'
</script>

<style lang="scss" scoped></style>
