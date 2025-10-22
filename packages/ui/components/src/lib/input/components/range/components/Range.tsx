'use client';

import { classes, classNames } from '@dataroom/ui-utils';
import React, { useCallback, useEffect, useState } from 'react';

import { Input } from '../../input/components/input/Input';
import { RangeProps } from './Range.types';

const RangeBase = (
  {
    input,
    type,
    className,
    value,
    debounce = 400,
    onChange,
    onDebounceChange,
    disabled,
    readOnly,
    ...props
  }: RangeProps,
  ref: React.Ref<HTMLInputElement>,
) => {
  const { disable, ...inputProps } = input || {};
  const [state, setState] = useState<number | undefined>(value);

  const isDisabled = disabled || disable;

  useEffect(() => {
    if (value !== undefined && state !== value) {
      setState(value);
    }
  }, [value]);

  useEffect(() => {
    if (state === undefined || state === value) {
      return;
    }

    const timeout = setTimeout(() => onDebounceChange?.(state), debounce);

    return () => clearTimeout(timeout);
  }, [state, value, debounce, onDebounceChange]);

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      onChange?.(e);

      setState(Number(e.target.value));
    },
    [onChange],
  );

  return (
    <Input disable={isDisabled} readOnly={readOnly} {...inputProps}>
      {({
        backgroundClasses,
        disabledClasses,
        focusWithinClasses,
        borderClasses,
        errorClasses,
        passedClasses,
        passedProps,
      }) => (
        <Input.Wrapper
          className={classNames(
            disabledClasses,
            errorClasses,
            passedClasses,
            styles.input,
          )}
          {...passedProps}
        >
          <input
            ref={ref}
            type="range"
            value={state ?? ''}
            disabled={isDisabled}
            readOnly={readOnly}
            onChange={handleChange}
            className={classNames(
              styles.slider,
              backgroundClasses,
              borderClasses,
              focusWithinClasses,
              className,
            )}
            {...props}
          />
        </Input.Wrapper>
      )}
    </Input>
  );
};

const styles = {
  input: classes('p-0', 'flex', 'items-center', 'py-1.5'),
  slider: classes(
    'slider-thumb',
    'w-28',
    'h-3.5',
    'rounded-full',
    'appearance-none',
    'cursor-pointer',
    'slider-thumb',
    'pointer-events-auto',
    'mx-1',
  ),
};

export const Range = React.forwardRef(RangeBase);
