import { TableOptions } from '@tanstack/react-table';

export type TableData = Record<string, unknown>;

export type TableProps<T extends TableData> = {
  options: TableOptions<T>;
  children?: React.ReactNode;
  isLoading?: boolean;
  className?: string;
};
