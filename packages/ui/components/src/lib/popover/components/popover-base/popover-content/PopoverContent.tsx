'use client';

import { classes, classNames } from '@dataroom/ui-utils';
import React from 'react';

import { PopoverContentProps } from './PopoverContent.types';

const PopoverContentBase: React.FC<PopoverContentProps> = ({
  className,
  children,
  ...props
}) => {
  return (
    <div className={classNames(styles.root, className)} {...props}>
      {children}
    </div>
  );
};

const styles = {
  root: classes('flex', 'flex-col', 'gap-1.5'),
};

export const PopoverContent = PopoverContentBase;
