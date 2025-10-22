'use client';

import { classes, classNames } from '@dataroom/ui-utils';

import { Spinner } from '../../../../../indicator/components/spinner/Spinner';
import { ComboBoxLoadingProps } from './ComboBoxLoading.types';

const ComboBoxLoadingBase: React.FC<ComboBoxLoadingProps> = ({ className }) => {
  return (
    <div className={classNames(styles.root, className)}>
      <Spinner size="sm" />
      <span>Loading</span>
    </div>
  );
};

const styles = {
  root: classes(
    'px-2',
    'py-3',
    'text-skin-muted',
    'flex',
    'items-center',
    'space-x-3',
  ),
};

export const ComboBoxLoading = ComboBoxLoadingBase;
