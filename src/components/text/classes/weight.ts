import type { TextWeight } from '../types'

const map: Record<TextWeight, string> = {
  'light': 'font-light',
  'normal': 'font-normal',
  'medium': 'font-medium',
  'semibold': 'font-semibold',
  'bold': 'font-bold',
  'extrabold': 'font-extrabold',
}

export default (weight: TextWeight) => map[weight]