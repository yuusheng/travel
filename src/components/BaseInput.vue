<template>
  <div class="group relative z-0 mb-6 w-full">
    <input
      :type="pwd ? 'password' : ''"
      class="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-blue-500"
      placeholder=" "
      :value="modelValue"
      @input="handleInput"
      required
      @change="changeFn" />
    <label
      class="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 dark:text-gray-400 peer-focus:dark:text-blue-500"
      >{{ label }}</label
    >
    <p v-if="showError" class="text-xs text-red-500">{{ errMsg }}</p>
  </div>
</template>

<script setup>
import { computed } from 'vue'

import code from '@/http'

const props = defineProps({
  label: String,
  pwd: Boolean,
  modelValue: String,
  error: { type: Number },
  errorList: { type: Array, default: [] },
  changeFn: Function,
})

const showError = computed(() => props.errorList.includes(props.error))

const errMsg = computed(() => (showError ? code[props.error] : ''))
const emits = defineEmits(['update:modelValue'])
const handleInput = (e) => {
  let childEventContent = e.target.value
  emits('update:modelValue', childEventContent)
}
// 输入框
const handleChange = () => {
  props.changeFn()
}
</script>

<style lang="scss" scoped></style>
