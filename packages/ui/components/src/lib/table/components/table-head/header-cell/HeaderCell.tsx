'use client';

import { classes, classNames } from '@dataroom/ui-utils';
import { flexRender } from '@tanstack/react-table';

import { DownIcon } from '../../../../icon/components/Down';
import { UpIcon } from '../../../../icon/components/Up';
import { HeaderCellProps } from './HeaderCell.types';

const HeaderCellBase: React.FC<HeaderCellProps> = ({ header }) => {
  const isSortable = header.column.getCanSort();

  return (
    <th key={header.id} colSpan={header.colSpan} className={styles.root}>
      {header.isPlaceholder ? null : (
        <div
          className={classNames(
            styles.container,
            isSortable && styles.sortable,
          )}
          onClick={
            isSortable ? header.column.getToggleSortingHandler() : undefined
          }
        >
          {flexRender(header.column.columnDef.header, header.getContext())}
          {{
            asc: <UpIcon size="sm" />,
            desc: <DownIcon size="sm" />,
          }[header.column.getIsSorted() as string] ?? (
            <div className={styles.empty} />
          )}
        </div>
      )}
    </th>
  );
};

const styles = {
  root: classes('px-3', 'py-2'),
  container: classes(
    'flex',
    'items-center',
    'select-none',
    'font-medium',
    'gap-1',
  ),
  sortable: classes('cursor-pointer', 'select-none', 'space-x-2'),
  empty: classes('w-4', 'h-4'),
};

export const HeaderCell = HeaderCellBase;
