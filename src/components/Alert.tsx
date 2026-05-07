import type { ReactNode } from 'react'
import clsx from 'clsx'
import { IoMdAlert } from 'react-icons/io'

interface Props {
  children: ReactNode
  className?: string
}

const Alert = ({ children, className }: Props) => {
  return (
      <div className={clsx(['rounded-lg bg-yellow-900/50 p-2 flex items-center gap-2', className])}>
        <span className="text-yellow-300 text-sm">
          <IoMdAlert/>
        </span>
        <span className="text-yellow-300 text-sm">
          {children}
        </span>
      </div>
  )
}

export default Alert