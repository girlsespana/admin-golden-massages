import type { MouseEventHandler, ReactNode } from 'react'
import type { IconType } from 'react-icons'
import type { ColumnDef, OnChangeFn, RowSelectionState, SortingState, Row } from '@tanstack/react-table'

export interface ActionItem<T> {
  icon?: IconType
  label: string
  hide?: (e: T) => boolean
  onClick: (e: T) => void
}

export interface RowSelectionActionItem {
  // color?: keyof FlowbiteColors | undefined
  icon?: IconType
  label: string
  onClick: MouseEventHandler<HTMLButtonElement>
}

export interface HeaderActionItem {
  element: ReactNode
}

export interface MyTableProps<T> {
  actions?: ActionItem<T>[]
  columns: ColumnDef<T>[]
  data: T[]
  isPageTable?: boolean
  defaultHeaderActions?: boolean
  enableRowSelection?: boolean
  fixedRowHeight?: boolean
  headerActions?: HeaderActionItem[]
  infiniteScroll?: boolean
  loading?: boolean
  maxSkeletonRows?: number
  showSkeletonRows?: boolean
  rowSelection?: RowSelectionState
  rowSelectionActions?: RowSelectionActionItem[]
  sorting?: SortingState
  totalCount?: number
  virtualized?: boolean

  getRowId?: (originalRow: T, index: number, parent?: Row<T>) => string
  onInfiniteScroll?: () => void
  onRowSelectionChange?: OnChangeFn<RowSelectionState> | undefined
  onSortingChange?: OnChangeFn<SortingState>
}