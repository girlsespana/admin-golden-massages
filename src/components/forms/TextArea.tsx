// @ts-nocheck
import type { InputHTMLAttributes } from 'react'
import clsx from 'clsx'
import { Textarea as HUTextArea } from '@headlessui/react'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
}

const TextArea = ({ className, ...rest }: Props) => {
  return (
      <HUTextArea
          {...rest}
          className={clsx([
            'w-full px-2 py-1.5 text-sm text-gray-200 bg-card-dark border border-neutral-700 rounded-lg focus:outline-none focus:border-primary',
            'placeholder:text-gray-500',
            className,
          ])}
      />
  )
}

export default TextArea