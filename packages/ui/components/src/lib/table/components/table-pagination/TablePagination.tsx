'use client';

import { classes } from '@dataroom/ui-utils';

import { PaginationButton } from './pagination-button/PaginationButton';
import { PaginationInfo } from './pagination-info/PaginationInfo';
import { PaginationShown } from './pagination-shown/PaginationShown';

const TablePaginationBase = () => {
  return (
    <div className={styles.root}>
      <PaginationButton />
      <PaginationInfo />
      <PaginationShown />
    </div>
  );
};

const styles = {
  root: classes(
    'flex',
    'gap-2',
    'items-center',
    'justify-end',
    'text-sm',
    'p-4',
    'bg-skin-primary',
  ),
};

export const TablePagination = TablePaginationBase;
