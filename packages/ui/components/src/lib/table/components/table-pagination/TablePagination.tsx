'use client';

import { classes, classNames } from '@dataroom/ui-utils';

import { PaginationButton } from './pagination-button/PaginationButton';
import { PaginationInfo } from './pagination-info/PaginationInfo';
import { PaginationShown } from './pagination-shown/PaginationShown';
import { TablePaginationProps } from './TablePagination.types';

const TablePaginationBase: React.FC<TablePaginationProps> = ({ className }) => {
  return (
    <div className={classNames(styles.root, className)}>
      <PaginationButton />
      <PaginationInfo />
      <PaginationShown />
    </div>
  );
};

const styles = {
  root: classes(
    'flex',
    'items-center',
    'justify-end',
    'gap-3',
    'text-sm',
    'p-4',
  ),
};

export const TablePagination = TablePaginationBase;
