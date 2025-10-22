import { Header } from '@tanstack/react-table';

import { TableData } from '../../table/Table.types';

export interface HeaderCellProps {
  header: Header<TableData, unknown>;
}
