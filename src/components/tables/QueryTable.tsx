import type { SortingState } from '@tanstack/react-table'
import type { MyTableProps } from '@/components/tables/MyTable/types'
import type { DocumentNode, WatchQueryFetchPolicy } from '@apollo/client'
import type { TypedDocumentNode } from '@graphql-typed-document-node/core'
import { useEffect, useMemo, useState } from 'react'
import { useLazyQuery } from '@apollo/client'
import { MyTable } from '@components'
import { Maybe, Node, Scalars } from '@types'
import { GRAPHQL_PAGE_SIZE } from '@constants'
import { useFilters, useQueryVariables } from '@hooks'

interface Props<T> extends Omit<MyTableProps<T>, 'data'> {
  accessor: string
  fetchPolicy?: WatchQueryFetchPolicy
  query: DocumentNode | TypedDocumentNode
  variables?: object
}

type Edge = {
  __typename?: string
  cursor: Scalars['String']['output']
  node?: Maybe<Node>
}

const defaultSortingFromQueryParams = (orderBy: string | undefined): SortingState => {
  if (orderBy === undefined)
    throw new Error('orderBy should be a string, not null')

  return [{
    id: orderBy.replace('-', ''),
    desc: orderBy.indexOf('-') > -1,
  }]
}

// 🧹 helper to remove undefined values
const cleanVariables = (vars: Record<string, any>) =>
  Object.fromEntries(Object.entries(vars).filter(([_, v]) => v !== undefined))

const QueryTable = <T extends Edge>({
                                      accessor,
                                      columns,
                                      fetchPolicy,
                                      query,
                                      maxSkeletonRows,
                                      infiniteScroll,
                                      variables: variablesFromProps,
                                      ...rest
                                    }: Props<T>) => {
  const variables = useQueryVariables()
  const { get, set, has, remove } = useFilters()
  const [searchParamsLoaded, setSearchParamsLoaded] = useState<boolean>(false)
  const [count, setCount] = useState<number>(GRAPHQL_PAGE_SIZE)

  const allVariables = useMemo(() => ({
    ...variables,
    ...variablesFromProps,
  }), [variables, variablesFromProps])

  const [fetch, { loading, error, data, called, fetchMore, refetch }] = useLazyQuery(query, {
    ...(fetchPolicy && { fetchPolicy }),
    notifyOnNetworkStatusChange: true,
    variables: cleanVariables(allVariables),
    onCompleted: (data) => {
      if (data) {
        const totalCount = parseInt(data[accessor]?.totalCount ?? 0)
        const dataLength = data[accessor]?.edges.length || 0
        const subtraction = totalCount - dataLength
        const total = (subtraction > 0 && subtraction < GRAPHQL_PAGE_SIZE) ? (subtraction) : GRAPHQL_PAGE_SIZE
        setCount(total)
      }
    },
  })

  const [sorting, setSorting] = useState<SortingState>(
    (has('orderBy')) ? defaultSortingFromQueryParams(get('orderBy')) : []
  )

  useEffect(() => {
    setSearchParamsLoaded(true)
  }, [])

  useEffect(() => {
    if (sorting.length > 0) {
      const sort = sorting[0]
      set('orderBy', sort.desc ? `-${sort.id}` : sort.id)
    } else {
      remove('orderBy')
    }
  }, [sorting])

  useEffect(() => {
    if (searchParamsLoaded) {
      const cleaned = cleanVariables(allVariables)
      if (called) {
        refetch(cleaned)
      } else {
        fetch({ variables: cleaned })
      }
    }
  }, [searchParamsLoaded, allVariables, fetch, refetch, called])

  if (error)
    return <div>Create error component</div>

  return (
    <MyTable<T>
      columns={columns}
      data={data ? data[accessor]?.edges as T[] : []}
      fixedRowHeight
      infiniteScroll={infiniteScroll ?? (data && data[accessor]?.pageInfo.hasNextPage) ?? false}
      loading={loading}
      maxSkeletonRows={maxSkeletonRows ? maxSkeletonRows : count}
      showSkeletonRows={!(infiniteScroll !== undefined && !infiniteScroll && data)}
      sorting={sorting}
      totalCount={data ? parseInt(data[accessor]?.totalCount ?? 0) : 0}
      getRowId={(row, index) => row.node?.id ?? index.toString()}
      onSortingChange={setSorting}
      onInfiniteScroll={async () => {
        if (data && data[accessor]?.pageInfo.hasNextPage) {
          await fetchMore({
            variables: {
              after: data[accessor].pageInfo.endCursor,
            },
          })
        }
      }}
      {...rest}
    />
  )
}

export default QueryTable
