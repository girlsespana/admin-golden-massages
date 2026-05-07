import type {FC, PropsWithChildren} from 'react'
import type {FiltersSource} from '@/components/filters/types'
import {useEffect} from 'react'
import {isEmpty} from 'lodash'
import {filtersState} from '@atoms'
import FiltersContext from '@/components/filters/FiltersContext'
import {useAtom} from "jotai";

interface Props {
  id?: string
  source: FiltersSource
  values?: { [key: string]: string }
}

const FiltersProvider: FC<PropsWithChildren<Props>> = ({
                                                         id = 'default',
                                                         source = 'searchParams',
                                                         values,
                                                         children,
                                                       }) => {
  const [filters, setFilters] = useAtom(filtersState)

  useEffect(() => {
    if (values !== undefined && !isEmpty(values))
      setFilters({...filters, [id]: {...filters[id], ...(values ?? {})}})
  }, [])

  return (
    <FiltersContext.Provider value={{id, source}}>
      {children}
    </FiltersContext.Provider>
  )
}

export default FiltersProvider