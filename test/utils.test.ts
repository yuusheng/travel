import { describe, expect, it } from 'vitest'
import { withBase } from '@/utils'

describe('url test', () => {
  it('with base', () => {
    expect(withBase('/public/empty.png')).toMatchInlineSnapshot('"/public/empty.png"')
  })
})
