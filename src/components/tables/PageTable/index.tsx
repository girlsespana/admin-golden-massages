import type {FC, PropsWithChildren, ReactNode} from 'react'
import {useRecoilState, useRecoilValue} from "recoil";
import showTableFiltersState from "@dash-lay/atoms/showTableFiltersState";
import clsx from "clsx";
import {Button} from "@components";
import {HiFilter} from "react-icons/hi";
import {RxCaretDown, RxCaretUp} from "react-icons/rx";
import TableRefetchBtn from "@/components/tables/TableRefetchBtn";

interface Props {
  title: string
  subtitle?: ReactNode
}

const PageTableHeader: FC<PropsWithChildren<Props>> = ({ title, subtitle, children }) => {
  const [showFilters, setShowFilters] = useRecoilState(showTableFiltersState)

  const toggleFilters = () => setShowFilters(!showFilters)

  return (
    <div className="flex-grow-0">
      <div
        className="relative px-4 bg-card-dark">
        <div className="divide-y divide-neutral-700">
          <div
            className="flex flex-col py-3 space-y-3 md:flex-row md:items-center md:justify-between md:space-y-0 md:space-x-4">
            <div>
              <h5 className="mb-1 font-semibold text-white">
                {title}
              </h5>
              <div className="flex items-center text-gray-400">
                <p className="text-sm">
                  {subtitle}
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <TableRefetchBtn/>
              <Button
                color="light"
                onClick={toggleFilters}>
                <HiFilter className="mr-2 w-5 h-5"/>
                Filtrar
                {
                  showFilters
                    ?
                    <RxCaretUp className="ml-2 w-5 h-5"/>
                    :
                    <RxCaretDown className="ml-2 w-5 h-5"/>
                }
              </Button>
              {children && children}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const PageTableFilters: FC<PropsWithChildren> = ({children}) => {
  const showFilters = useRecoilValue(showTableFiltersState)

  return (
    <div className="flex-grow-0">
      <div className={clsx([
        showFilters ? 'h-auto' : 'h-0',
      ])}>
        {children}
      </div>
    </div>
  )
}

const PageTableTable: FC<PropsWithChildren> = ({children}) => {
  return (
    <div className="relative flex-grow ">
      <div className="absolute w-full h-full bg-card-dark">
        {children}
      </div>
    </div>
  )
}

const PageTableComponent: FC<PropsWithChildren> = ({children}) => {
  return (
    <div
      className="flex flex-col md:flex-row md:items-center md:justify-between space-y-3 md:space-y-0 md:space-x-4 p-4 h-full ">
      <div className="flex flex-col h-full w-full overflow-hidden ">
        {children}
      </div>
    </div>
  )
}

PageTableHeader.displayName = 'PageTable.Header'
PageTableFilters.displayName = 'PageTable.Filters'
PageTableTable.displayName = 'PageTable.Table'

const PageTable = Object.assign(PageTableComponent, {
  Header: PageTableHeader,
  Filters: PageTableFilters,
  Table: PageTableTable,
})

export default PageTable
