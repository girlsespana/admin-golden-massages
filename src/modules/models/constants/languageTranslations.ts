import { ModelLanguages } from '@types'

export const getLanguageTranslations = (): Record<ModelLanguages, string> => ({
  [ModelLanguages.Chinese]: "Chino",
  [ModelLanguages.English]: "Ingles",
  [ModelLanguages.French]: "Frances",
  [ModelLanguages.German]: "Aleman",
  [ModelLanguages.Italian]: "Italiano",
  [ModelLanguages.Portuguese]: "Portuguese",
  [ModelLanguages.Russian]: "Ruso",
  [ModelLanguages.Spanish]: "Español",
})