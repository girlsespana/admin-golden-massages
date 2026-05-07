import { ModelAttributes } from '@types'

export const getAttributesTranslations = (): Record<ModelAttributes, string> => ({
  [ModelAttributes.Masseuse]: 'Masajista',
  [ModelAttributes.PornStar]: 'Estrella porno',
  [ModelAttributes.UniversityStudent]: 'Estudiante universitaria',
  [ModelAttributes.Webcamer]: 'Webcamer',
  [ModelAttributes.Onlyfans]: 'OnlyFans',
  [ModelAttributes.Youtuber]: 'YouTuber',
  [ModelAttributes.Streamer]: 'Streamer',
  [ModelAttributes.Fansly]: 'Fansly',
  [ModelAttributes.Pornhub]: 'Pornhub',
  [ModelAttributes.ProfessionalModel]: 'Modelo profesional',
  [ModelAttributes.Athlete]: 'Atleta',
})
