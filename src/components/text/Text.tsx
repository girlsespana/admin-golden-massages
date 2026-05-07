import type { FC, PropsWithChildren } from 'react'
import type { Property } from 'csstype'
import type { TextColor, TextSize, TextWeight } from './types'
import clsx from 'clsx'
import { clsColor, clsSize, clsWeight, clsWhiteSpace } from './classes'

interface Props extends PropsWithChildren {
  as?: 'p' | 'span' | 'div' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6',
  className?: string
  color?: TextColor
  size?: TextSize
  weight?: TextWeight
  whiteSpace?: Property.WhiteSpace
}

const Text: FC<Props> = ({
                           as = 'p',
                           children,
                           className = '',
                           color = 'base',
                           size = 'base',
                           weight = 'normal',
                           whiteSpace,
                         }) => {
  const Component = as

  return (
      <Component
          className={clsx(
              className,
              clsColor(color),
              clsSize(size),
              clsWeight(weight),
              whiteSpace && clsWhiteSpace(whiteSpace),
          )}>
        {children}
      </Component>
  )
}

export default Text