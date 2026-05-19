import FormikSelect from '@/components/forms/FormikSelect'
import FormField from '@/components/forms/FormField'
import {TextArea} from '@components'
import {enumToOptions} from '@/modules/models/constants/formHelpers'
import {nationalityTranslations} from '@/modules/models/constants/nationalityTranslations'
import {getGenderTranslations} from '@/modules/models/constants/genderTranslations'
import {CITY_OPTIONS} from '@/modules/models/constants/cityOptions'
import type {
    ModelsModelGenderChoices,
    ModelsModelNationalityChoices,
} from '@types'
import {FC} from "react";

interface BasicInfoSectionProps {
    genderOptionsEnum: typeof ModelsModelGenderChoices
    nationalityOptionsEnum: typeof ModelsModelNationalityChoices
}

const BasicInfoSection: FC<BasicInfoSectionProps> = ({genderOptionsEnum, nationalityOptionsEnum}) => (
    <>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <FormField
                name="name"
                label="Nombre"
                placeholder="Nombre del modelo"
                className="col-span-2"
            />
            <FormikSelect
                name="gender"
                label="Género"
                options={enumToOptions(getGenderTranslations())}
            />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <FormikSelect
                name="nationality"
                label="Nacionalidad"
                options={enumToOptions(nationalityTranslations)}
                isSearchable
            />

            <FormikSelect
                name="cityId"
                label="Ciudad"
                options={CITY_OPTIONS}
                isSearchable
            />
            )

        </div>

        <FormField
            name="description"
            label="Descripción"
            as={TextArea}
            rows={4}
            placeholder="Descripción del modelo..."
        />
    </>
)

export default BasicInfoSection
