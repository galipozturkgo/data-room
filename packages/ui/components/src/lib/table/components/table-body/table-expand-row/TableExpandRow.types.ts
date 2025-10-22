import { Row } from '@tanstack/react-table';

import { TableData } from '../../table/Table.types';

export type TableExpandRowProps = {
  row: Row<TableData>;
  className?: string;
  children?: React.ReactNode;
};
