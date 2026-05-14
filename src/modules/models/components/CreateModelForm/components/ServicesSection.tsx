import FormikSelect from '@/components/forms/FormikSelect'
import {enumToOptions} from '@/modules/models/constants/formHelpers'
import {getLanguageTranslations} from '@/modules/models/constants/languageTranslations'
import {getServicesTranslations} from '@/modules/models/constants/servicesTranslations'
import {getNonVisibleTranslations} from '@/modules/models/constants/nonVisibleTranslations'
import {getAttributesTranslations} from '@/modules/models/constants/attributesTranslations'
import type {
  ModelLanguages,
  ModelServices,
  ModelNonVisibleServices,
  ModelAttributes,
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
    <FormikSelect
      name="nonVisibleServices"
      label="Servicios no visibles"
      options={enumToOptions<ModelNonVisibleServices>(getNonVisibleTranslations())}
      isMulti
    />
    <FormikSelect
      name="attributes"
      label="Atributos"
      options={enumToOptions<ModelAttributes>(getAttributesTranslations())}
      isMulti
    />
  </>
)

export default ServicesSection
