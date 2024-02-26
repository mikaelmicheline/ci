import { expect, it } from 'vitest'
import sum from './sum'

it('should sum two numbers', () => {
  const result = sum(4, 10)
  expect(result).toBe(14)
})
