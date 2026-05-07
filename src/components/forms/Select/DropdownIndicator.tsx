import type { DropdownIndicatorProps, GroupBase } from 'react-select'
import { components } from 'react-select'
import { HiChevronDown, HiSearch } from 'react-icons/hi'

interface Props {
  isSearchInput?: boolean
}

const DropdownIndicator = <
    Option,
    IsMulti extends boolean,
    Group extends GroupBase<Option> = GroupBase<Option>
>(props: DropdownIndicatorProps<Option, IsMulti, Group> & Props) => {
  return (
      <components.DropdownIndicator {...props}>
        {props.isSearchInput ? <HiSearch className="w-5 h-5"/> : <HiChevronDown className="w-5 h-5"/>}
      </components.DropdownIndicator>
  )
}

export default DropdownIndicator