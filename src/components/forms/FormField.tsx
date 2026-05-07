import type { ComponentType, InputHTMLAttributes } from 'react'
import type { FieldProps } from 'formik'
import type { IconType } from 'react-icons'
import clsx from 'clsx'
import { ErrorMessage, Field } from 'formik'
import { Input, Text } from '@components'

interface Props extends Omit<InputHTMLAttributes<HTMLInputElement>, 'name'> {
  as?: ComponentType | ComponentType<FieldProps>
  component?: ComponentType | ComponentType<FieldProps>
  name: string
  label?: string
  icon?: IconType
  rows?: number
}

const FormField = ({
                     as,
                     component,
                     className,
                     label,
                     name,
                     placeholder,
                     required,
                     type = 'text',
                     ...rest
                   }: Props) => {
  return (
      <div className={clsx([className])}>
        {
            label &&
            <label
                htmlFor={name}
                className={clsx([
                  'relative block mb-0.5',
                  required && 'after:content-["*"] after:text-red-500 after:ml-1',
                ])}
            >
                <Text as="span" size="sm" weight="medium">
                  {label}
                </Text>
            </label>
        }
        <Field
            id={name}
            name={name}
            placeholder={placeholder}
            type={type}
            required={required}
            {...{ ...(component ? { component } : { as: as ?? Input }) }}
            {...rest}
        />
        <Text size="xs" color="red">
          <ErrorMessage name={name}/>
        </Text>
      </div>
  )
}

export default FormField