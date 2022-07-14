import { get, post, put } from './http'

type IfLike = { like: boolean; dislike: boolean }

export async function getIfLikeByAUId(articleId: string, userId: string) {
  let res: IfLike = await get(``)
  return res
}

export async function likeByArticleId(articleId: string, userId: string) {
  let res = await post(``)
  return res
}

export async function cancleLike(articleId: string, userId: string) {
  let res = await post(``)
  return res
}

export async function dislikeByArticleId(articleId: string, userId: string) {
  let res = await post(``)
  return res
}

export async function cancelDislike(articleId: string, userId: string) {
  let res = await post(``)
  return res
}
