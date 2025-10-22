'use client';

import { classes, classNames, COLORS } from '@dataroom/ui-utils';
import React from 'react';

import { BadgeProps } from './Badge.types';

const BadgeBase = (
  {
    title,
    color = 'accent',
    border = true,
    background = false,
    children,
    className,
    ...props
  }: BadgeProps,
  ref: React.RefObject<HTMLDivElement>,
) => {
  return (
    <div
      ref={ref}
      className={classNames(
        styles.root,
        border && styles.border,
        color && COLORS.text.default[color],
        border && COLORS.border[color],
        background && color && COLORS.text.contained[color],
        background && color && COLORS.background.default[color],

        className,
      )}
      {...props}
    >
      {title || children}
    </div>
  );
};

const styles = {
  root: classes(
    'px-2',
    'py-px',
    'w-fit',
    'rounded-lg',
    'text-xs',
    'flex',
    'items-center',
    'gap-1',
  ),
  border: classes('border'),
};

export const Badge = React.forwardRef(BadgeBase);
