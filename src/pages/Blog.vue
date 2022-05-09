<template>
  <the-header></the-header>
  <BaseButton />
  <base-button type="small">large</base-button>
  <building>Blog</building>

  <!-- <base-markdown-editor></base-markdown-editor> -->
</template>

<script setup>
import Building from './Building.vue'
import TheHeader from '../components/TheHeader.vue'
import BaseEditor from '../components/BaseEditor.vue'
import BaseMarkdownEditor from '../components/BaseMarkdownEditor.vue'
import BaseButton from '../components/BaseButton.vue'
</script>

<style lang="scss" scoped></style>
