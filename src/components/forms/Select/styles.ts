import { GroupBase, StylesConfig } from 'react-select'

export const controlStyles = {
  borderRadius: 'rounded-lg',
  borderRadiusRight: 'rounded-r-lg',
  base: 'w-full bg-card-dark font-semibold focus:ring-primary block rounded-lg border border-neutral-700 text-sm',
  focus: 'ring-1 ring-primary',
  nonFocus: 'border-neutral-700 hover:border-neutral-600',
}
export const placeholderStyles = 'text-neutral-500 p-0'
export const selectInputStyles = 'p-0 text-neutral-200'
export const valueContainerStyles = 'p-2 flex flex-wrap gap-1.5'
export const singleValueStyles = 'text-neutral-200'
export const multiValueStyles = 'bg-neutral-700/60 rounded items-center py-0.5 pl-2 pr-1 gap-1.5 border border-white/10'
export const multiValueLabelStyles = 'leading-6 py-0.5 text-neutral-200 text-sm'
export const multiValueRemoveStyles = 'border border-neutral-600 bg-card-dark hover:bg-neutral-700 text-neutral-400 hover:border-red-400 hover:text-red-400 rounded-md'
export const indicatorsContainerStyles = 'p-1 gap-1'
export const clearIndicatorStyles = 'cursor-pointer text-neutral-400 p-1 rounded-md hover:bg-neutral-700 hover:text-neutral-200'
export const indicatorSeparatorStyles = 'bg-neutral-700'
export const dropdownIndicatorStyles = 'p-1 cursor-pointer hover:bg-neutral-700 text-neutral-400 rounded-md hover:text-primary transition-colors'
export const menuStyles = 'p-1.5 mt-2 bg-card-dark rounded-xl border border-neutral-700 shadow-2xl shadow-black/60'
export const groupHeadingStyles = 'ml-3 mt-2 mb-1 text-neutral-500 text-xs uppercase tracking-widest'
export const optionStyles = {
  base: 'hover:cursor-pointer px-3 py-2 rounded-lg text-neutral-200',
  focus: 'bg-neutral-700/80 text-white',
  selected: 'bg-primary/20 text-primary font-medium',
}
export const noOptionsMessageStyles = 'text-neutral-500 p-3 text-sm text-center'
export const loadingMessageStyles = 'text-neutral-500 p-3 text-sm text-center'

export const defaultSelectStyles = <
    Option,
    IsMulti extends boolean,
    Group extends GroupBase<Option> = GroupBase<Option>
>(): StylesConfig<Option, IsMulti, Group> => ({
  input: (base) => ({
    ...base,
    color: 'rgb(229 229 229)', // neutral-200
    'input:focus': {
      boxShadow: 'none',
    },
  }),
  multiValueLabel: (base) => ({
    ...base,
    whiteSpace: 'normal',
    overflow: 'visible',
  }),
  control: (base) => ({
    ...base,
    transition: 'none',
  }),
})
