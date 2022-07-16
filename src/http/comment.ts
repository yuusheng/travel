import { get, post, put } from './http'
import { useUserStore } from '@/store'
type IfLike = { liked: boolean; disliked: boolean; success: boolean }

export async function getIfLiked(articleId: string) {
  let res: IfLike = await get(`/api/article/liked/${articleId}`, {
    headers: { Authorization: useUserStore().token },
  })
  return res
}

type LikeOrDislike = { success: boolean; message?: string }

export async function likeByArticleId(articleId: string) {
  let res: LikeOrDislike = await post(
    `/api/article/like`,
    {
      id: articleId,
    },
    {
      headers: { Authorization: useUserStore().token },
    }
  )
  return res
}

export async function cancleLike(articleId: string) {
  let res: LikeOrDislike = await post(
    `/api/article/cancelLike`,
    {
      id: articleId,
    },
    {
      headers: { Authorization: useUserStore().token },
    }
  )
  return res
}

export async function dislikeByArticleId(articleId: string) {
  let res: LikeOrDislike = await post(``)
  return res
}

export async function cancelDislike(articleId: string) {
  let res: LikeOrDislike = await post(``)
  return res
}
