import React, { useState } from 'react'
import { TableStyle } from './table.style'
import {
    createColumnHelper,
    getCoreRowModel,
    useReactTable,
    getSortedRowModel,
    getFilteredRowModel,
    SortingState
} from '@tanstack/react-table'

import {columns } from './data'
import ShowTable from './ShowTable'
  
const TanstackTable = ({data}:{data:any}) => {
    const [sorting, setSorting] = useState<SortingState>([])
    const [filtering, setFiltering] = useState('')
    const table = useReactTable({
        data,
        columns,
        state: {
            sorting: sorting,
            globalFilter: filtering
        },
        getFilteredRowModel: getFilteredRowModel(),
        onSortingChange: setSorting,
        getCoreRowModel: getCoreRowModel(),
        getSortedRowModel: getSortedRowModel(),
    })
    return (
        <TableStyle className='border-2 p-2 rounded-lg'>
            <input
                type='text'
                placeholder='search filter...'
                className='p-2 mb-2 border-2 '
                value={filtering}
                onChange={e => setFiltering(e.target.value)}
            />
            <ShowTable table={table} />
        </TableStyle>
    )
}

export default TanstackTable