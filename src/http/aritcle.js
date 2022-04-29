import axios from 'axios'

/**
 * 发布文章
 * @param {Object} data 文章内容
 */
export async function uploadArticle(data) {
  try {
    let res = await axios.post('/api/article', data)
    // todo handle error
    alert(res)
  } catch (e) {
    alert(e.message)
  }
}

/**
 * 根据作者id返回作品列表
 * @param {String} id 作者id
 * @return {Array} 博客列表
 */
export async function getArticleListByAuthorId(user) {
  let articleList = await getArticleList(`/api/article/${user}`)
  return articleList
}

/**
 * 根据标签名字获取文章列表
 * @param {String} tag 标签名字
 * @returns 文章列表
 */
export async function getArticleListByTag(tag) {
  let articleList = await getArticleList(`/api/article/tag/${tag}`)
  return articleList
}

/**
 * base get article api
 * @param {String} api 请求api
 * @returns {Array} 文章列表或空数组
 */
async function getArticleList(api) {
  try {
    let res = await axios.get(api)
    if (res.data.success) {
      const { articleList } = res.data
      return articleList
    } else {
      alert(res.data.msg)
      return []
    }
  } catch (e) {
    alert(e.message)
    return []
  }
}
