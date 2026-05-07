import type { GroupBase, Props } from 'react-select'
import { default as ReactSelect } from 'react-select'
import clsx from 'clsx'
import {
  clearIndicatorStyles,
  controlStyles,
  dropdownIndicatorStyles,
  groupHeadingStyles,
  indicatorsContainerStyles,
  indicatorSeparatorStyles,
  menuStyles,
  multiValueLabelStyles,
  multiValueRemoveStyles,
  multiValueStyles,
  noOptionsMessageStyles,
  optionStyles,
  placeholderStyles,
  selectInputStyles,
  singleValueStyles,
  valueContainerStyles,
  defaultSelectStyles,
} from '@/components/forms/Select/styles'
import ClearIndicator from '@/components/forms/Select/ClearIndicator'
import DropdownIndicator from '@/components/forms/Select/DropdownIndicator'
import MultiValueRemove from '@/components/forms/Select/MultiValueRemove'

const Select = <
    Option,
    IsMulti extends boolean = false,
    Group extends GroupBase<Option> = GroupBase<Option>
>(props: Props<Option, IsMulti, Group>) => (
    <ReactSelect<Option, IsMulti, Group>
        unstyled
        styles={defaultSelectStyles()}
        components={{ DropdownIndicator, ClearIndicator, MultiValueRemove }}
        classNames={{
          control: ({ isFocused }) =>
              clsx(
                  isFocused && controlStyles.focus,
                  controlStyles.base,
              ),
          placeholder: () => placeholderStyles,
          input: () => selectInputStyles,
          valueContainer: () => valueContainerStyles,
          singleValue: () => singleValueStyles,
          multiValue: () => multiValueStyles,
          multiValueLabel: () => multiValueLabelStyles,
          multiValueRemove: () => multiValueRemoveStyles,
          indicatorsContainer: () => indicatorsContainerStyles,
          clearIndicator: () => clearIndicatorStyles,
          indicatorSeparator: () => indicatorSeparatorStyles,
          dropdownIndicator: () => dropdownIndicatorStyles,
          menu: () => menuStyles,
          groupHeading: () => groupHeadingStyles,
          option: ({ isFocused, isSelected }) =>
              clsx(
                  isFocused && optionStyles.focus,
                  isSelected && optionStyles.selected,
                  optionStyles.base,
              ),
          noOptionsMessage: () => noOptionsMessageStyles,
        }}
        {...props}
    />
)

export default Select