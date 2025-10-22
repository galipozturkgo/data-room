'use client';

import { classes } from '@dataroom/ui-utils';

import { IconButton } from '../../../../button/components/icon-button/IconButton';
import { Tooltip } from '../../../../tooltip/components/Tooltip';
import { useTable } from '../../table-context/TableContext';

const PaginationButtonBase = () => {
  const { table } = useTable();

  return (
    <div className={styles.root}>
      <Tooltip title="Start">
        <IconButton
          name="LeftDouble"
          onClick={() => table.setPageIndex(0)}
          disabled={!table.getCanPreviousPage()}
        />
      </Tooltip>

      <Tooltip title="Previous">
        <IconButton
          name="Left"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        />
      </Tooltip>

      <Tooltip title="Next">
        <IconButton
          name="Right"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        />
      </Tooltip>

      <Tooltip title="End">
        <IconButton
          name="RightDouble"
          onClick={() => table.setPageIndex(table.getPageCount() - 1)}
          disabled={!table.getCanNextPage()}
        />
      </Tooltip>
    </div>
  );
};

const styles = {
  root: classes('flex', 'gap-2'),
};

export const PaginationButton = PaginationButtonBase;
