'use client';

import { classes, classNames } from '@dataroom/ui-utils';
import React from 'react';

import { Adornment } from '../adornment/Adornment';
import { WrapperProps } from './Wrapper.types';

const WrapperBase = <T extends React.ElementType = 'div'>(
  { as, className, left = {}, right = {}, children, ...props }: WrapperProps<T>,
  ref: AsRef<T>,
) => {
  const Component = as || 'div';

  return (
    <Component
      ref={ref}
      className={classNames(
        styles.root,
        !left.component && styles.left,
        !right.component && styles.right,
        (left.component || right.component) && styles.align,
        left.padding,
        right.padding,
        className,
      )}
      {...props}
    >
      <Adornment {...left} />

      {children}

      <Adornment {...right} />
    </Component>
  );
};

const styles = {
  root: classes('w-full'),
  align: classes('flex', 'items-center'),
  left: classes('pl-2.5'),
  right: classes('pr-2.5'),
};

export const Wrapper = React.forwardRef(WrapperBase);
