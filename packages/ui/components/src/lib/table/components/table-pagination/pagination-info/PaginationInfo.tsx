'use client';

import { classes } from '@dataroom/ui-utils';

import { Number } from '../../../../input/components/number/components/Number';
import { useTable } from '../../table-context/TableContext';

const PaginationInfoBase = () => {
  const { table } = useTable();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const page = e.target.value ? parseInt(e.target.value) - 1 : 0;
    table.setPageIndex(page);
  };

  return (
    <div className={styles.root}>
      <span className={styles.info}>
        <div>Page</div>
        {table.getState().pagination.pageIndex + 1} -{' '}
        {table.getPageCount() || 1}
      </span>
      <span>|</span>
      <span className={styles.goto}>
        <span>Go to</span>
        <Number
          value={table.getState().pagination.pageIndex + 1}
          onChange={handleChange}
          min={1}
          input={{
            className: styles.input,
          }}
        />
      </span>
    </div>
  );
};

const styles = {
  root: classes(
    'flex',
    'gap-3',
    'items-center',
    'text-skin-muted',
    'justify-center',
  ),
  input: classes('w-16'),
  info: classes('flex', 'items-center', 'gap-1'),
  goto: classes('flex', 'items-center', 'gap-2'),
};

export const PaginationInfo = PaginationInfoBase;
