'use client';

import { classes, classNames } from '@dataroom/ui-utils';

import { TableCell } from '../table-cell/TableCell';
import { TableRowProps } from './TableRow.types';

const TableRowBase: React.FC<TableRowProps> = ({
  row,
  className,
  children,
}) => {
  const cells = row.getVisibleCells();

  return (
    <tr key={row.id} className={classNames(styles.root, className)}>
      {children
        ? children(cells)
        : cells.map((cell) => <TableCell key={cell.id} cell={cell} />)}
    </tr>
  );
};

const styles = {
  root: classes(
    'border-b',
    'border-skin-primary/15',
    'text-skin-primary',
    'text-sm',
  ),
};

export const TableRow = TableRowBase;
