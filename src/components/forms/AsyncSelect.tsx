import type { GroupBase } from 'react-select'
// @ts-ignore
import type { AsyncProps } from 'react-select/dist/declarations/src/Async'
import type { DropdownIndicatorProps } from 'react-select'
import { default as ReactAsyncSelect } from 'react-select/async'
import clsx from 'clsx'
import {
  clearIndicatorStyles,
  controlStyles,
  dropdownIndicatorStyles,
  groupHeadingStyles,
  indicatorsContainerStyles,
  indicatorSeparatorStyles,
  loadingMessageStyles,
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

const AsyncSelect = <
    Option,
    IsMulti extends boolean = false,
    Group extends GroupBase<Option> = GroupBase<Option>
>(props: AsyncProps<Option, IsMulti, Group>) => (
    <ReactAsyncSelect<Option, IsMulti, Group>
        unstyled
        styles={defaultSelectStyles()}
        components={{
          DropdownIndicator: (innerProps: DropdownIndicatorProps<Option, IsMulti, Group>) => (
              <DropdownIndicator isSearchInput={props.isSearchInput} {...innerProps} />
          ),
          ClearIndicator, MultiValueRemove,
        }}
        classNames={{
          control: ({ isFocused }) =>
              clsx(
                  isFocused ? controlStyles.focus : controlStyles.nonFocus,
                  controlStyles.base,
                  props.isSearchInput ? controlStyles.borderRadiusRight : controlStyles.borderRadius,
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
          loadingMessage: () => loadingMessageStyles,
          noOptionsMessage: () => noOptionsMessageStyles,
        }}
        {...props}
    />
)

export default AsyncSelect