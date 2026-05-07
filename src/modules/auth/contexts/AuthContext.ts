import { createContext } from 'react'

interface AuthContextType {
  authToken?: string
  isAuthenticated: boolean
  login: (tokenAuth: string) => void
  logout: () => void
}

const AuthContext = createContext<AuthContextType | null>(null)

export default AuthContext