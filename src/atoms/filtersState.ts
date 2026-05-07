import { atom } from 'jotai'

export type FiltersState = { [key: string]: { [key: string]: string } }

const filersState = atom<FiltersState>({})

export default filersState