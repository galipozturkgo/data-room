'use client';

import { classes, classNames } from '@dataroom/ui-utils';

import { Button } from '../../../../../button/components/button/Button';
import { PlusIcon } from '../../../../../icon/components/Plus';
import { ChipInputItem } from '../chip-input-item/ChipInputItem';
import { findDuplicateChipValues } from './ChipInput.helper';
import { ChipInputProps } from './ChipInput.types';

const ChipInputBase: React.FC<ChipInputProps> & {
  Item: typeof ChipInputItem;
} = ({
  onAdded,
  items = [],
  item,
  maxItem,
  disabled,
  direction = 'horizontal',
  children,
  className,
}) => {
  const duplicates = findDuplicateChipValues(items);

  const addable =
    (maxItem && items.length === maxItem) ||
    items.filter((i) => !i.deleted).filter((i) => i.value?.trim() === '')
      .length !== 0 ||
    duplicates.length > 0 ||
    disabled;

  return (
    <div
      className={classNames(
        styles.items,
        direction === 'horizontal' && styles.horizontal,
        className,
      )}
    >
      {children ||
        items.map(({ value, deleted }, index) => {
          const duplicate = duplicates.find(
            (i) => i.toLowerCase() === value.trim().toLowerCase(),
          );

          if (deleted) {
            return null;
          }

          return (
            <ChipInputItem
              key={index}
              index={index}
              value={value}
              duplicate={!!duplicate}
              disabled={disabled}
              {...item}
            />
          );
        })}

      {onAdded && (
        <Button
          color="accent"
          variant="outlined"
          onClick={onAdded}
          className={styles.button}
          disabled={addable}
          startIcon={<PlusIcon size="sm" />}
        >
          Add
        </Button>
      )}
    </div>
  );
};

const styles = {
  items: classes(
    'flex',
    'flex-wrap',
    'flex-col',
    'gap-2',
    'max-h-96',
    'overflow-auto',
    'p-1',
  ),
  horizontal: classes('flex-row'),
  button: classes('mt-px'),
};

ChipInputBase.Item = ChipInputItem;

export const ChipInput = ChipInputBase;
