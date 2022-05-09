<template>
  <button
    class="text mr-2 mb-2 rounded bg-blue-600 text-white shadow hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-400 disabled:cursor-not-allowed disabled:bg-blue-400 disabled:text-white"
    :disabled="disabled"
    :class="dynamicClass">
    <slot> base button </slot>
  </button>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  type: {
    type: String,
    default: 'primary',
  },
  disabled: Boolean,
})

const dynamicClass = computed(() => {
  switch (props.type) {
    case 'verify':
      return 'm-4 w-3/5 text-xs -translate-y-3'
    case 'primary':
      return 'px-5 py-2.5 text-sm'
    case 'login':
      return 'w-28 px-6 py-2'
    default:
      return 'px-5 py-2.5'
  }
})
</script>

<style lang="scss" scoped></style>
