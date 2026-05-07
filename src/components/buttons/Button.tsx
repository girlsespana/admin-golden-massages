import type { ButtonHTMLAttributes } from 'react'
import clsx from 'clsx'
import { Button as HUButton } from '@headlessui/react'
import { Loader } from '@/components'

export type ButtonColor = 'primary' | 'light' | 'error' | 'success' | 'warning'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean
  color?: ButtonColor
}

const colors: Record<ButtonColor, string> = {
  primary: 'bg-primary text-black font-semibold hover:brightness-110 active:brightness-95 shadow-sm shadow-primary/20',
  light: 'bg-white/[0.04] text-neutral-300 hover:bg-white/[0.08] hover:text-white active:bg-white/[0.03] border border-white/[0.08]',
  error: 'bg-red-600/90 text-white hover:bg-red-500 active:bg-red-700 shadow-sm shadow-red-600/20',
  success: 'bg-emerald-600/90 text-white hover:bg-emerald-500 active:bg-emerald-700 shadow-sm shadow-emerald-600/20',
  warning: 'bg-amber-500/90 text-black font-semibold hover:bg-amber-400 active:bg-amber-600 shadow-sm shadow-amber-500/20',
}

const Button = ({ children, color = 'primary', isLoading, className, ...rest }: Props) => {
  return (
      <HUButton
          disabled={isLoading}
          className={clsx([
            'flex justify-center items-center gap-2',
            'px-3 py-1.5 text-sm rounded-lg duration-200 transition-all',
            'hover:cursor-pointer disabled:opacity-40 disabled:pointer-events-none',
            colors[color],
            className,
          ])}
          {...rest}
      >
        {isLoading && <Loader/>}
        {children}
      </HUButton>
  )
}

export default Button
