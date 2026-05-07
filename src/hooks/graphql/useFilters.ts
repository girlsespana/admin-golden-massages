import { useContext } from 'react'
import { useAtom } from 'jotai'
import { has, omit } from 'lodash'
import { useSearchParams } from 'react-router-dom'
import { filtersState } from '@atoms'
import { FiltersState } from '@/atoms/filtersState'
import FiltersContext from '@/components/filters/FiltersContext'

interface FiltersResult {
  get: (param: string) => string | undefined
  set: (param: string, value: string) => void
  has: (param: string) => boolean
  remove: (param: string) => void
  reset: () => void
  all: () => Record<string, string>
}

const hasFilter = (filters: { [key: string]: { [key: string]: string } }, id: string, param: string) =>
  has(filters, id) && has(filters[id], param)

const useFilters = (): FiltersResult => {
  const { id, source } = useContext(FiltersContext)
  const [searchParams, setSearchParams] = useSearchParams()
  const [filters, setFilters] = useAtom(filtersState)

  return {
    get: (param) => {
      return (source === 'globalState')
        ? hasFilter(filters, id, param) ? filters[id][param] : undefined
        : searchParams.get(param) || undefined
    },
    set: (param, value) => {
      // TODO should I validate param and value are defined?
      if (source === 'globalState') {
        setFilters({
          ...filters,
          [id]: {
            ...filters[id],
            [param]: value,
          },
        })
      } else {
        searchParams.set(param, value)
        setSearchParams(searchParams)
      }
    },
    has: (param) => {
      return source === 'globalState'
        ? hasFilter(filters, id, param)
        : searchParams.has(param)
    },
    remove: (param) => {
      if (source === 'globalState') {
        setFilters({
          ...filters,
          [id]: omit(filters[id], [param]),
        } as FiltersState)
      } else {
        if (searchParams.get(param)) {
          searchParams.delete(param)
          setSearchParams(searchParams)
        }
      }
    },
    reset: () => {
      if (source === 'globalState') {
        setFilters({})
      } else {
        searchParams.toString() !== '' && setSearchParams('')
      }
    },
    all: () => {
      if (source === 'globalState') {
        return filters[id] ?? {}
      } else {
        return Object.fromEntries(searchParams.entries())
      }
    }
  }
}

export default useFilters