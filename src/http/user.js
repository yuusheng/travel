import { post, get } from './http'
import { useStore } from 'vuex'

// 登录
export const signIn = async (name = '', email = '', password) => {
  let data = {
    name,
    email,
    password,
  }

  let res = await post('/api/users/login', data)
  if (res.success) {
    // 设置localStorage
    setStorage(res.token)
    // 返回token
  }
  return res
}

// 注册
export const getVerifyCode = async (email) => {
  const data = { email }
  try {
    let res = await post('/api/users/auth-code', data)
    if (res.data.success) {
      return res
    } else {
      alert(res.msg)
      return res
    }
  } catch (e) {
    alert(e.message)
    return {}
  }
}

export const signUp = async (email, verifyCode, password) => {
  let data = { email, name: 'kevin', code: verifyCode, password }

  let res = await post('/api/users/register', data)
  // if (res.data.success) {
  //   console.log(res)
  // }
  return res
  // todo 注册之后如果成功要进行登录
  console.log(res.data)
}

// 当前用户状态
export const currentUser = async (token) => {
  let res = await get('/api/users/current', {
    headers: { Authorization: token },
  })
  return res
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
