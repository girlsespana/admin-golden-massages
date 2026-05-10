import {useRecoilState} from "recoil";
import {HiFilter} from "react-icons/hi";
import {RxCaretDown, RxCaretUp} from "react-icons/rx";
import clsx from "clsx";
import {Button} from "@components";
import showTableFiltersState from "@dash-lay/atoms/showTableFiltersState";
import TableRefetchBtn from "@/components/tables/TableRefetchBtn";
import ModelsGrid from "@/modules/models/components/ModelsGrid";
import SearchByIDFilter from "@/modules/models/components/forms/SearchByIDFilter";
import SearchByNameFilter from "@/modules/models/components/forms/SearchByNameFilter";
import ActiveSelectFilter from "@/modules/models/components/forms/ActiveSelectFilter";

const HomePage = () => {
  const [showFilters, setShowFilters] = useRecoilState(showTableFiltersState)

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
              <Button color="light" onClick={() => setShowFilters(!showFilters)}>
                <HiFilter className="w-4 h-4" />
                Filtrar
                {showFilters
                  ? <RxCaretUp className="w-4 h-4" />
                  : <RxCaretDown className="w-4 h-4" />}
              </Button>
            </div>
          </div>

          {/* Filters — smooth reveal */}
          <div
            className={clsx([
              'grid transition-[grid-template-rows] duration-300 ease-in-out',
              showFilters ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]',
            ])}
          >
            <div className="overflow-hidden">
              <div className="bg-card-dark/60 border border-white/[0.06] rounded-xl p-4 grid gap-3 grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
                <SearchByIDFilter />
                <SearchByNameFilter />
                <ActiveSelectFilter />
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
