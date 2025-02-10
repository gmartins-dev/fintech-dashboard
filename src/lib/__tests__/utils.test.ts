import { formatCurrency, cn } from '../utils'

describe('utils', () => {
  describe('formatCurrency', () => {
    it('formats positive numbers correctly', () => {
      expect(formatCurrency(1234)).toBe('£1,234')
      expect(formatCurrency(1000000)).toBe('£1,000,000')
    })

    it('formats negative numbers correctly', () => {
      expect(formatCurrency(-1234)).toBe('-£1,234')
    })

    it('formats zero correctly', () => {
      expect(formatCurrency(0)).toBe('£0')
    })
  })

  describe('cn', () => {
    it('merges class names correctly', () => {
      expect(cn('class1', 'class2')).toBe('class1 class2')
      expect(cn('class1', undefined, 'class2')).toBe('class1 class2')
      expect(cn('class1', false && 'class2')).toBe('class1')
    })
  })
})
