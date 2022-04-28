import axios from 'axios'

export async function uploadArticle(data) {
  let res = await axios.post('/api/article', data)
  console.log(res)
}
