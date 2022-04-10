<template>
  <span
    class="m-1 cursor-pointer rounded-md bg-secondary px-2 py-[0.1rem] text-white hover:bg-indigo-400"
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
