'use client';

import { classes, classNames } from '@dataroom/ui-utils';
import { Fragment } from 'react';

import { Wrapper } from '../wrapper/Wrapper';
import { InnerInputProps } from './Input.types';

export const Input: React.FC<InnerInputProps> & {
  Wrapper: typeof Wrapper;
} = ({ error, disable, readOnly, className, children, ...passedProps }) => (
  <Fragment>
    {children({
      inputClasses: classNames(styles.input, readOnly && styles.readOnly),
      backgroundClasses: styles.background,
      borderClasses: styles.border,
      disabledClasses: (disable && styles.disabled) || undefined,
      focusVisibleClasses: (!disable && styles.focusVisible) || undefined,
      focusWithinClasses: (!disable && styles.focusWithin) || undefined,
      errorClasses: (error && !disable && styles.error) || undefined,
      passedClasses: className,
      passedProps,
    })}
  </Fragment>
);

Input.Wrapper = Wrapper;

const styles = {
  input: classes(
    'h-8',
    'flex',
    'w-full',
    'bg-transparent',
    'placeholder-skin-silent',
    'transition',
    'ease-in-out',
    'text-sm',
  ),
  background: classes('rounded-xl', 'bg-skin-base'),
  border: classes('border', 'border-skin-primary/10'),
  disabled: classes(
    'opacity-80',
    'disabled:opacity-80',
    'cursor-default',
    'pointer-events-none',
  ),
  focusVisible: classes('focus-visible', 'duration-200', 'rounded-xl'),
  focusWithin: classes('focus-within', 'duration-200', 'rounded-xl'),
  error: classes(
    'outline-2',
    '-outline-offset-1',
    'outline-skin-red',
    'rounded-xl',
  ),
  readOnly: classes('cursor-default'),
};
