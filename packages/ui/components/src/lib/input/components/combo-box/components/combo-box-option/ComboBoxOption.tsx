'use client';

import { ComboboxOption as HeadlessComboBoxOption } from '@headlessui/react';
import { classes, classNames } from '@dataroom/ui-utils';

import { ComboBoxValues } from '../combo-box/ComboBox.types';
import { ComboBoxOptionProps } from './ComboBoxOption.types';

const ComboBoxOptionBase = <T extends ComboBoxValues>({
  option,
  className,
  children,
}: ComboBoxOptionProps<T>) => {
  const { disabled, hidden } = option;

  return (
    <HeadlessComboBoxOption
      value={option}
      disabled={disabled}
      className={({ focus, disabled, selected }) =>
        classNames(
          styles.root,
          focus && styles.focus,
          selected && styles.selected,
          disabled && styles.disabled,
          hidden && styles.hidden,
          className,
        )
      }
    >
      {(props) =>
        (typeof children === 'function'
          ? children({ ...props, hidden })
          : children) as React.ReactElement
      }
    </HeadlessComboBoxOption>
  );
};

const styles = {
  root: classes('py-2', 'cursor-pointer', 'rounded-lg'),
  disabled: classes('cursor-default', 'opacity-70'),
  focus: classes('bg-skin-muted/10'),
  selected: classes('bg-skin-muted'),
  hidden: classes('p-0'),
};

export const ComboBoxOption = ComboBoxOptionBase;
