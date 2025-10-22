'use client';

import { classes, classNames } from '@dataroom/ui-utils';
import React, {
  Fragment,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';

import { MiniIconButton } from '../../../../button/components/mini-icon-button/MiniIconButton';
import { Divider } from '../../../../divider';
import { Input } from '../../input/components/input/Input';
import { NumberProps } from './Number.types';

const NumberBase = (
  {
    input,
    value = null,
    onChange,
    onDebounceChange,
    debounce = 400,
    disabled,
    readOnly,
    min = -Infinity,
    max = Infinity,
    step = 1,
    spinner = false,
    className,
    ...props
  }: NumberProps,
  ref: React.Ref<HTMLInputElement>,
) => {
  const { disable, right, ...inputProps } = input || {};
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const delayTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const [state, setState] = useState<number | null>(value);

  const isDisabled = disabled || disable;

  useEffect(() => {
    if (value !== undefined && state !== value) {
      setState(value);
    }

    if (value === undefined) {
      setState(null);
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

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      let val = parseFloat(e.target.value);

      if (val !== null) {
        val = Math.max(min, Math.min(max, val));
      }

      onChange?.({
        ...e,
        target: { ...e.target, value: val as unknown as string },
      });

      setState(isNaN(val) ? null : val);
    },
    [min, max, onChange],
  );

  const updateValue = useCallback(
    (newVal: number) => {
      const clamped = Math.max(min, Math.min(max, newVal));

      const syntheticEvent = {
        target: { value: clamped.toString() },
      } as unknown as React.ChangeEvent<HTMLInputElement>;

      onChange?.(syntheticEvent);
      setState(clamped);
    },
    [min, max, onChange],
  );

  const increment = useCallback(() => {
    updateValue((state ?? 0) + step);
  }, [state, step, updateValue]);

  const decrement = useCallback(() => {
    updateValue((state ?? 0) - step);
  }, [state, step, updateValue]);

  const startContinuousWithDelay = (action: () => void) => {
    action();
    delayTimeoutRef.current = setTimeout(() => {
      intervalRef.current = setInterval(action, 150);
    }, 1000);
  };

  const stopContinuous = () => {
    delayTimeoutRef.current && clearTimeout(delayTimeoutRef.current);
    intervalRef.current && clearInterval(intervalRef.current);
    delayTimeoutRef.current = null;
    intervalRef.current = null;
  };

  const createPressHandlers = useCallback(
    (action: () => void) => ({
      onMouseDown: () => startContinuousWithDelay(action),
      onMouseUp: stopContinuous,
      onMouseLeave: stopContinuous,
      onTouchStart: () => startContinuousWithDelay(action),
      onTouchEnd: stopContinuous,
      onTouchCancel: stopContinuous,
    }),
    [],
  );

  const leftAdornment = useMemo(
    () =>
      spinner && (
        <MiniIconButton
          {...createPressHandlers(decrement)}
          disabled={min === state || isDisabled}
          name="Minus"
          color="muted"
        />
      ),
    [state, spinner, createPressHandlers, decrement, isDisabled],
  );

  const rightAdornment = useMemo(
    () =>
      spinner && (
        <MiniIconButton
          {...createPressHandlers(increment)}
          disabled={max === state || isDisabled}
          name="Plus"
          color="muted"
        />
      ),
    [state, spinner, createPressHandlers, increment, isDisabled],
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
            ...right,
            component:
              ((right?.component || spinner) && (
                <div className={styles.container}>
                  {right && (
                    <Fragment>
                      {right.component}
                      {spinner && (
                        <Divider
                          direction="vertical"
                          className={styles.divider}
                        />
                      )}
                    </Fragment>
                  )}
                  {spinner && (
                    <div className={styles.adornments}>
                      {leftAdornment}
                      {rightAdornment}
                    </div>
                  )}
                </div>
              )) ??
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
            type="number"
            className={classNames(inputClasses, className)}
            {...props}
          />
        </Input.Wrapper>
      )}
    </Input>
  );
};

const styles = {
  container: classes('flex', 'gap-0.5', 'items-center'),
  divider: classes('h-5'),
  adornments: classes('flex', 'gap-1'),
};

export const Number = React.forwardRef(NumberBase);
