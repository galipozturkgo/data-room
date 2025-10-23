'use client';

import { classes } from '@dataroom/ui-utils';

import { Loading } from '../../../indicator/components/loading/Loading';
import { TableLoadingProps } from './TableLoading.types';

const TableLoadingBase: React.FC<TableLoadingProps> = ({ isLoading }) => {
  if (!isLoading) {
    return null;
  }

  return (
    <Loading className={styles.root} spinner={{ className: styles.spinner }} />
  );
};

const styles = {
  root: classes('absolute', 'top-0', 'bottom-0', 'z-10', 'bg-skin-base/40'),
  spinner: classes('absolute', 'top-[52.5%]', 'text-skin-accent'),
};

export const TableLoading = TableLoadingBase;
