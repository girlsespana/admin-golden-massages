import type { Property } from 'csstype'

// @ts-ignore
const map: Record<Property.WhiteSpace, string> = {
  'normal': 'whitespace-normal',
  'nowrap': 'whitespace-nowrap',
  'pre': 'whitespace-pre',
  'pre-wrap': 'whitespace-pre-wrap',
  'pre-line': 'whitespace-pre-line',
  'break-spaces': 'whitespace-break-spaces',
}

export default (whiteSpace: Property.WhiteSpace) => map[whiteSpace]