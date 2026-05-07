import { ModelsModelGenderChoices } from '@types'

export const getGenderTranslations = (): Record<ModelsModelGenderChoices, string> => ({
  [ModelsModelGenderChoices.Transgender]: "Trans",
  [ModelsModelGenderChoices.Woman]: "Mujer",
})