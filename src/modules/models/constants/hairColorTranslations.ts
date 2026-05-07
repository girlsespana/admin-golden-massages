import { ModelsModelHairColorChoices } from '@types'

export const getHairColorTranslations = (): Record<ModelsModelHairColorChoices, string> => ({
  [ModelsModelHairColorChoices.Black]: "Negro",
  [ModelsModelHairColorChoices.Blonde]: "Rubio",
  [ModelsModelHairColorChoices.Brown]: "Cafe",
  [ModelsModelHairColorChoices.Red]: "Rojo",
  [ModelsModelHairColorChoices.Other]: "Otro",
})