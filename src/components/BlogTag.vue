<template>
  <span
    class="m-1 cursor-pointer rounded-md bg-secondary px-1 text-sm text-white hover:bg-indigo-400 md:px-2 md:py-[0.1rem]"
    @click="handleTag"
    ># <slot
  /></span>
</template>

<script setup>
import { useSlots } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const slot = useSlots().default()[0].children

// console.log('slot', slot)
const handleTag = () => {
  router.push(`/tag/${slot}`)
}
</script>
