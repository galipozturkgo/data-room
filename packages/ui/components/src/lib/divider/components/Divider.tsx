'use client';

import { classes, classNames } from '@dataroom/ui-utils';

import { DividerProps } from './Divider.types';

const DividerBase: React.FC<DividerProps> = ({
  className,
  direction = 'horizontal',
}) => {
  return (
    <span
      className={classNames(styles.divider, styles[direction], className)}
    />
  );
};

const styles = {
  divider: classes('rounded-full', 'bg-skin-muted', 'bg-opacity-40', 'block'),
  horizontal: classes('h-[0.0625rem]', 'w-full'),
  vertical: classes('w-[0.0625rem]', 'h-full'),
};

export const Divider = DividerBase;
