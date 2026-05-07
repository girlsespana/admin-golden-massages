import type { ClearIndicatorProps, GroupBase } from 'react-select'
import { HiX } from 'react-icons/hi'
import { components } from 'react-select'

const ClearIndicator = <
    Option,
    IsMulti extends boolean,
    Group extends GroupBase<Option> = GroupBase<Option>
>(props: ClearIndicatorProps<Option, IsMulti, Group>) => {
  return (
      <components.ClearIndicator {...props}>
        <HiX/>
      </components.ClearIndicator>
  )
}

export default ClearIndicator