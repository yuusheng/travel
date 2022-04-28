import axios from 'axios'

export async function uploadArticle(data) {
  let res = await axios.post('/api/article', data)
  // todo handle error
  console.log(res)
}
