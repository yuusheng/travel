import axios from 'axios'
import { useStore } from 'vuex'

// 登录
export const signIn = async (name = '', email = '', password) => {
  let data = {
    name,
    email,
    password,
  }
  let res = await axios.post('/api/users/login', data)
  if (res.data.success) {
    // 设置localStorage
    setStorage(res.data.token)
    // 返回token
    return res.data
  } else throw new Error('登录失败')
}

// 注册
export const signUp = async (email, name, password) => {
  let data = { email, name, password }
  let res = await axios.post('/api/users/register', data)
  // todo 注册之后如果成功要进行登录
  console.log(res.data)
}

// 当前用户状态
export const currentUser = async (token) => {
  let res = await axios.get('/api/users/current', {
    headers: { Authorization: token },
  })
  return res.data
}

// 设置localStorage
export const setStorage = (token) => {
  localStorage.setItem('Authorization', token)
  console.log('设置localStorage成功')
}

// 获取localStorage
export const getStorage = () => {
  return localStorage.getItem('Authorization') ? localStorage.getItem('Authorization') : null
}

// 登出
export const signOut = () => {
  localStorage.removeItem('Authorization')
  const store = useStore()
  location.reload()
  console.log('退出成功')
}
