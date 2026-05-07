import clsx from 'clsx'
import { useField } from 'formik'
import { Switch } from '@headlessui/react'
import { Text } from '@components'

interface ToggleSwitchFieldProps {
  name: string
  label?: string
  className?: string
  disabled?: boolean
}

const ToggleSwitchField = ({
                             name,
                             label,
                             className,
                             disabled = false,
                           }: ToggleSwitchFieldProps) => {
  const [field, , helpers] = useField({ name, type: 'checkbox' })

  const handleChange = async (checked: boolean) => {
    await helpers.setValue(checked)
  }

  return (
      <div className={clsx(['flex items-center gap-2', className])}>
        <div className="flex items-center space-x-3">
          <Switch
              checked={field.value}
              onChange={handleChange}
              disabled={disabled}
              className={clsx([
                'relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none',
                'hover:cursor-pointer',
                field.value ? 'bg-primary' : 'bg-neutral-600',
                disabled && 'opacity-50 cursor-not-allowed',
              ])}
          >
            <span
                className={clsx(
                    'inline-block h-4 w-4 transform rounded-full bg-white transition-transform',
                    field.value ? 'translate-x-6' : 'translate-x-1',
                )}
            />
          </Switch>
        </div>

        {label && (
            <Text as="span" size="sm" weight="medium">
              {label}
            </Text>
        )}
      </div>
  )
}

export default ToggleSwitchField