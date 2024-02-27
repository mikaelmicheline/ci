import { expect, it } from 'vitest'
import subtract from './subtract'

it('should subtract a number from another', () => {
  const result = subtract(12, 9)
  expect(result).toBe(3)
})
