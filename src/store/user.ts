import { defineStore } from 'pinia'
import { ref } from 'vue'
import { User } from '@/types'
import { useStorage } from '@vueuse/core'

export const useUserStore = defineStore('user', () => {
  const user = ref<User>({
    name: '',
    email: '',
    avatar: '',
    id: '',
  })

  let status = ref(false)

  const token = useStorage('Authorization', '')

  function login(userInfo: User) {
    user.value = userInfo
    status.value = true
  }

  function logout() {
    Object.keys(user.value).forEach((key) => {
      user[key] = ''
    })
    status.value = false
  }

  return {
    user,
    status,
    token,
    login,
    logout,
  }
})
