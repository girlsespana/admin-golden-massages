import type {ReactNode} from 'react'
import {useLazyQuery} from '@apollo/client'
import {useRecoilState, useResetRecoilState} from 'recoil'
import {authTokenReactiveVar} from '@/client'
import AuthContext from '@auth/contexts/AuthContext'
import authTokenState from '@auth/atoms/authTokenState'
import MeQuery from "@auth/queries/Me";

interface Props {
  children: ReactNode
}

const AuthProvider = ({ children }: Props) => {
  const resetAuthToken = useResetRecoilState(authTokenState)
  const [authToken, setAuthToken] = useRecoilState(authTokenState)
  const isAuthenticated = authToken !== undefined

  const [fetchMe] = useLazyQuery(MeQuery, {
    fetchPolicy: 'network-only',
  })

  const login = async (tokenAuth: string) => {
    authTokenReactiveVar(JSON.stringify(tokenAuth))
    setAuthToken(() => tokenAuth)
    await fetchMe()
  }

  const logout = () => {
    resetAuthToken()
    authTokenReactiveVar(null)
  }

  return (
      <AuthContext.Provider
          value={{
            authToken,
            isAuthenticated,
            login,
            logout,
          }}>
        {children}
      </AuthContext.Provider>
  )
}

export default AuthProvider