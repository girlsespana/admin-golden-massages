import FormikSelect from '@/components/forms/FormikSelect'
import {enumToOptions} from '@/modules/models/constants/formHelpers'
import {getLanguageTranslations} from '@/modules/models/constants/languageTranslations'
import {getServicesTranslations} from '@/modules/models/constants/servicesTranslations'
import type {
  ModelLanguages,
  ModelServices,
} from '@types'

const ServicesSection = () => (
  <>
    <FormikSelect
      name="languages"
      label="Idiomas"
      options={enumToOptions<ModelLanguages>(getLanguageTranslations())}
      isMulti
    />
    <FormikSelect
      name="services"
      label="Servicios"
      options={enumToOptions<ModelServices>(getServicesTranslations())}
      isMulti
    />
  </>
)

export default ServicesSection
