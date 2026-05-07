import type { ElementType, HTMLProps } from 'react'
import clsx from 'clsx'

interface Props extends HTMLProps<HTMLDivElement> {
  as?: 'div' | 'span';
}

const Skeleton = ({ as = 'div', className, ...props }: Props) => {
  const Component: ElementType = as ?? 'div'

  return (
      <Component role="status" className="block w-full animate-pulse" {...props}>
        <Component
            className={clsx([
              'h-3 bg-neutral-700 rounded-lg',
              as === 'span' && 'inline-block',
              className,
            ])}
        />
        <span className="sr-only">Loading...</span>
      </Component>
  )
}

export default Skeleton