'use client';

import { useElementRef } from '@dataroom/ui-hooks';
import { classes, classNames } from '@dataroom/ui-utils';
import React, { Fragment, useCallback, useMemo, useRef, useState } from 'react';

import { Divider } from '../../../../../divider/components/Divider';
import { Input } from '../../../input/components/input/Input';
import { BaseComboBox } from '../combo-box-base/ComboBoxBase';
import {
  ComboBoxOption,
  ComboBoxProps,
  ComboBoxValues,
} from './ComboBox.types';

const ComboBoxBase = <T extends ComboBoxValues>(
  {
    value,
    nullable,
    multiple,
    onChange,
    disabled,
    input,
    options = [],
    className,
    hideEmpty,
    hideTick,
    hideIcon,
    filtering = true,
    loading,
    panel,
    autoComplete = 'off',
    ...props
  }: ComboBoxProps<T>,
  ref: React.Ref<HTMLInputElement>,
) => {
  const isEmpty = options.length === 0;

  const [filter, setFilter] = useState<string>('');

  const { disable, right, ...containerProps } = input || {};

  const wrapperRef = useRef<HTMLDivElement | null>(null);

  const isAllSelected = useMemo(
    () =>
      multiple &&
      value?.length === options.filter((item) => !item.disabled)?.length,
    [multiple, value, options],
  );

  const filtered = useMemo(
    () =>
      filter === ''
        ? options
        : options.filter((option) =>
            option.key
              .toLowerCase()
              .replace(/\s+/g, '')
              .includes(filter.toLowerCase().replace(/\s+/g, '')),
          ),
    [filter, options],
  );

  const notFound = !filtered || filtered.length === 0;

  const inputRef = useElementRef((node: HTMLInputElement) => {
    if (ref) {
      if (typeof ref === 'function') {
        ref(node);
      } else {
        (ref as React.RefObject<HTMLInputElement>).current = node;
      }
    }
  });

  const handleBlur = useCallback(() => filter && setFilter(''), [filter]);

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) =>
      filtering && setFilter(e.target.value),
    [filtering],
  );

  const handleInputKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) =>
      e.code === 'Enter' && filtered.length === 0 && e.preventDefault(),
    [filtered],
  );

  const handleSelectAll = useCallback(
    () => multiple && onChange?.(options.filter((item) => !item.disabled)),
    [multiple, options, onChange],
  );

  const handleClear = useCallback(() => {
    multiple && onChange?.([]);
    !multiple && nullable && onChange?.(null);
    wrapperRef?.current?.click();
  }, [multiple, nullable, onChange, wrapperRef?.current]);

  const handleDisplayValue = useCallback(
    (value: ComboBoxOption<T> | ComboBoxOption<T>[]) =>
      (value &&
        (Array.isArray(value)
          ? value.map((i) => i.key).join(',')
          : value.key)) ||
      '',
    [],
  );

  const handleChange = useCallback(
    (selected: ComboBoxOption<T> & ComboBoxOption<T>[]) => {
      onChange?.(selected);
      !multiple && setFilter('');
    },
    [multiple, onChange],
  );

  const handleInputClick = useCallback(
    () => !filtered.length && setFilter(''),
    [filtered],
  );

  return (
    <BaseComboBox.Base
      disabled={disabled}
      onChange={(e) =>
        handleChange(e as ComboBoxOption<T> & ComboBoxOption<T>[])
      }
      multiple={multiple}
      value={value || (multiple ? [] : null)}
    >
      {({ open }) => (
        <Fragment>
          <Input
            disable={disabled || disable}
            {...(loading ? containerProps : { ...containerProps, right })}
          >
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
                ref={wrapperRef}
                onBlur={handleBlur}
                onClick={handleInputClick}
                className={classNames(
                  backgroundClasses,
                  borderClasses,
                  disabledClasses,
                  focusWithinClasses,
                  errorClasses,
                  passedClasses,
                )}
                right={{
                  component: (
                    <BaseComboBox.Adornment
                      loading={loading}
                      disabled={disabled || loading}
                    />
                  ),
                }}
                {...passedProps}
              >
                <BaseComboBox.Button className={styles.button}>
                  <BaseComboBox.Input
                    ref={inputRef}
                    onChange={handleInputChange}
                    onKeyDown={handleInputKeyDown}
                    displayValue={handleDisplayValue}
                    autoComplete={autoComplete}
                    className={classNames(inputClasses, className)}
                    {...props}
                  />
                </BaseComboBox.Button>
              </Input.Wrapper>
            )}
          </Input>

          <BaseComboBox.Panel
            reference={wrapperRef.current}
            open={open}
            {...panel}
            className={classNames(
              hideEmpty && !isEmpty && notFound && styles.notFound,
              panel?.className,
            )}
          >
            {isEmpty && loading && <BaseComboBox.Loading />}

            {!loading && (isEmpty || (!hideEmpty && notFound)) && (
              <BaseComboBox.NotFound />
            )}

            {!isEmpty && !multiple && !notFound && nullable && (
              <Fragment>
                <BaseComboBox.Clear
                  multiple={multiple}
                  onClear={handleClear}
                  disabled={!value}
                />
                <Divider className={styles.divider} />
              </Fragment>
            )}

            {!isEmpty && multiple && nullable && !notFound && (
              <Fragment>
                {isAllSelected ? (
                  <BaseComboBox.Clear
                    multiple={multiple}
                    onClear={handleClear}
                    disabled={!value || value.length === 0}
                  />
                ) : (
                  <BaseComboBox.SelectAll
                    handleSelectAll={handleSelectAll}
                    disabled={options?.length === 0}
                  />
                )}
                <Divider className={styles.divider} />
              </Fragment>
            )}

            <BaseComboBox.Options
              options={filtered}
              hideIcon={hideIcon}
              hideTick={hideTick}
            />
          </BaseComboBox.Panel>
        </Fragment>
      )}
    </BaseComboBox.Base>
  );
};

const styles = {
  button: classes('w-full', 'h-full', 'flex'),
  notFound: classes('border-0'),
  divider: classes('mb-1'),
};

export const ComboBox = Object.assign(
  React.forwardRef(ComboBoxBase),
  BaseComboBox,
);
