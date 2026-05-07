import type { UserNode } from '@types'
import { createContext } from 'react'

const MeContext = createContext<UserNode | null>(null)

export default MeContext