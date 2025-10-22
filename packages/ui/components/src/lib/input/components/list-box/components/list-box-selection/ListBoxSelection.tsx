'use client';

import { classes, classNames } from '@dataroom/ui-utils';

import { ListBoxValues } from '../list-box/ListBox.types';
import { ListBoxSelectionProps } from './ListBoxSelection.types';

const ListBoxSelectionBase = <T extends ListBoxValues>({
  selected,
  disabled,
  seperator,
  className,
  placeholder,
  ...props
}: ListBoxSelectionProps<T>) => {
  const wrapperClasses = classNames(
    styles.root,
    disabled && styles.disabled,
    className,
  );

  if (selected && !Array.isArray(selected)) {
    return (
      <div className={wrapperClasses} {...props}>
        <span className={styles.input}>
          {selected.children || selected.key}
        </span>
      </div>
    );
  }

  if (selected && Array.isArray(selected) && selected.length) {
    return (
      <div className={wrapperClasses} {...props}>
        {selected.map((item, key) => (
          <span key={key} className={styles.input}>
            {item.children || item.key}
            {seperator && selected.length - 1 !== key && seperator}
          </span>
        ))}
      </div>
    );
  }

  if (placeholder) {
    return (
      <div className={wrapperClasses} {...props}>
        <input
          disabled
          placeholder={placeholder}
          className={classNames(styles.input, styles.placeholder)}
        />
      </div>
    );
  }

  return <div className={wrapperClasses} {...props} />;
};

const styles = {
  root: classes(
    'flex',
    'w-full',
    'h-full',
    'truncate',
    'cursor-pointer',
    'items-center',
  ),
  disabled: classes('cursor-default'),
  placeholder: classes(
    'cursor-pointer',
    'pointer-events-none',
    'placeholder-skin-silent',
  ),
  input: classes('truncate', 'bg-transparent'),
};

export const ListBoxSelection = ListBoxSelectionBase;
