'use client';

import { classes } from '@dataroom/ui-utils';

import { Loading } from '../../../indicator/components/loading/Loading';
import { FormLoadingProps } from './FormLoading.types';

const FormLoadingBase: React.FC<FormLoadingProps> = ({ loading }) => {
  if (!loading) {
    return null;
  }

  return <Loading className={styles.root} />;
};

const styles = {
  root: classes(
    'absolute',
    'top-0',
    'bottom-0',
    'bg-skin-primary',
    'bg-opacity-40',
  ),
};

export const FormLoading = FormLoadingBase;
