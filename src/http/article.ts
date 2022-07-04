import { get, post } from './http'

type ArticleList = {}
/**
 * 发布文章
 * @param {Object} data 文章内容
 */
export async function uploadArticle(data: string) {
  let res = await post('/api/article', data)
  // todo handle error
  alert(res)
}

/**
 * 根据作者id返回作品列表
 * @param {String} id 作者id
 * @return {Array} 博客列表
 */
export async function getArticleListByAuthorId(user: string) {
  let articleList = await getArticleList(`/api/article/user/${user}`)
  return articleList
}

/**
 * 根据标签名字获取文章列表
 * @param {String} tag 标签名字
 * @returns 文章列表
 */
export async function getArticleListByTag(tag: string) {
  let articleList = await getArticleList(`/api/article/tag/${tag}`)
  return articleList
}

type ArticleListResponse = {
  success: boolean
  articleList: any[]
  msg?: string
}

/**
 * base get article api
 * @param {String} api 请求api
 * @returns {Array} 文章列表或空数组
 */
async function getArticleList(api: string) {
  let res: ArticleListResponse = await get(api)
  if (res?.success) {
    const { articleList } = res
    return articleList
  } else {
    alert(res.msg)
    throw []
  }
}
