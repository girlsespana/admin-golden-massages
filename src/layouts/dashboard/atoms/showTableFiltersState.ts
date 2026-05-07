import { atom } from 'recoil'
import { localStorageEffect } from '@atoms'

const showTableFiltersState = atom<boolean>({
  key: 'showTableFiltersState',
  default: true,
  effects: [
    localStorageEffect<boolean>('showTableFilters'),
  ],
})

export default showTableFiltersState