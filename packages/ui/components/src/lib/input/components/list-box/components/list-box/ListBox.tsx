'use client';

import { useElementRef } from '@dataroom/ui-hooks';
import { classes, classNames } from '@dataroom/ui-utils';
import React, { Fragment, useCallback, useState } from 'react';

import { Divider } from '../../../../../divider/components/Divider';
import { Input } from '../../../input/components/input/Input';
import { BaseListBox } from '../list-box-base/ListBoxBase';
import { ListBoxOption, ListBoxProps, ListBoxValues } from './ListBox.types';

const ListBoxBase = <T extends ListBoxValues>(
  {
    options = [],
    nullable,
    multiple,
    value,
    defaultValue,
    onChange,
    disabled,
    input,
    seperator,
    placeholder,
    hideTick,
    hideIcon,
    className,
    panel,
    ...props
  }: ListBoxProps<T>,
  ref: React.Ref<HTMLDivElement>,
) => {
  const isEmpty = options.length === 0;

  const { disable, ...inputProps } = input || {};

  const [inputNode, setInputNode] = useState<HTMLElement | null>(null);

  const isAllSelected =
    multiple &&
    value?.length === options.filter((item) => !item.disabled)?.length;

  const handleClear = () => {
    multiple && onChange?.([]);
    !multiple && nullable && onChange?.(null);
    inputNode?.click();
  };

  const handleSelectAll = () =>
    multiple && onChange?.(options.filter((item) => !item.disabled));

  const wrapperRef = useElementRef((node: HTMLDivElement) => {
    setInputNode(node);

    if (ref) {
      if (typeof ref === 'function') {
        ref(node);
      } else {
        (ref as React.RefObject<HTMLDivElement>).current = node;
      }
    }
  });

  const handleChange = useCallback(
    (selected: ListBoxOption<T> & ListBoxOption<T>[]) => {
      onChange?.(selected);
    },
    [multiple, onChange],
  );

  return (
    <BaseListBox.Base
      onChange={(e) => handleChange(e as ListBoxOption<T> & ListBoxOption<T>[])}
      disabled={disabled}
      value={value || (multiple ? [] : null)}
      defaultValue={defaultValue as never}
      multiple={multiple as never}
    >
      {({ open }) => (
        <Fragment>
          <Input disable={disabled || disable} {...inputProps}>
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
              <BaseListBox.Button as={Fragment}>
                <Input.Wrapper
                  ref={wrapperRef}
                  tabIndex={0}
                  className={classNames(
                    backgroundClasses,
                    borderClasses,
                    disabledClasses,
                    errorClasses,
                    focusWithinClasses,
                    passedClasses,
                  )}
                  right={{
                    component: <BaseListBox.Adornment disabled={disabled} />,
                  }}
                  {...passedProps}
                >
                  <BaseListBox.Selection
                    selected={value}
                    disabled={disabled}
                    seperator={seperator}
                    placeholder={placeholder}
                    className={classNames(inputClasses, className)}
                    {...props}
                  />
                </Input.Wrapper>
              </BaseListBox.Button>
            )}
          </Input>

          <BaseListBox.Panel reference={inputNode} open={open} {...panel}>
            {isEmpty && <BaseListBox.NotFound />}

            {!isEmpty && !multiple && nullable && (
              <Fragment>
                <BaseListBox.Clear
                  multiple={multiple}
                  onClear={handleClear}
                  disabled={!value}
                />
                <Divider className={styles.divider} />
              </Fragment>
            )}

            {!isEmpty && multiple && nullable && (
              <Fragment>
                {isAllSelected ? (
                  <BaseListBox.Clear
                    multiple={multiple}
                    onClear={handleClear}
                    disabled={!value || value.length === 0}
                  />
                ) : (
                  <BaseListBox.SelectAll
                    handleSelectAll={handleSelectAll}
                    disabled={options?.length === 0}
                  />
                )}
                <Divider className={styles.divider} />
              </Fragment>
            )}

            <BaseListBox.Options
              options={options}
              hideIcon={hideIcon}
              hideTick={hideTick}
            />
          </BaseListBox.Panel>
        </Fragment>
      )}
    </BaseListBox.Base>
  );
};

const styles = {
  divider: classes('mb-1'),
};

export const ListBox = Object.assign(
  React.forwardRef(ListBoxBase),
  BaseListBox,
);
