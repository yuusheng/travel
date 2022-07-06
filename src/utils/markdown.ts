// 参考：https://www.cherylgood.cn/detail/5bdaf4722382b4646c27143b.html
import { marked } from 'marked'
import type { Content } from '@/http'

type Level = number

const tocObj: {
  add: (text: string, level: Level) => string
  toHTML: () => string
  toc: Array<{ anchor: string; level: Level; text: string }>
  index: number
} = {
  add(text, level) {
    // let anchor = `#toc${level}${++this.index}`
    ++this.index
    let anchor = `#${text}`
    this.toc.push({ anchor, level, text })
    return anchor.split('').splice(1).join('')
  },

  toHTML() {
    let levelStack: number[] = []
    let result = ''
    const addStartUL = () => {
      result += '<ul>\n'
    }
    const addEndUL = () => {
      result += '</ul>\n'
    }
    const addLI = (anchor: string, text: string) => {
      result += `<li class="hover:text-gray-700 list-none"><a href="${anchor}">${text}<a></li>\n`
    }
    this.toc.forEach((item) => {
      let levelIndex = levelStack.indexOf(item.level)
      if (levelIndex === -1) {
        levelStack.unshift(item.level)
        addStartUL()
        addLI(item.anchor, item.text)
      } else if (levelIndex === 0) {
        addLI(item.anchor, item.text)
      } else {
        while (levelIndex--) {
          levelStack.shift()
          addEndUL()
        }
        addLI(item.anchor, item.text)
      }
    })
    while (levelStack.length) {
      levelStack.shift()
      addEndUL()
    }
    this.toc = []
    this.index = 0
    return result
  },
  toc: [],
  index: 0,
}

class MarkUtils {
  #rendererMD

  constructor() {
    this.#rendererMD = new marked.Renderer()

    // 自定Markdown解析
    this.#rendererMD.heading = (text, level, raw) => {
      let anchor = tocObj.add(text, level)
      return `<h${level} class="mb-3 ${level >= 2 ? 'font-bold scroll-mt-1' : ''
        }" id=${anchor}>${text}</h${level}>\n`
    }
    this.#rendererMD.table = (header, body) => {
      return `<div class="relative my-3 overflow-x-auto shadow-md shadow-gray-100 sm:rounded-lg">
        <table class="w-full text-left text-gray-500">
          <thead class="bg-gray-50 uppercase text-gray-900 dark:bg-gray-700 dark:text-gray-400">
            ${header}
          </thead>
          ${body}
        </table>
      </div>`
    }
    this.#rendererMD.blockquote = (quote) => {
      return `<blockquote  class="p-4 italic border-l-4 bg-neutral-100 text-neutral-600 border-neutral-400 quote mb-3">${quote}</blockquote>`
    }
    this.#rendererMD.paragraph = (text) => {
      return `<p class="w-full">${text}</p>`
    }
    this.#rendererMD.strong = (text) => {
      return `<strong class="font-bold mx-[0.1rem]">${text}</strong>`
    }
    this.#rendererMD.listitem = (text) => {
      return `<li class="list-disc list-inside mb-2">${text}</li>`
    }
    this.#rendererMD.codespan = (text) => {
      return `<code class="bg-gray-100 text-indigo-700 p-1 mx-1 rounded">${text}</code>`
    }

    marked.setOptions({
      renderer: this.#rendererMD,
      headerIds: false,
      gfm: true,
      breaks: false,
      pedantic: false,
      sanitize: false,
      smartLists: true,
      smartypants: false,
    })
  }

  marked(data: any): Content {
    let content = ''
    let toc = ''

    if (data) {
      content = marked(data)
      toc = tocObj.toHTML()
    }
    return { content, toc }
  }
}

export const markdown = new MarkUtils()
