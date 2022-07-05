import { markdown } from '@/utils'
import { describe, it, expect, test } from 'vitest'

describe('markdown', () => {
  it('正常段落', () => {
    expect(markdown.marked('正常段落')).toMatchInlineSnapshot(`
    {
      "content": "<p class=\\"w-full\\">正常段落</p>",
      "toc": "",
    }
  `)
  })

  it('照片', () => {
    expect(
      markdown.marked(
        '![](https://cdn.jsdelivr.net/gh/yuusheng/picgo/img/20220409142759.png)'
      )
    ).toMatchInlineSnapshot(`
      {
        "content": "<p class=\\"w-full\\"><img src=\\"https://cdn.jsdelivr.net/gh/yuusheng/picgo/img/20220409142759.png\\" alt=\\"\\"></p>",
        "toc": "",
      }
    `)
  })

  it('标题', () => {
    expect(markdown.marked('# 复杂度分析')).toMatchInlineSnapshot(`
      {
        "content": "<h1 class=\\"mb-3 \\" id=复杂度分析>复杂度分析</h1>
      ",
        "toc": "<ul>
      <li class=\\"hover:text-gray-700 list-none\\"><a href=\\"#复杂度分析\\">复杂度分析<a></li>
      </ul>
      ",
      }
    `)
  })
})
