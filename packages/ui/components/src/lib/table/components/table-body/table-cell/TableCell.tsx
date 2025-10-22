'use client';

import { classes, classNames } from '@dataroom/ui-utils';
import { flexRender } from '@tanstack/react-table';

import { TableCellProps } from './TableCell.types';

const TableCellBase: React.FC<TableCellProps> = ({
  cell,
  className,
  children,
}) => {
  return (
    <td key={cell.id} className={classNames(styles.root, className)}>
      {children || flexRender(cell.column.columnDef.cell, cell.getContext())}
    </td>
  );
};

const styles = {
  root: classes('px-2', 'py-2'),
};

export const TableCell = TableCellBase;
