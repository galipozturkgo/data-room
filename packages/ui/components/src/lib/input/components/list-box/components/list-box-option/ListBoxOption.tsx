'use client';

import { ListboxOption as HeadlessListBoxOption } from '@headlessui/react';
import { classes, classNames } from '@dataroom/ui-utils';

import { ListBoxValues } from '../list-box/ListBox.types';
import { ListBoxOptionProps } from './ListBoxOption.types';

const ListBoxOptionBase = <T extends ListBoxValues>({
  option,
  className,
  children,
}: ListBoxOptionProps<T>) => {
  return (
    <HeadlessListBoxOption
      value={option}
      disabled={option.disabled}
      className={({ focus, selected, disabled }) =>
        classNames(
          styles.root,
          focus && styles.focus,
          selected && styles.selected,
          disabled && styles.disabled,
          className,
        )
      }
    >
      {(props) =>
        (typeof children === 'function'
          ? children(props)
          : children) as React.ReactElement
      }
    </HeadlessListBoxOption>
  );
};

const styles = {
  root: classes('py-2', 'cursor-pointer', 'rounded-lg'),
  disabled: classes('cursor-default', 'opacity-70'),
  focus: classes('bg-skin-muted/10'),
  selected: classes('bg-skin-silent'),
};

export const ListBoxOption = ListBoxOptionBase;
