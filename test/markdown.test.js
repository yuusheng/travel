import markdown from '../src/utils/markdown'
import { expect, test } from 'vitest'

test('markdown class test', () => {
  expect(markdown('正常段落')).toBe('')
})
