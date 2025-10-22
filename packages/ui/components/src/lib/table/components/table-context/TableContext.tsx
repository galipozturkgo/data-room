'use client';

import { Table } from '@tanstack/react-table';
import { createContext, useContext } from 'react';

import { TableData } from '../table/Table.types';

interface TableContextProps<T extends TableData> {
  table: Table<T>;
  filter: string;
  changeFilter: (keyword: string) => void;
}

export const TableContext = createContext<TableContextProps<any>>(
  {} as TableContextProps<any>,
);

export const useTable = <T extends TableData>() => {
  return useContext(TableContext) as TableContextProps<T>;
};
