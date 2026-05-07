import type { TextColor } from '../types'

const map: Record<TextColor, string> = {
  base: 'text-gray-200',
  primary: 'text-primary',
  gray: 'text-gray-400',
  red: 'text-red-400',
  blue: 'text-blue-400',
  success: 'text-green-400',
}

export default (color: TextColor) => map[color]