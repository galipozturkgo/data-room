'use client';

import { classes, classNames } from '@dataroom/ui-utils';
import React from 'react';

import { FieldErrorProps } from './FieldError.types';

const FieldErrorBase = (
  { error, label, className }: FieldErrorProps,
  ref: React.RefObject<HTMLSpanElement>,
) => {
  return (
    <span ref={ref} className={classNames(styles.root, className)}>
      {error.message.replace(error.params?.path ?? '', label ?? '')}
    </span>
  );
};

const styles = {
  root: classes('pl-1', 'py-1', 'text-2xs', 'text-skin-red'),
};

export const FieldError = React.forwardRef(FieldErrorBase);
