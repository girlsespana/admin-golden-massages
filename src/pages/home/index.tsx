import {useState} from 'react'
import {useRecoilState} from 'recoil'
import {Link, useSearchParams} from 'react-router-dom'
import {HiFilter} from 'react-icons/hi'
import {HiPlus} from 'react-icons/hi2'
import {RxCaretDown, RxCaretUp} from 'react-icons/rx'
import {IoClose} from 'react-icons/io5'
import clsx from 'clsx'
import {Button} from '@components'
import showTableFiltersState from '@dash-lay/atoms/showTableFiltersState'
import TableRefetchBtn from '@/components/tables/TableRefetchBtn'
import ModelsGrid from '@/modules/models/components/ModelsGrid'
import SearchByIDFilter from '@/modules/models/components/forms/SearchByIDFilter'
import SearchByNameFilter from '@/modules/models/components/forms/SearchByNameFilter'
import ActiveSelectFilter from '@/modules/models/components/forms/ActiveSelectFilter'

const FILTER_PARAMS = ['id', 'name_Icontains', 'isActive', 'isVerified']

const FilterLabel = ({ children }: { children: React.ReactNode }) => (
  <p className="text-[10px] uppercase tracking-widest text-neutral-500 font-semibold mb-1.5">
    {children}
  </p>
)

const HomePage = () => {
  const [showFilters, setShowFilters] = useRecoilState(showTableFiltersState)
  const [searchParams, setSearchParams] = useSearchParams()
  const [resetKey, setResetKey] = useState(0)

  const activeCount = FILTER_PARAMS.filter((p) => searchParams.has(p)).length

  const handleResetFilters = () => {
    setSearchParams('')
    setResetKey((k) => k + 1)
  }

  return (
    <div className="h-full overflow-auto">
      <div className="max-w-[1600px] mx-auto px-6 py-8 space-y-6">

        {/* Header */}
        <header className="space-y-4">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-2xl font-bold text-white tracking-tight">
                Modelos
              </h1>
              <p className="text-sm text-neutral-400 mt-0.5">
                Gestión del catálogo de modelos
              </p>
            </div>

            <div className="flex items-center gap-2">
              <TableRefetchBtn />
              <Link to="/models/create">
                <Button color="primary">
                  <HiPlus className="w-4 h-4" />
                  Crear modelo
                </Button>
              </Link>
              <button
                onClick={() => setShowFilters(!showFilters)}
                className={clsx([
                  'relative flex items-center gap-2 px-3 py-1.5 text-sm rounded-lg border transition-all duration-200',
                  showFilters || activeCount > 0
                    ? 'bg-primary/10 border-primary/40 text-primary'
                    : 'bg-white/[0.04] border-white/[0.08] text-neutral-300 hover:bg-white/[0.08] hover:text-white',
                ])}
              >
                <HiFilter className="w-4 h-4" />
                Filtrar
                {activeCount > 0 && (
                  <span className="flex items-center justify-center w-4 h-4 rounded-full bg-primary text-black text-[10px] font-bold leading-none">
                    {activeCount}
                  </span>
                )}
                {showFilters
                  ? <RxCaretUp className="w-4 h-4" />
                  : <RxCaretDown className="w-4 h-4" />}
              </button>
            </div>
          </div>

          {/* Filters panel */}
          <div
            className={clsx([
              'grid transition-[grid-template-rows] duration-300 ease-in-out',
              showFilters ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]',
            ])}
          >
            <div className="overflow-hidden">
              <div className="bg-card-dark/50 border border-white/[0.06] rounded-xl overflow-hidden">
                {/* gold top accent */}
                <div className="h-px w-full bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

                <div className="p-4 space-y-3">
                  <div className="grid gap-4 grid-cols-2 md:grid-cols-4">
                    <div>
                      <FilterLabel>ID</FilterLabel>
                      <SearchByIDFilter resetKey={resetKey} />
                    </div>
                    <div>
                      <FilterLabel>Nombre</FilterLabel>
                      <SearchByNameFilter resetKey={resetKey} />
                    </div>
                    <div>
                      <FilterLabel>Estado</FilterLabel>
                      <ActiveSelectFilter />
                    </div>
                  </div>

                  {/* Footer row: active chips + reset */}
                  {activeCount > 0 && (
                    <div className="flex items-center justify-between pt-1 border-t border-white/[0.05]">
                      <p className="text-xs text-neutral-500">
                        {activeCount} {activeCount === 1 ? 'filtro activo' : 'filtros activos'}
                      </p>
                      <button
                        onClick={handleResetFilters}
                        className="flex items-center gap-1 text-xs text-neutral-400 hover:text-white transition-colors"
                      >
                        <IoClose className="text-sm" />
                        Limpiar filtros
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Grid */}
        <ModelsGrid />

      </div>
    </div>
  )
}

export default HomePage
