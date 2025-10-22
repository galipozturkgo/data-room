'use client';

import { Radio as HeadlessRadio } from '@headlessui/react';
import { classes, classNames } from '@dataroom/ui-utils';
import React, { Fragment } from 'react';

import { Input } from '../../../input/components/input/Input';
import { RadioOptionProps } from './RadioOption.types';

const RadioOptionBase = (
  { value, children, className, disabled, input, ...props }: RadioOptionProps,
  ref: React.Ref<HTMLLIElement>,
) => {
  return (
    <Input disable={disabled} {...input}>
      {({
        inputClasses,
        backgroundClasses,
        borderClasses,
        disabledClasses,
        focusVisibleClasses,
        focusWithinClasses,
        passedClasses,
        passedProps,
      }) => (
        <HeadlessRadio as={Fragment} value={value} disabled={disabled}>
          {(args) => (
            <Input.Wrapper
              ref={ref}
              as="li"
              tabIndex={0}
              className={classNames(
                inputClasses,
                backgroundClasses,
                borderClasses,
                disabledClasses,
                focusVisibleClasses,
                focusWithinClasses,
                passedClasses,
                styles.option,
                args.checked && styles.checked,
                (disabled || args.disabled) && disabledClasses,
                typeof className === 'function' ? className(args) : className,
              )}
              {...props}
              {...passedProps}
            >
              {typeof children === 'function' ? children(args) : children}
            </Input.Wrapper>
          )}
        </HeadlessRadio>
      )}
    </Input>
  );
};

const styles = {
  option: classes(
    'h-auto',
    'min-h-8',
    'flex',
    'items-center',
    'justify-center',
    'cursor-pointer',
  ),
  checked: classes('font-medium', 'bg-skin-primary', 'text-skin-inverted'),
};

export const RadioOption = React.forwardRef(RadioOptionBase);
