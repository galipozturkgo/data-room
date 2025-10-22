import { Row } from '@tanstack/react-table';

import { TableData } from '../table/Table.types';

export interface TableBodyProps {
  className?: string;
  row?: (row: Row<TableData>) => React.ReactNode;
  expandRow?: (row: Row<TableData>) => React.ReactNode;
  notFoundRow?: React.ReactNode;
}
