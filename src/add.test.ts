import { expect, it } from 'vitest'
import add from './add'

it('should add two numbers', () => {
  const result = add(4, 10)
  expect(result).toBe(14)
})
