import { ModelsModelEyesColorChoices } from '@types'

export const getEyesColorTranslations = (): Record<ModelsModelEyesColorChoices, string> => ({
  [ModelsModelEyesColorChoices.Black]: "Negro",
  [ModelsModelEyesColorChoices.Blue]: "Azul",
  [ModelsModelEyesColorChoices.Brown]: "Cafe",
  [ModelsModelEyesColorChoices.Green]: "Verde",
  [ModelsModelEyesColorChoices.Hazel]: "Avellana",
})