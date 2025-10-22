import { Cell, Row } from '@tanstack/react-table';

import { TableData } from '../../table/Table.types';

export type TableRowProps = {
  row: Row<TableData>;
  className?: string;
  children?: (cells: Cell<TableData, unknown>[]) => React.ReactNode;
};
