import type { FC, HTMLProps, PropsWithChildren } from 'react'
import clsx from 'clsx'

interface TableFiltersProps extends PropsWithChildren {
  className?: string
}

interface TableFiltersRowProps extends HTMLProps<HTMLDivElement> {
  cols?: number
}

const TableFilters: FC<TableFiltersProps> & {
  Section: FC<PropsWithChildren<HTMLProps<HTMLDivElement>>>;
  Row: FC<PropsWithChildren<TableFiltersRowProps>>;
} = ({ children, className }) => {
  return (
      <div
          className={clsx([
            'relative px-4 bg-card-dark border-b border-neutral-700',
            className,
          ])}>
        {children}
      </div>
  )
}

TableFilters.Section = ({ children, className }) => {
  return (
      <div
          className={clsx([
            'w-full py-4 border-t border-neutral-700',
            className,
          ])}>
        {children}
      </div>
  )
}

TableFilters.Row = ({ cols = 5, children, className, ...rest }) => {
  if (cols > 5)
    throw new Error('TableFilters.Row cols prop must be 5 at most')

  const colsVariants = [
    'grid-cols-1 md:grid-cols-1 lg:grid-cols-1',
    'grid-cols-2 md:grid-cols-2 lg:grid-cols-2',
    'grid-cols-2 md:grid-cols-3 lg:grid-cols-3',
    'grid-cols-2 md:grid-cols-2 lg:grid-cols-4',
    'grid-cols-2 md:grid-cols-3 lg:grid-cols-5',
  ]

  return (
      <div
          className={clsx([
            `grid gap-4`,
            className,
            colsVariants[cols - 1],
          ])}
          {...rest}
      >
        {children}
      </div>
  )
}

export default TableFilters