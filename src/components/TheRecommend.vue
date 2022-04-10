<template>
  <div class="home-px flex w-screen flex-col items-center">
    <!-- <span>内容推荐</span> -->

    <section class="flex w-full flex-wrap overflow-hidden">
      <base-card :url="'/'">
        南京一日游
        <template #footer>
          <div>footer</div>
        </template>
      </base-card>
      <base-card>
        name
        <template #footer>
          <div>footer</div>
        </template>
      </base-card>
      <base-card>
        name
        <template #footer>
          <div>footer</div>
        </template>
      </base-card>
    </section>
  </div>
</template>

<script setup>
import BaseCard from './BaseCard.vue'
</script>

<style lang="scss" scoped></style>
