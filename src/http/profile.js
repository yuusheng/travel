import axios from 'axios'
import dayjs from 'dayjs'
import { useRouter } from 'vue-router'
import { sex } from '../assets/config/keys'
import { getStorage } from './user'

export const getProfile = async () => {
  let token = getStorage()
  if (token) {
    let res = await axios.get('/api/profile', {
      headers: { Authorization: token },
    })
    res.data.birth = dayjs(res.data.birth).format('YYYY-MM-DD')
    res.data.sex = sex[res.data.sex]
    return res.data
  }
  const router = useRouter()
  router.push('/login')
  return null
}
