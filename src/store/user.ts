import { defineStore } from 'pinia'
import { ref } from 'vue'
import { User } from '@/types'

export const useUserStore = defineStore('user', () => {
  const user = ref<User>({
    name: '',
    email: '',
    avatar: '',
    id: '',
  })

  let status = $ref(false)

  function login(userInfo: User) {
    user.value = userInfo
    status = true
  }

  function logout() {
    Object.keys(user.value).forEach((key) => {
      user[key] = ''
    })
    status = false
  }

  return $$({
    user,
    status,
    login,
    logout,
  })
})
