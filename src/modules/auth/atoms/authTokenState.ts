import { atom } from 'recoil'
import { localStorageEffect } from '@atoms'
import { AUTH_TOKEN_KEY } from '@auth/constants'

const authTokenState = atom<string | undefined>({
  key: 'authTokenState',
  default: undefined,
  effects: [
    localStorageEffect<string | undefined>(AUTH_TOKEN_KEY),
  ],
})

export default authTokenState