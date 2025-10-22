'use client';

import { classes, classNames } from '@dataroom/ui-utils';
import { Fragment } from 'react';

import { useTable } from '../table-context/TableContext';
import { TableExpandRow } from './table-expand-row/TableExpandRow';
import { TableNotFoundRow } from './table-not-found-row/TableNotFoundRow';
import { TableRow } from './table-row/TableRow';
import { TableBodyProps } from './TableBody.types';

const TableBodyBase: React.FC<TableBodyProps> & {
  Row: typeof TableRow;
  ExpandRow: typeof TableExpandRow;
  NotFoundRow: typeof TableNotFoundRow;
} = ({ className, row, expandRow, notFoundRow: NotFoundRow }) => {
  const { table } = useTable();

  const rows = table.getRowModel().rows;

  return (
    <tbody className={classNames(styles.root, className)}>
      {rows.length === 0
        ? NotFoundRow || <TableNotFoundRow />
        : rows.map((current) => (
            <Fragment key={current.id}>
              {(row && row(current)) || <TableRow row={current} />}
              {expandRow && expandRow(current)}
            </Fragment>
          ))}
    </tbody>
  );
};

const styles = {
  root: classes('bg-skin-primary'),
};

TableBodyBase.Row = TableRow;
TableBodyBase.ExpandRow = TableExpandRow;
TableBodyBase.NotFoundRow = TableNotFoundRow;

export const TableBody = TableBodyBase;
