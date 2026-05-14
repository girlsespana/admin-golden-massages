import type {FC} from 'react'
import {useFormikContext} from 'formik'
import type {SelectOption} from './Select/types'
import {Text} from '@components'
import Select from './Select'

interface FormikSelectProps {
  name: string
  label: string
  options: SelectOption[]
  isMulti?: boolean
  isSearchable?: boolean
}

const FormikSelect: FC<FormikSelectProps> = ({
  name,
  label,
  options,
  isMulti = false,
  isSearchable = false,
}) => {
  const {values, setFieldValue, errors, touched} = useFormikContext<Record<string, unknown>>()

  const rawValues = values as Record<string, unknown>
  const rawErrors = errors as Record<string, unknown>
  const rawTouched = touched as Record<string, boolean>

  const fieldValue: unknown = rawValues[name]
  const errorMsg: string | undefined =
    rawTouched[name] && rawErrors[name] ? String(rawErrors[name]) : undefined

  const singleSelected = options.find((o) => o.value === fieldValue) ?? null

  return (
    <div className="space-y-1.5">
      <label htmlFor={name}>
        <Text as="span" size="sm" weight="medium">
          {label}
        </Text>
      </label>
      {isMulti ? (
        <Select<SelectOption, true>
          inputId={name}
          isMulti
          options={options}
          isSearchable={isSearchable}
          value={options.filter(
            (o) => Array.isArray(fieldValue) && (fieldValue as string[]).includes(o.value),
          )}
          onChange={(selected) => {
            void setFieldValue(name, selected ? selected.map((s) => s.value) : [])
          }}
          menuPosition="fixed"
        />
      ) : (
        <Select<SelectOption, false>
          inputId={name}
          isMulti={false}
          options={options}
          isSearchable={isSearchable}
          value={singleSelected}
          onChange={(selected) => {
            void setFieldValue(name, selected ? selected.value : '')
          }}
          menuPosition="fixed"
        />
      )}
      {errorMsg && <span className="text-xs text-red-400">{errorMsg}</span>}
    </div>
  )
}

export default FormikSelect
