'use client';

import { classes, classNames } from '@dataroom/ui-utils';

import { SpinnerProps } from './Spinner.types';

export const SpinnerBase: React.FC<SpinnerProps> = ({
  size = 'base',
  className,
}) => {
  return (
    <span className={classNames(styles.root, styles.sizes[size], className)} />
  );
};

const styles = {
  root: classes(
    'inline-block',
    'border-[3px]',
    'border-dotted',
    'rounded-full',
    'box-border',
    'animate-spinner',
  ),
  sizes: {
    xs: classes('w-2.5', 'h-2.5'),
    sm: classes('w-3.5', 'h-3.5'),
    base: classes('w-4.5', 'h-4.5'),
    md: classes('w-5.5', 'h-5.5'),
    lg: classes('w-6.5', 'h-6.5'),
  },
};

export const Spinner = SpinnerBase;
