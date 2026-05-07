import type { FiltersSource } from '@/components/filters/types'
import { createContext } from 'react'

interface FiltersContext {
  id: string
  source: FiltersSource
  values?: { [key: string]: string }
}

const FiltersContext = createContext<FiltersContext>({
  id: 'default',
  source: 'searchParams',
})

export default FiltersContext