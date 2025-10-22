'use client';

import { classes, classNames } from '@dataroom/ui-utils';

import { TableExpandRowProps } from './TableExpandRow.types';

const TableExpandRowBase: React.FC<TableExpandRowProps> = ({
  row,
  className,
  children,
}) => {
  const isExpanded = row.getIsExpanded();

  if (isExpanded) {
    return (
      <tr key={row.id} className={classNames(styles.root, className)}>
        <td colSpan={row.getVisibleCells().length}>{children}</td>
      </tr>
    );
  }

  return null;
};

const styles = {
  root: classes('border', 'border-skin-silent', 'bg-skin-base'),
};

export const TableExpandRow = TableExpandRowBase;
