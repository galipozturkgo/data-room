'use client';

import { rankItem } from '@tanstack/match-sorter-utils';
import {
  FilterFn,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  TableOptions,
  useReactTable,
} from '@tanstack/react-table';
import { useState } from 'react';

import { TableData } from '../table/Table.types';
import { TableContext } from './TableContext';

interface TableProviderProps<T> {
  options: TableOptions<T>;
  children: React.ReactNode;
}

export const TableProvider = <T extends TableData = Record<string, unknown>>({
  options,
  children,
}: TableProviderProps<T>) => {
  const [globalFilter, setGlobalFilter] = useState<string>('');
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 20,
  });

  const changeFilter = (keyword: string) => setGlobalFilter(keyword);

  const fuzzyFilter: FilterFn<T> = (row, columnId, value, addMeta) => {
    const itemRank = rankItem(row.getValue(columnId), value);
    addMeta(itemRank);
    return itemRank.passed;
  };

  const table = useReactTable<T>({
    ...options,
    globalFilterFn: fuzzyFilter,
    onGlobalFilterChange: setGlobalFilter,
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onPaginationChange: setPagination,
    state: {
      globalFilter,
      pagination,
      ...options.state,
    },
  });

  return (
    <TableContext.Provider
      value={{ table, filter: globalFilter, changeFilter }}
    >
      {children}
    </TableContext.Provider>
  );
};
