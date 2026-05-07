import type { ComponentProps, FC } from 'react'
import type { FieldProps } from 'formik'
import type { SelectOption } from '@/components/forms/Select/types'
import { useFormikContext } from 'formik'

interface SelectFieldProps extends FieldProps {
  defaultValue?: string
  // TODO fix this any using maybe generics (T)
  component: ComponentProps<any>
}

const SelectField: FC<SelectFieldProps> = ({ field, component, defaultValue }) => {
  const { setFieldValue } = useFormikContext()
  const Component = component

  const handleSelectChange = async (selectedOption: SelectOption | null) => {
    await setFieldValue(field.name, selectedOption ? selectedOption.value : '')
  }

  return (
      <Component
          defaultValue={defaultValue}
          onChange={handleSelectChange}
      />
  )
}

export default SelectField