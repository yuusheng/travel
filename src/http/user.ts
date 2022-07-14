import { post, get } from './http'
import { useUserStore } from '@/store'
import { getStorage, setStorage } from '@/utils'
import { User } from '@/types'

export type SignInState = {
  success: boolean
  token?: string
  code?: number
}

// 登录
export const signIn = async (
  name = '',
  email = '',
  password: string
): Promise<SignInState> => {
  let data = {
    name,
    email,
    password,
  }

  let res: SignInState = await post('/api/users/login', data)
  if (res.success) {
    // 设置localStorage
    setStorage(res.token as string)
    // 返回token
  }
  return res
}

type VerifyCodeResponse = {
  success: boolean
  msg: string
}
// 注册
export const getVerifyCode = async (
  email: string
): Promise<VerifyCodeResponse | undefined> => {
  const data = { email }
  try {
    let res: VerifyCodeResponse = await post('/api/users/auth-code', data)
    if (res.success) {
      return res
    } else {
      alert(res.msg)
      return res
    }
  } catch (e: any) {
    alert(e.message)
  }
}

type SignUpResponse = {
  success: boolean
  code: number
}
export const signUp = async (
  email: string,
  verifyCode: string,
  password: string
): Promise<SignUpResponse | undefined> => {
  let data = { email, name: 'kevin', code: verifyCode, password }

  let res: SignUpResponse = await post('/api/users/register', data)
  // if (res.data.success) {
  //   console.log(res)
  // }
  return res
  // todo 注册之后如果成功要进行登录
}

// 当前用户状态
export const currentUser = async (token: string) => {
  let res: User = await get('/api/users/current', {
    headers: { Authorization: token },
  })
  return res
}

// 登出
export const signOut = () => {
  localStorage.removeItem('Authorization')
  const store = useUserStore()
  store.logout()
  location.reload()
  console.log('退出成功')
}
