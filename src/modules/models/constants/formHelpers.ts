import type {SelectOption} from '@/components/forms/Select/types'

export function enumToOptions<T extends string>(
  translations: Record<T, string>,
): SelectOption[] {
  return (Object.keys(translations) as T[]).map((key) => ({
    value: key,
    label: translations[key],
  }))
}
