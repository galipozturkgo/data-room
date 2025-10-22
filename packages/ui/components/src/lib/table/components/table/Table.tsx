'use client';

import { classes, classNames } from '@dataroom/ui-utils';

import { TableBody } from '../table-body/TableBody';
import { TableCaption } from '../table-caption/TableCaption';
import { TableProvider } from '../table-context/TableProvider';
import { TableHead } from '../table-head/TableHead';
import { TableLoading } from '../table-loading/TableLoading';
import { TablePagination } from '../table-pagination/TablePagination';
import { TablePanel } from '../table-panel/TablePanel';
import { TableData, TableProps } from './Table.types';

const TableBase = <T extends TableData>({
  options,
  children,
  className,
  isLoading,
}: TableProps<T>) => {
  return (
    <TableProvider<T> options={options}>
      <div className={classNames(styles.root, className)}>
        <TableLoading isLoading={isLoading} />
        {children}
      </div>
    </TableProvider>
  );
};

const styles = {
  root: classes('w-full', 'overflow-y-auto', 'rounded-2xl', 'relative'),
};

export const Table = Object.assign(TableBase, {
  Caption: TableCaption,
  Panel: TablePanel,
  Head: TableHead,
  Body: TableBody,
  Pagination: TablePagination,
});
