import { Cell } from '@tanstack/react-table';

import { TableData } from '../../table/Table.types';

export interface TableCellProps {
  cell: Cell<TableData, unknown>;
  className?: string;
  children?: React.ReactNode;
}
