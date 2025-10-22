'use client';

import { classes } from '@dataroom/ui-utils';
import { useEffect, useState } from 'react';

import { MiniIconButton } from '../../../../button/components/mini-icon-button/MiniIconButton';
import { CloseIcon } from '../../../../icon/components/Close';
import { Text } from '../../../../input';
import { useTable } from '../../table-context/TableContext';

const DEBOUNCE = 250;

const CaptionSearchBase = () => {
  const { filter, changeFilter } = useTable();
  const [value, setValue] = useState<string>('');

  useEffect(() => {
    setValue(filter.toString());
  }, [filter]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      changeFilter(value);
    }, DEBOUNCE);

    return () => clearTimeout(timeout);
  }, [value]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setValue(event.target.value);

  const handleClear = () => setValue('');

  return (
    <Text
      value={value}
      onChange={handleInputChange}
      input={{
        className: styles.input,
        right: {
          component: (
            <MiniIconButton
              icon={<CloseIcon />}
              color="muted"
              onClick={handleClear}
            />
          ),
        },
      }}
      placeholder="Filter"
    />
  );
};

const styles = {
  input: classes('w-44'),
};

export const CaptionSearch = CaptionSearchBase;
