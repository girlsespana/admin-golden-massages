import { useCallback, useContext, useEffect, useState } from 'react'
import { useAtomValue } from 'jotai'
import { isEqual, mapValues } from 'lodash'
import { useSearchParams } from 'react-router-dom'
import { filtersState } from '@atoms'
import { GRAPHQL_PAGE_SIZE } from '@constants'
import FiltersContext from '@/components/filters/FiltersContext'

type QueryVariables = { [key: string]: string | boolean | number }

const useQueryVariables = (): QueryVariables => {
  const { id, source } = useContext(FiltersContext)
  const [searchParams] = useSearchParams()
  const filters = useAtomValue(filtersState)

  const getVarsFromQueryOrGlobalState = useCallback((): QueryVariables => {
    const _filters = (source === 'searchParams' ? Object.fromEntries(searchParams) : filters[id]) as QueryVariables
    let parsed = mapValues(_filters, (value) =>
        value === 'true' ? true : value === 'false' ? false : value,
    )
    if (parsed['first'])
      parsed.first = parseInt(parsed['first'] as string)
    return { first: GRAPHQL_PAGE_SIZE, ...parsed }
  }, [id, source, searchParams, filters])

  const [variables, setVariables] = useState<QueryVariables>(getVarsFromQueryOrGlobalState())

  useEffect(() => {
    const vars = getVarsFromQueryOrGlobalState()
    if (!isEqual(variables, vars))
      setVariables(vars)
  }, [variables, getVarsFromQueryOrGlobalState])

  return variables
}

export default useQueryVariables