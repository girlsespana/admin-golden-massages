import { type FC, type PropsWithChildren } from 'react'
import {
  Popover as HUPopover,
  PopoverButton,
  PopoverPanel,
} from '@headlessui/react'
import clsx from 'clsx'

type Anchor =
  | 'bottom'
  | 'bottom start'
  | 'bottom end'
  | 'top'
  | 'top start'
  | 'top end'

interface PanelProps {
  className?: string
  anchor?: Anchor
}

const StyledPanel: FC<PropsWithChildren<PanelProps>> = ({
  children,
  className,
  anchor = 'bottom end',
}) => (
  <PopoverPanel
    anchor={{ to: anchor, gap: 8 }}
    transition
    className={clsx(
      'z-50 w-56 rounded-xl overflow-hidden',
      'bg-card-dark border border-white/[0.08] shadow-2xl shadow-black/60',
      'transition duration-150 ease-out origin-top-right',
      'data-[closed]:scale-95 data-[closed]:opacity-0',
      className,
    )}
  >
    {/* Gold accent line */}
    <div className="h-px w-full bg-gradient-to-r from-transparent via-primary/40 to-transparent shrink-0" />
    {children}
  </PopoverPanel>
)

const Popover = Object.assign(HUPopover, {
  Trigger: PopoverButton,
  Panel: StyledPanel,
})

export default Popover
