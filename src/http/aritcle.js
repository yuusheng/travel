import axios from 'axios'

export async function uploadArticle(data) {
  try {
    let res = await axios.post('/api/article', data)
    // todo handle error
    console.log(res)
  } catch (e) {
    console.log(e.message)
  }
}

/**
 * 根据作者id返回作品列表
 * @param {String} id 作者id
 * @return {Array} 博客列表
 */
export async function getArticleList(id) {
  try {
    let res = await axios.get(`/api/article/${id}`)
    if (res.data.success) {
      const { articleList } = res.data
      return articleList
    } else {
      console.log(res.data.msg)
      return []
    }
  } catch (e) {
    console.log(e.message)
    return []
  }
}
