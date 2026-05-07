import type { FC, PropsWithChildren } from 'react'
import type { UserNode } from '@types'
import { useQuery } from '@apollo/client'
import { useAuth } from '@auth/hooks'
import MeContext from '@auth/contexts/MeContext'
import LoadingPage from '@/components/misc/LoadingPage'
import MeQuery from "@auth/queries/Me";

const MeProvider: FC<PropsWithChildren> = ({ children }) => {
  const { isAuthenticated, logout } = useAuth()

  const { data, error, loading } = useQuery(MeQuery, {
    fetchPolicy: 'network-only',
    skip: !isAuthenticated,
  })

  if (!isAuthenticated) {
    return (
        <MeContext.Provider value={null}>
          {children}
        </MeContext.Provider>
    )
  }

  if (loading)
    return <LoadingPage/>

  if (error)
    logout()

  const canRenderChildren = !loading && data?.me

  return (
      <MeContext.Provider value={data?.me as UserNode}>
        {canRenderChildren && children}
      </MeContext.Provider>
  )
}

export default MeProvider