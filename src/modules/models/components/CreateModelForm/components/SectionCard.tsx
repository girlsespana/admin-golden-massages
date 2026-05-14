import type {FC, ReactNode} from 'react'
import GoldAccent from '@/components/ui/GoldAccent'

interface SectionCardProps {
  title: string
  children: ReactNode
}

const SectionCard: FC<SectionCardProps> = ({title, children}) => (
  <div className="bg-card-dark rounded-2xl border border-white/[0.06] overflow-hidden">
    <GoldAccent />
    <div className="p-6 space-y-5">
      <p className="text-xs font-semibold uppercase tracking-widest text-neutral-500">
        {title}
      </p>
      {children}
    </div>
  </div>
)

export default SectionCard
