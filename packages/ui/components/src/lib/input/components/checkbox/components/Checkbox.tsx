'use client';

import { classes, classNames } from '@dataroom/ui-utils';
import React from 'react';

import { Input } from '../../input/components/input/Input';
import { CheckboxProps } from './Checkbox.types';

const CheckboxBase = (
  { input, className, disabled, value, ...props }: CheckboxProps,
  ref: React.Ref<HTMLInputElement>,
) => {
  const { disable, ...inputProps } = input || {};

  return (
    <Input disable={disabled || disable} {...inputProps}>
      {({
        backgroundClasses,
        borderClasses,
        disabledClasses,
        focusWithinClasses,
        errorClasses,
      }) => (
        <input
          ref={ref}
          type="checkbox"
          disabled={disabled}
          className={classNames(
            backgroundClasses,
            borderClasses,
            disabledClasses,
            focusWithinClasses,
            errorClasses,
            styles.checkbox,
            className,
          )}
          {...props}
        />
      )}
    </Input>
  );
};

const styles = {
  checkbox: classes(
    'h-[1.125rem]',
    'w-[1.125rem]',
    'flex',
    'rounded-md',
    'items-center',
    'justify-center',
    'appearance-none',
    'place-content-center',
    'cursor-pointer',
    'disabled:cursor-default',
    'aspect-square',
    'before:rounded-sm',
    'before:scale-0',
    'before:w-2.5',
    'before:h-2.5',
    'before:duration-100',
    'before:transition',
    'before:ease-in-out',
    'before:checked:scale-100',
    'before:bg-skin-accent',
    'before:[clip-path:polygon(14%_44%,_0_65%,_50%_100%,_100%_16%,_80%_0%,_43%_62%)]',
  ),
};

export const Checkbox = React.forwardRef(CheckboxBase);
