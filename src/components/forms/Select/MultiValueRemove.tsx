import type { MultiValueRemoveProps } from 'react-select'
import { components } from 'react-select'
import { HiX } from 'react-icons/hi'

const MultiValueRemove = (props: MultiValueRemoveProps) => {
  return (
      <components.MultiValueRemove {...props}>
        <HiX/>
      </components.MultiValueRemove>
  )
}

export default MultiValueRemove