import { ModelServices } from '@types'

export const getServicesTranslations = (): Record<ModelServices, string> => ({
  [ModelServices.CouplesService]: "Servicio para parejas",
  [ModelServices.Dancing]: "Bailar",
  [ModelServices.DinnerWithFriends]: "Cena con amigos",
  [ModelServices.EroticReading]: "Lectura erótica",
  [ModelServices.EventOutings]: "Salidas a eventos",
  [ModelServices.GirlfriendExperience]: "Experiencia de novia",
  [ModelServices.GoPartying]: "Salir de fiesta",
  [ModelServices.GoShopping]: "Ir de compras",
  [ModelServices.GoToDinner]: "Ir a cenar",
  [ModelServices.HighProfileEvents]: "Eventos de alto perfil",
  [ModelServices.Parties]: "Fiestas",
  [ModelServices.PrivateEvents]: "Eventos privados",
  [ModelServices.PrivateParties]: "Fiestas privadas",
  [ModelServices.SalsaDancing]: "Bailar salsa",
  [ModelServices.Shopping]: "Compras",
  [ModelServices.SwingDancing]: "Bailar swing",
  [ModelServices.Travel]: "Viajar",
  [ModelServices.WeekendGetaway]: "Escapada de fin de semana",
})