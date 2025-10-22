'use client';

import { classes, classNames } from '@dataroom/ui-utils';

import { useTable } from '../table-context/TableContext';
import { HeaderCell } from './header-cell/HeaderCell';
import { TableHeadProps } from './TableHead.types';

const TableHeadBase: React.FC<TableHeadProps> = ({ children, className }) => {
  const { table } = useTable();

  return (
    <thead className={classNames(styles.root, className)}>
      {table.getHeaderGroups().map((group) => (
        <tr key={group.id}>
          {group.headers.map((header, key) =>
            children ? (
              typeof children === 'function' ? (
                children({ header })
              ) : (
                children
              )
            ) : (
              <HeaderCell key={key} header={header} />
            ),
          )}
        </tr>
      ))}
    </thead>
  );
};

const styles = {
  root: classes('text-sm', 'bg-skin-primary', 'text-skin-inverted'),
};

export const TableHead = TableHeadBase;
