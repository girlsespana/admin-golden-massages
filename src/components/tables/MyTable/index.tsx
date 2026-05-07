import type {MyTableProps} from '@/components/tables/MyTable/types'
import {useCallback, useMemo, useRef} from 'react'
import clsx from 'clsx'
import {flexRender, getCoreRowModel, useReactTable} from '@tanstack/react-table'
import {InfiniteScroll, Skeleton} from '@components'
import NoTableData from "@/components/tables/NoTableData";
import {MY_TABLE_ROW_HEIGHT} from '@/components/tables/MyTable/constants'
import SortingStatusIcon from '@/components/tables/MyTable/components/SortingStatusIcon'
import {useVirtualizer} from "@tanstack/react-virtual";

const MyTable = <T extends object>({
                                     actions = [],
                                     columns,
                                     data = [],
                                     enableRowSelection = false,
                                     fixedRowHeight = false,
                                     infiniteScroll = false,
                                     isPageTable = false,
                                     loading = false,
                                     maxSkeletonRows = 20,
                                     rowSelection,
                                     showSkeletonRows = true,
                                     sorting,
                                     getRowId,
                                     onInfiniteScroll,
                                     onRowSelectionChange,
                                     onSortingChange,
                                   }: MyTableProps<T>) => {
  const tableContainerRef = useRef<HTMLDivElement | null>(null)
  const table = useReactTable<T>({
    data,
    columns,
    state: {
      ...(rowSelection ? {rowSelection} : {}),
      ...(sorting ? {sorting} : {}),
    },
    manualSorting: true,
    enableRowSelection,
    getCoreRowModel: getCoreRowModel(),
    ...(getRowId ? {getRowId} : {}),
    ...(onRowSelectionChange ? {onRowSelectionChange} : {}),
    ...(onSortingChange ? {onSortingChange} : {}),
  })

  const hasInfiniteScroll = infiniteScroll && onInfiniteScroll

  const {rows} = table.getRowModel()

  const rowVirtualizer = useVirtualizer({
    enabled: true,
    count: data.length,
    getScrollElement: () => tableContainerRef.current,
    estimateSize: useCallback(() => MY_TABLE_ROW_HEIGHT, []),
    overscan: 10,
  })
  const {getVirtualItems, getTotalSize} = rowVirtualizer
  const virtualRows = useMemo(() => getVirtualItems() ?? [], [getVirtualItems])
  const totalSize = getTotalSize()

  const paddingTop = useCallback(() => (
    rows.length > 0 ? virtualRows?.[0]?.start || 0 : 0
  ), [virtualRows])()
  const paddingBottom = useCallback(() => (
    virtualRows.length > 0
      ? totalSize - (virtualRows?.[virtualRows.length - 1]?.end || 0)
      : 0
  ), [virtualRows, totalSize])()

  const handleOnIntersect = async () => {
    if (onInfiniteScroll)
      onInfiniteScroll()
  }

  return (
    <div ref={tableContainerRef} className="flex-1 max-h-full overflow-auto">
      <table className="relative min-w-full divide-y divide-neutral-700 table-fixed">
        {
          table.getHeaderGroups().map(headerGroup => (
            <thead
              key={headerGroup.id}
              className="sticky top-0 bg-neutral-800"
            >
            <tr>
              {headerGroup.headers.map((header, index) => (
                <th
                  key={header.id}
                  colSpan={header.colSpan}
                  className={clsx(
                    'p-2',
                    (isPageTable && index === 0) && 'pl-4',
                    (isPageTable && index === headerGroup.headers.length - 1) && 'pr-4',
                  )}
                  style={{width: header.getSize()}}>
                  {header.isPlaceholder
                    ? null
                    : (
                      <div
                        {...{
                          className: clsx([
                            'h-5 flex items-center',
                            header.column.getCanSort() && 'cursor-pointer select-none',
                          ]),
                          onClick: header.column.getToggleSortingHandler(),
                        }}>
                                  <span>
                                    {
                                      flexRender(
                                        header.column.columnDef.header,
                                        header.getContext(),
                                      )
                                    }
                                  </span>
                        {{
                          asc: <SortingStatusIcon status="asc"/>,
                          desc: <SortingStatusIcon status="desc"/>,
                        }[header.column.getIsSorted() as string] ?? null}
                        {
                          (header.column.getCanSort() && !header.column.getIsSorted()) &&
                          <SortingStatusIcon/>
                        }
                      </div>
                    )
                  }
                </th>
              ))}
              {actions?.length > 0 && <th style={{width: 10}}/>}
            </tr>
            </thead>
          ))
        }
        <tbody className="divide-y divide-neutral-700 bg-card-dark">
        {
          paddingTop > 0 && (
            <tr>
              <td style={{height: `${paddingTop}px`}}/>
            </tr>
          )
        }

        {
          data && (
            rows.map(virtualRow => {
              const row = rows[virtualRow.index]

              return (
                <tr key={row.id} className="hover:bg-neutral-800 group/row">
                  {row.getVisibleCells().map((cell) => (
                    <td
                      key={cell.id}
                      className={clsx([
                        'p-2 whitespace-nowrap text-sm text-gray-200 max-w-full',
                      ])}
                    >
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </td>
                  ))}
                </tr>
              )
            })
          )
        }
        {(showSkeletonRows && loading) && (
          Array.from({length: maxSkeletonRows ?? 20}).map((_, index) => (
              <tr
                key={index}
                className="hover:bg-neutral-800"
                {...(fixedRowHeight && {style: {height: `${MY_TABLE_ROW_HEIGHT}px`}})}>
                {columns.map((_, colIndex) => (
                  <td
                    key={colIndex}
                    className={clsx([
                      (isPageTable && colIndex === 0) && 'pl-4',
                      (isPageTable && colIndex === columns.length - 1) && 'pr-4',
                      'whitespace-nowrap px-2 py-3 text-sm text-gray-200',
                    ])}>
                    <Skeleton/>
                  </td>
                ))}
              </tr>
            ),
          )
        )}
        {paddingBottom > 0 && (
          <tr>
            <td style={{height: `${paddingBottom}px`}}/>
          </tr>
        )}
        </tbody>
      </table>
      {
        data.length === 0 && (
          <NoTableData/>
        )
      }
      {
        (hasInfiniteScroll && !loading) &&
        <InfiniteScroll onIntersect={handleOnIntersect}/>
      }
    </div>
  )
}

export default MyTable