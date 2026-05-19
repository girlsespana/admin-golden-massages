import FormikSelect from '@/components/forms/FormikSelect'
import FormField from '@/components/forms/FormField'
import ToggleSwitchField from '@/components/forms/ToggleSwitchField'
import {enumToOptions} from '@/modules/models/constants/formHelpers'
import {getHairColorTranslations} from '@/modules/models/constants/hairColorTranslations'
import {getEyesColorTranslations} from '@/modules/models/constants/eyesColorTranslations'
import type {
  ModelsModelEyesColorChoices,
  ModelsModelHairColorChoices,
} from '@types'
import {FC} from "react";

interface PhysicalInfoSectionProps {
  eyesColorOptionsEnum: typeof ModelsModelEyesColorChoices
  hairColorOptionsEnum: typeof ModelsModelHairColorChoices
}

const PhysicalInfoSection: FC<PhysicalInfoSectionProps> = () => (
  <>
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
      <FormField name="age" label="Edad" type="number" placeholder="años" />
      <FormField name="weight" label="Peso" type="number" placeholder="kg" />
      <FormField name="height" label="Altura" type="number" placeholder="cm" />
      <FormField name="metrics" label="Medidas" placeholder="90-60-90" />
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <FormikSelect
        name="eyesColor"
        label="Color de ojos"
        options={enumToOptions(getEyesColorTranslations())}
      />
      <FormikSelect
        name="hairColor"
        label="Color de cabello"
        options={enumToOptions(getHairColorTranslations())}
      />
    </div>

    <div className="flex flex-wrap gap-6 pt-2">
      <ToggleSwitchField name="boobs" label="Pecho operado" />
      <ToggleSwitchField name="piercings" label="Piercings" />
      <ToggleSwitchField name="tattoos" label="Tatuajes" />
      <ToggleSwitchField name="smoker" label="Fumadora" />
      <ToggleSwitchField name="party" label="Party" />
    </div>
  </>
)

export default PhysicalInfoSection
