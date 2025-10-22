import { Header } from '@tanstack/react-table';

import { TableData } from '../table/Table.types';

export interface RenderProps {
  header: Header<TableData, unknown>;
}

export interface TableHeadProps {
  children?: React.ReactNode | ((renderProps: RenderProps) => React.ReactNode);
  className?: string;
}
