import client from '@/client'

type UseApolloResetCacheReturn = (queriesToReset: string[]) => void

const useApolloResetCache = (): UseApolloResetCacheReturn => {
  return (queriesToReset) => {
    queriesToReset.forEach((queryField) => {
      client.cache.evict({ id: 'ROOT_QUERY', fieldName: queryField })
    })

    client.cache.gc()
  }
}

export default useApolloResetCache