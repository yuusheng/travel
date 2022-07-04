import { get } from './http'
import dayjs from 'dayjs'
import { useRouter } from 'vue-router'
import { sex } from '../utils'
import { getStorage } from './user'

export type User = {
  _id: string
  name: string
  sex: string
  birth: string
}

export const getProfile = async () => {
  let token = getStorage()
  if (token) {
    let res: User = await get('/api/profile', {
      headers: { Authorization: token },
    })

    res.birth = dayjs(res.birth).format('YYYY-MM-DD')
    res.sex = sex[res.sex]
    return res
  }
  const router = useRouter()
  router.push('/login')
  return null
}
