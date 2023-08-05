//@ts-nocheck
import React from 'react'
import { flexRender } from '@tanstack/react-table'

const ShowTable = ({table}) => {
    return (
        <table >
            <thead>
                {table.getHeaderGroups().map(headerGroup => (
                    <tr key={headerGroup.id}>
                        {headerGroup.headers.map(header => (
                            <th key={header.id}
                                onClick={header.column.getToggleSortingHandler()}
                            >
                                {header.isPlaceholder ? null :
                                    <div>
                                        {flexRender(
                                            header.column.columnDef.header,
                                            header.getContext()
                                        )}
                                        {
                                            {
                                                asc: ' 🔼',
                                                desc: ' 🔽',
                                            }
                                            [header.column.getIsSorted() as string] ?? null
                                        }
                                    </div>}
                            </th>
                        ))}
                    </tr>
                ))}
            </thead>
            <tbody>
                {table.getRowModel().rows.map(row => (
                    <tr key={row.id}>
                        {row.getVisibleCells().map(cell => (
                            <td key={cell.id}>
                                {flexRender(cell.column.columnDef.cell, cell.getContext())}
                            </td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default ShowTable