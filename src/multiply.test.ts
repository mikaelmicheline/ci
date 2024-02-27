import { expect, it } from 'vitest'
import multiply from './multiply'

it('should multiply tow numbers', () => {
  const result = multiply(6, 4)
  expect(result).toBe(24)
})
