import { Ref } from 'vue'
import { get, post } from './http'

type ArticleList = any
type Article = {
  title: string
  author: string
  content: string
}
/**
 * 发布文章
 * @param {Object} data 文章内容
 */
export async function uploadArticle(data: Article) {
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
  let articleList: Article[] = await getArticleList(`/api/article/user/${user}`)
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

export type Content = {
  content: string
  toc: string
}

export interface ArticleContent {
  author: string
  create_time: string
  desc: string
  content: Content
  keywords: string[]
  like_users: string[]
  meta: {
    comments: number
    likes: number
    views: number
  }
  numbers: string
  state: number
  tags: string[]
  title: string
  update_time: string
  _id: string
}

// type MarkedType = keyof ArticleContent

/**
 * 根据id获取文章内容
 * @param {Ref<string>} id
 * @returns {ArticleContent} 文章内容
 */
export async function getArticleContentById(id: Ref<string>) {
  let data: ArticleContent = await get(`/api/article/${id.value}`)
  return data
}

type ArticleListResponse = {
  success: boolean
  articleList: any[]
  msg?: string
}

//  base get article api
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
