import { useEffect, useState, ChangeEvent } from 'react'
import clsx from 'clsx'
import { IoClose } from 'react-icons/io5'
import {
  controlStyles,
  placeholderStyles,
  valueContainerStyles,
} from '@/components/forms/Select/styles'
import { useFilters } from '@hooks'

const param = 'id'

interface Props {
  resetKey?: number
}

const SearchByIDFilter = ({ resetKey }: Props) => {
  const [focused, setFocused] = useState(false)
  const [value, setValue] = useState('')
  const { get, set, remove } = useFilters()

  useEffect(() => {
    const existingValue = get(param)
    setValue(existingValue ?? '')
  }, [resetKey])

  useEffect(() => {
    const existingValue = get(param)
    if (existingValue) setValue(existingValue)
  }, [])

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value
    setValue(newValue)
    if (newValue.length >= 16) set(param, newValue)
    else remove(param)
  }

  const handleClear = () => {
    setValue('')
    remove(param)
  }

  return (
    <div
      className={clsx(
        controlStyles.base,
        focused ? controlStyles.focus : controlStyles.nonFocus,
        'flex items-center gap-1 pr-1 transition-all duration-200'
      )}
    >
      <input
        type="text"
        placeholder="Buscar por ID..."
        value={value}
        onChange={handleChange}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        className={clsx('w-full bg-transparent outline-none', placeholderStyles, valueContainerStyles)}
      />
      {value && (
        <button
          type="button"
          onClick={handleClear}
          className="shrink-0 p-1 rounded text-neutral-500 hover:text-neutral-200 transition-colors"
        >
          <IoClose className="text-base" />
        </button>
      )}
    </div>
  )
}

export default SearchByIDFilter
