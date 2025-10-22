'use client';

import { classes, classNames } from '@dataroom/ui-utils';

import { NoDataIcon } from '../../../../../icon/components/NoData';
import { ComboBoxNotFoundProps } from './ComboBoxNotFound.types';

const ComboBoxNotFoundBase: React.FC<ComboBoxNotFoundProps> = ({
  className,
}) => {
  return (
    <div className={classNames(styles.root, className)}>
      <NoDataIcon />
      <span>Not Found</span>
    </div>
  );
};

const styles = {
  root: classes(
    'p-2',
    'text-sm',
    'text-skin-muted',
    'flex',
    'items-center',
    'space-x-2',
  ),
};

export const ComboBoxNotFound = ComboBoxNotFoundBase;
