'use client';

import { classes, classNames } from '@dataroom/ui-utils';
import React, { useEffect, useState } from 'react';
import TextareaAutosize from 'react-textarea-autosize';

import { Input } from '../../input/components/input/Input';
import { TextAreaProps } from './TextArea.types';

const TextAreaBase = (
  {
    input,
    className,
    disabled,
    debounce = 400,
    value,
    onChange,
    onDebounceChange,
    readOnly,
    ...props
  }: TextAreaProps,
  ref: React.Ref<HTMLTextAreaElement>,
) => {
  const { disable, ...inputRest } = input || {};
  const [state, setState] = useState<string | undefined>(value);

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

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    onChange?.(e);
    setState(e.target.value);
  };

  return (
    <Input disable={disabled || disable} readOnly={readOnly} {...inputRest}>
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
          <TextareaAutosize
            ref={ref}
            value={state}
            disabled={disabled}
            readOnly={readOnly}
            onChange={handleChange}
            className={classNames(inputClasses, styles.root, className)}
            {...props}
          />
        </Input.Wrapper>
      )}
    </Input>
  );
};

const styles = {
  root: classes('py-1.5', 'block', '!min-h-[3.5rem]', 'resize-none'),
};

export const TextArea = React.forwardRef(TextAreaBase);
