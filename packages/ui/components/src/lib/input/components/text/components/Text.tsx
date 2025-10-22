'use client';

import { classNames } from '@dataroom/ui-utils';
import React, { useCallback, useEffect, useState } from 'react';

import { MiniIconButton } from '../../../../button/components/mini-icon-button/MiniIconButton';
import { HideIcon } from '../../../../icon/components/Hide';
import { ShowIcon } from '../../../../icon/components/Show';
import { Input } from '../../input/components/input/Input';
import { TextProps } from './Text.types';

const TextBase = (
  {
    input,
    type,
    regex,
    className,
    value,
    debounce = 400,
    onChange,
    onDebounceChange,
    disabled,
    readOnly,
    ...props
  }: TextProps,
  ref: React.Ref<HTMLInputElement>,
) => {
  const { disable, ...inputProps } = input || {};
  const [state, setState] = useState<string | undefined>(value);
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const isPassword = type === 'password';
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

    const timeout = setTimeout(() => {
      onDebounceChange?.(state);
    }, debounce);

    return () => clearTimeout(timeout);
  }, [state, debounce, onDebounceChange]);

  const handleShowClick = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      setShowPassword(!showPassword);
    },
    [showPassword],
  );

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      let val: string = e.target.value;

      if (regex) {
        val = val.replace(regex, '');

        onChange?.({ ...e, target: { ...e.target, value: val } });
      } else {
        onChange?.(e);
      }

      setState(val);
    },
    [regex, onChange],
  );

  return (
    <Input disable={isDisabled} readOnly={readOnly} {...inputProps}>
      {({
        inputClasses,
        backgroundClasses,
        borderClasses,
        disabledClasses,
        focusWithinClasses,
        errorClasses,
        passedClasses,
        passedProps,
      }) => (
        <Input.Wrapper
          right={{
            component:
              (isPassword && (
                <MiniIconButton
                  onClick={handleShowClick}
                  disabled={isDisabled}
                  icon={showPassword ? <HideIcon /> : <ShowIcon />}
                  color="muted"
                />
              )) ||
              undefined,
          }}
          className={classNames(
            backgroundClasses,
            borderClasses,
            disabledClasses,
            focusWithinClasses,
            errorClasses,
            passedClasses,
          )}
          {...passedProps}
        >
          <input
            ref={ref}
            value={state ?? ''}
            disabled={isDisabled}
            readOnly={readOnly}
            onChange={handleChange}
            type={showPassword ? 'text' : type === 'number' ? 'text' : type}
            className={classNames(inputClasses, className)}
            {...props}
          />
        </Input.Wrapper>
      )}
    </Input>
  );
};

export const Text = React.forwardRef(TextBase);
