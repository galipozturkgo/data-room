'use client';

import { isValidUrl } from '@dataroom/shared-utils';
import { classes, classNames } from '@dataroom/ui-utils';
import { Fragment, useCallback, useEffect, useRef, useState } from 'react';
import React from 'react';
import ReactDOM from 'react-dom';

import { MiniIconButton } from '../../../../../button';
import { FieldError } from '../../../field/components/field-error/FieldError';
import { Text } from '../../../text/components/Text';
import { ChipInputItemProps } from './ChipInputItem.types';

const ChipInputItemBase: React.FC<ChipInputItemProps> = ({
  onEdited,
  onDeleted,
  value = '',
  index,
  duplicate,
  input = {},
  maxLength = 256,
  disabled,
  className,
}) => {
  const spanRef = useRef<HTMLSpanElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [state, setState] = useState<string>(value);
  const [isLink, setIsLink] = useState<boolean>(false);
  const [errorAt, setErrorAt] = useState<number>();

  const {
    left = {},
    right = {},
    className: inputClassName,
    ...inputProps
  } = input;

  useEffect(() => {
    if (spanRef.current) {
      spanRef.current.textContent = state;

      requestAnimationFrame(() => {
        if (spanRef.current && inputRef.current) {
          inputRef.current.style.width = `${spanRef.current.offsetWidth}px`;
        }
      });
    }
  }, [state]);

  useEffect(() => {
    setIsLink(isValidUrl(state));
  }, [state]);

  const handleClick = useCallback(
    () => isLink && window.open(state, '_blank'),
    [isLink, state],
  );

  const handleDelete = useCallback(
    () => onDeleted?.(index),
    [onDeleted, index],
  );

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setState(value);
    setErrorAt(value.length > maxLength ? index : undefined);
  }, []);

  const handleDebounceChange = useCallback(
    (value: string) =>
      value.length <= maxLength && onEdited?.(index, value as string),
    [onEdited, maxLength],
  );

  const handleParentClick = useCallback(() => {
    !disabled && inputRef.current && inputRef.current.focus();
  }, [inputRef]);

  return (
    <Fragment>
      {ReactDOM.createPortal(
        <span ref={spanRef} className={styles.span}>
          {state}
        </span>,
        document.body,
      )}

      <div className={styles.root} onClick={handleParentClick}>
        <Text
          ref={inputRef}
          value={value}
          autoFocus={value === ''}
          className={classNames(styles.text, className)}
          input={{
            error: errorAt === index || duplicate,
            className: inputClassName,
            left: {
              className: left.className,
              component: (
                <div className={styles.adornment}>
                  {left.component}
                  {isLink && (
                    <MiniIconButton
                      name="Foreign"
                      color="accent"
                      onClick={handleClick}
                    />
                  )}
                </div>
              ),
            },
            right: {
              className: classNames(right.className, styles.right),
              component: (
                <div className={styles.adornment}>
                  {right.component}
                  {!disabled && onDeleted && (
                    <MiniIconButton
                      name="Close"
                      color="red"
                      onClick={handleDelete}
                    />
                  )}
                </div>
              ),
            },
            ...inputProps,
          }}
          disabled={disabled || !onEdited}
          onChange={handleChange}
          onDebounceChange={handleDebounceChange}
        />
        {errorAt === index && (
          <FieldError
            error={{
              message: 'shared.error.string.max',
              params: {
                max: maxLength,
              },
            }}
            className={styles.error}
          />
        )}
        {duplicate && (
          <FieldError
            error={{
              message: 'shared.error.custom.alreadyExist',
            }}
            className={styles.error}
          />
        )}
      </div>
    </Fragment>
  );
};

const styles = {
  span: classes(
    'invisible',
    'absolute',
    'whitespace-pre',
    'text-sm',
    'font-normal',
    'p-0',
    'm-0',
  ),
  root: classes('flex', 'flex-col'),
  text: classes('min-w-[4.75rem]', 'max-w-80'),
  error: classes('first-letter:uppercase'),
  adornment: classes('flex', 'items-center', 'gap-1'),
  right: classes('ml-auto'),
};

export const ChipInputItem = ChipInputItemBase;
