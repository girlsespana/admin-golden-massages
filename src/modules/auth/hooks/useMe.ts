import { useContext } from 'react'
import { isEmpty } from 'lodash'
import MeContext from '@auth/contexts/MeContext'

export default function useMe() {
  const me = useContext(MeContext)
  if (isEmpty(me) || me === null)
    return null
  return me
}