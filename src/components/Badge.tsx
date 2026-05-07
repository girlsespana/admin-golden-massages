import clsx from 'clsx'

type BadgeColor = 'yellow' | 'gray' | 'red' | 'blue' | 'green'
type BadgeSize = 'xs' | 'sm' | 'base' | 'lg'

interface Props {
  text: string
  className?: string
  color?: BadgeColor
  size?: BadgeSize
}

const colors: Record<BadgeColor, string> = {
  yellow: 'bg-yellow-900/50 text-yellow-300',
  gray: 'bg-gray-800 text-gray-300',
  red: 'bg-red-900/50 text-red-300',
  blue: 'bg-blue-900/50 text-blue-300',
  green: 'bg-green-900/50 text-green-300',
}

const sizes: Record<BadgeSize, string> = {
  xs: 'text-xs px-1 py-0.5',
  sm: 'text-sm px-1.5 py-1',
  base: 'text-base px-1.5 py-1',
  lg: 'text-lg px-2 py-1.5',
}

const Badge = ({ className, color = 'blue', size = 'base', text }: Props) => {
  return (
      <span
          className={clsx([
            'inline rounded-lg font-bold',
            colors[color],
            sizes[size],
            className,
          ])}
      >
        {text}
      </span>
  )
}

export default Badge