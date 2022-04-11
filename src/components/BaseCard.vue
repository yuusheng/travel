<template>
  <div
    @click="handleDetail"
    class="mx-[1%] mt-16 mb-10 max-w-sm rounded-lg bg-white py-4 px-8 shadow-lg md:mt-12 md:w-[31%] md:max-w-none">
    <div class="-mt-16 flex justify-center md:justify-end">
      <img
        class="h-20 w-20 rounded-full border-2 border-theme object-cover"
        :src="imgSrc" />
    </div>
    <div>
      <h2 class="text-2xl font-semibold text-gray-800 md:text-3xl">
        Design Tools
        <slot name="title"></slot>
      </h2>
      <p class="mt-2 h-16 truncate text-gray-600">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae dolores
        deserunt ea doloremque natus error, rerum quas odio quaerat nam ex
        commodi hic, suscipit in a veritatis pariatur minus consequuntur! Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Quae dolores deserunt
        ea doloremque natus error, rerum quas odio quaerat nam ex commodi hic,
        suscipit in a veritatis pariatur minus consequuntur! Lorem ipsum dolor
        sit amet consectetur adipisicing elit. Quae dolores deserunt ea
        doloremque natus error, rerum quas odio quaerat nam ex commodi hic,
        suscipit in a veritatis pariatur minus consequuntur! Lorem ipsum dolor
        sit amet consectetur adipisicing elit. Quae dolores deserunt ea
        doloremque natus error, rerum quas odio quaerat nam ex commodi hic,
        suscipit in a veritatis pariatur minus consequuntur!
        <slot name="desc"></slot>
      </p>
    </div>
    <div class="mt-4 flex justify-end">
      <a href="#" class="text-xl font-medium text-indigo-500"
        >John Doe
        <slot name="user-name"></slot>
      </a>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const props = defineProps({
  imgSrc: {
    type: String,
    default:
      'https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80',
  },
  url: String,
})

const router = useRouter()

const handleDetail = () => {
  console.log('object')
  // 添加路由
  router.push(props.url)
}

// const avatar = ref(
//   'https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80'
// )
</script>

<style scoped></style>
