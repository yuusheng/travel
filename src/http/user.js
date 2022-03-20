import axios from 'axios'

// 登录
export const signIn = async (name = '', email = '', password) => {
  let data = {
    name,
    email,
    password,
  }
  let res = await axios.post('/api/users/login', data)
  if (res.data.success) {
    // todo
    return res.data
  } else throw new Error('登录失败')
}

// 注册
export const signUp = async (email, name, password) => {
  let data = { email, name, password }
  let res = await axios.post('/api/users/register', data)
  console.log(res.data)
}

// 当前用户状态
export const currentUser = async (token) => {
  let res = await axios.get('/api/users/current', {
    headers: { Authorization: token },
  })
  return res.data
}
