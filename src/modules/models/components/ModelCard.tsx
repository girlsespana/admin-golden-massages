import {useNavigate} from "react-router-dom";
import clsx from "clsx";
import {ImWoman} from "react-icons/im";

export interface ModelCardNode {
  id: string
  name?: string | null
  isActive?: boolean | null
  isVerified?: boolean | null
  isFeatured?: boolean | null
  city?: { name?: string | null } | null
  user?: { name?: string | null } | null
  images?: ({ imageUrl?: string | null } | null)[] | null
}

interface Props {
  node: ModelCardNode
}

const ModelCard = ({ node }: Props) => {
  const navigate = useNavigate()

  const cover = node.images?.[0]?.imageUrl
  const isActive = node.isActive

  console.log(cover);

  return (
    <button
      type="button"
      onClick={() => navigate(`/models/${node.id}`)}
      className="group relative bg-card-dark rounded-2xl border border-white/[0.06] overflow-hidden text-left transition duration-300 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/60">

      <div className="relative aspect-[3/4] w-full bg-neutral-900 overflow-hidden">

        {/* Image */}
        {cover ? (
          <img
            src={cover}
            alt={node.name ?? ""}
            loading="lazy"
            className="block w-full h-full object-cover transition duration-500 group-hover:scale-[1.04]"
          />
        ) : (
          <div className="w-full h-full grid place-items-center bg-gradient-to-br from-neutral-900 to-neutral-950">
            <ImWoman className="text-5xl text-neutral-700" />
          </div>
        )}

        {/* Bottom gradient — strong so text is always readable */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-3/5 bg-gradient-to-t from-black/95 via-black/60 to-transparent" />

        {/* Top-left: active status */}
        <div className="absolute top-2.5 left-2.5">
          <span
            className={clsx(
              'flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-semibold',
              'bg-black/75 backdrop-blur-md border',
              isActive
                ? 'text-emerald-400 border-emerald-500/40'
                : 'text-neutral-400 border-white/[0.12]',
            )}
          >
            <span
              className={clsx(
                'w-1.5 h-1.5 rounded-full shrink-0',
                isActive ? 'bg-emerald-400 animate-pulse' : 'bg-neutral-500',
              )}
            />
            {isActive ? 'Activa' : 'Inactiva'}
          </span>
        </div>


        {/* Bottom info — overlaid on gradient */}
        <div className="absolute inset-x-0 bottom-0 px-3 pb-3 pt-1 space-y-1">
          <h3 className="text-white font-semibold text-lg leading-tight truncate">
            {node.name}
          </h3>
        </div>
      </div>
    </button>
  )
}

export default ModelCard
