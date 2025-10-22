'use client';

import { classes, classNames } from '@dataroom/ui-utils';

import { CloseIcon } from '../../../../../icon/components/Close';
import { ComboBoxClearProps } from './ComboBoxClear.types';

const ComboBoxClearBase: React.FC<ComboBoxClearProps> = ({
  multiple,
  disabled,
  className,
  onClear,
}) => {
  const onClick = () => !disabled && onClear();

  return (
    <div
      onClick={onClick}
      className={classNames(
        styles.root,
        disabled && styles.disabled,
        className,
      )}
    >
      <CloseIcon size="sm" className={styles.icon} />
      <span>{multiple ? 'Clear all' : 'Clear'}</span>
    </div>
  );
};

const styles = {
  root: classes(
    'pt-0.5',
    'pb-1',
    'px-2',
    'cursor-pointer',
    'text-skin-accent',
    'flex',
    'items-center',
    'space-x-2',
  ),
  icon: classes('min-w-max'),
  disabled: classes('opacity-70', 'cursor-default'),
};

export const ComboBoxClear = ComboBoxClearBase;
