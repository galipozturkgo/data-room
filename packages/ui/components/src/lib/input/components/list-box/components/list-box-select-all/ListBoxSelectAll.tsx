'use client';

import { classes, classNames } from '@dataroom/ui-utils';

import { TickIcon } from '../../../../../icon/components/Tick';
import { ListBoxSelectAllProps } from './ListBoxSelectAll.types';

const ListBoxSelectAllBase: React.FC<ListBoxSelectAllProps> = ({
  className,
  disabled,
  handleSelectAll,
}) => {
  const onHandleSelectAll = () => {
    if (!disabled) {
      handleSelectAll();
    }
  };

  return (
    <div
      onClick={onHandleSelectAll}
      className={classNames(
        styles.root,
        disabled && styles.disabled,
        className,
      )}
    >
      <TickIcon size="sm" />
      <span>Select All</span>
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

export const ListBoxSelectAll = ListBoxSelectAllBase;
