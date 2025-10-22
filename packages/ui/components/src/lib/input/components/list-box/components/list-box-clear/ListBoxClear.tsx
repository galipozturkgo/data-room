'use client';

import { classes, classNames } from '@dataroom/ui-utils';

import { CloseIcon } from '../../../../../icon/components/Close';
import { ListBoxClearProps } from './ListBoxClear.types';

const ListBoxClearBase: React.FC<ListBoxClearProps> = ({
  multiple,
  disabled,
  className,
  onClear,
}) => {
  const handleClick = () => !disabled && onClear();

  return (
    <div
      onClick={handleClick}
      className={classNames(
        styles.root,
        disabled && styles.disabled,
        className,
      )}
    >
      <CloseIcon size="sm" />
      <span>{multiple ? 'Clear All' : 'Clear'}</span>
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
  disabled: classes('opacity-70', 'cursor-default'),
};

export const ListBoxClear = ListBoxClearBase;
