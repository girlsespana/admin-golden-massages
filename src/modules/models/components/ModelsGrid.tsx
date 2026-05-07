import {useEffect, useMemo, useState} from "react";
import {useLazyQuery} from "@apollo/client";
import {InfiniteScroll} from "@components";
import {useQueryVariables} from "@hooks";
import ModelsQuery from "@/modules/models/queries/ModelsQuery";
import ModelCard from "@/modules/models/components/ModelCard";
import NoTableData from "@/components/tables/NoTableData";

const cleanVariables = (vars: Record<string, any>) =>
  Object.fromEntries(Object.entries(vars).filter(([_, v]) => v !== undefined))

const SkeletonCard = () => (
  <div className="rounded-2xl bg-card-dark border border-white/[0.04] overflow-hidden">
    <div className="relative aspect-[3/4] bg-neutral-900 animate-pulse">
      <div className="absolute inset-x-0 bottom-0 h-3/5 bg-gradient-to-t from-black/80 to-transparent" />
      <div className="absolute bottom-3 left-3 right-3 space-y-2">
        <div className="h-3 w-2/3 bg-neutral-700/60 rounded" />
        <div className="h-2 w-1/3 bg-neutral-700/40 rounded" />
      </div>
    </div>
  </div>
)

const ModelsGrid = () => {
  const variables = useQueryVariables()
  const [searchParamsLoaded, setSearchParamsLoaded] = useState(false)

  const allVariables = useMemo(() => ({...variables}), [variables])

  const [fetch, {loading, data, called, fetchMore, refetch}] = useLazyQuery(ModelsQuery, {
    fetchPolicy: 'network-only',
    notifyOnNetworkStatusChange: true,
    variables: cleanVariables(allVariables),
  })

  useEffect(() => {
    setSearchParamsLoaded(true)
  }, [])

  useEffect(() => {
    if (searchParamsLoaded) {
      const cleaned = cleanVariables(allVariables)
      if (called) refetch(cleaned)
      else fetch({variables: cleaned})
    }
  }, [searchParamsLoaded, allVariables, fetch, refetch, called])

  const edges = data?.models?.edges ?? []
  const hasNext = data?.models?.pageInfo?.hasNextPage ?? false
  const isInitialLoading = loading && edges.length === 0
  const isEmpty = !loading && edges.length === 0

  return (
    <div className="w-full">
      <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
        {edges.map((edge) =>
          edge?.node ? <ModelCard key={edge.node.id} node={edge.node}/> : null
        )}
        {isInitialLoading && Array.from({length: 12}).map((_, i) => (
          <SkeletonCard key={`skeleton-${i}`}/>
        ))}
      </div>

      {isEmpty && (
        <div className="py-16">
          <NoTableData/>
        </div>
      )}

      {hasNext && !loading && (
        <InfiniteScroll
          onIntersect={async () => {
            await fetchMore({
              variables: {after: data?.models?.pageInfo?.endCursor},
            })
          }}
        />
      )}

      {loading && edges.length > 0 && (
        <div className="mt-4 grid gap-4 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
          {Array.from({length: 6}).map((_, i) => (
            <SkeletonCard key={`more-${i}`}/>
          ))}
        </div>
      )}
    </div>
  )
}

export default ModelsGrid
