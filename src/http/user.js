import axios from 'axios'
import { useStore } from 'vuex'

// 登录
export const signIn = async (name = '', email = '', password) => {
  let data = {
    name,
    email,
    password,
  }

  try {
    let res = await axios.post('/api/users/login', data)
    console.log(res)
    if (res.data.success) {
      // 设置localStorage
      setStorage(res.data.token)
      // 返回token
    }
    return res.data
  } catch (e) {
    alert(e.msg)
  }
}

// 注册
export const getVerifyCode = async (email) => {
  const data = { email }
  try {
    let res = await axios.post('/api/users/auth-code', data)
    if (res.data.success) {
      return res.data
    } else {
      alert(res.data.msg)
      return res.data
    }
  } catch (e) {
    alert(e.message)
    return {}
  }
}

export const signUp = async (email, verifyCode, password) => {
  let data = { email, name: 'kevin', code: verifyCode, password }
  try {
    let res = await axios.post('/api/users/register', data)
    // if (res.data.success) {
    //   console.log(res)
    // }
    return res.data
    // todo 注册之后如果成功要进行登录
    console.log(res.data)
  } catch (e) {
    alert(e.message)
  }
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
  return localStorage.getItem('Authorization')
    ? localStorage.getItem('Authorization')
    : null
}

// 登出
export const signOut = () => {
  localStorage.removeItem('Authorization')
  const store = useStore()
  location.reload()
  console.log('退出成功')
}
