'use client';

import { classes, classNames } from '@dataroom/ui-utils';

import { NoDataIcon } from '../../../../../icon';
import { ListBoxNotFoundProps } from './ListBoxNotFound.types';

const ListBoxNotFoundBase: React.FC<ListBoxNotFoundProps> = ({ className }) => {
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

export const ListBoxNotFound = ListBoxNotFoundBase;
