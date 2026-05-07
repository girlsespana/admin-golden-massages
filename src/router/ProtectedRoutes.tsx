import { useAuth } from '@auth/hooks'
import { Navigate, Outlet, useLocation } from 'react-router-dom'


const ProtectedRoutes = () => {
  const location = useLocation()
  const { isAuthenticated } = useAuth()

  if (!isAuthenticated)
    return <Navigate to={{
      pathname: '/auth/login',
      search: `?from=${location.pathname}`,
    }}/>

  return <Outlet/>

}

export default ProtectedRoutes