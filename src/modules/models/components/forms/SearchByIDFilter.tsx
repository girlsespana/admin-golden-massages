import { useEffect, useState, ChangeEvent } from 'react'
import clsx from 'clsx'
import {
  controlStyles,
  placeholderStyles,
  valueContainerStyles,
} from '@/components/forms/Select/styles'
import { useFilters } from '@hooks'

const param = 'id'

const SearchByIDFilter = () => {
  const [focused, setFocused] = useState(false)
  const [value, setValue] = useState('')
  const { get, set, remove } = useFilters()

  // ✅ Load default value if "id" exists in query params
  useEffect(() => {
    const existingValue = get(param)
    if (existingValue) {
      setValue(existingValue)
    }
  }, [get])

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value
    setValue(newValue)

    if (newValue.length >= 16) {
      set(param, newValue)
    } else {
      remove(param)
    }
  }

  return (
    <div
      className={clsx(
        controlStyles.base,
        focused ? controlStyles.focus : controlStyles.nonFocus,
        'flex items-center transition-all duration-200'
      )}
    >
      <input
        type="text"
        placeholder="Buscar por ID..."
        value={value}
        onChange={handleChange}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        className={clsx(
          'w-full bg-transparent outline-none',
          placeholderStyles,
          valueContainerStyles
        )}
      />
    </div>
  )
}

export default SearchByIDFilter
