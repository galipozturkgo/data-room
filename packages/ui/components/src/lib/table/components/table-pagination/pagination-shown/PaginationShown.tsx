'use client';

import { classes } from '@dataroom/ui-utils';
import { useMemo } from 'react';

import { ListBox } from '../../../../input/components/list-box/components/list-box/ListBox';
import { ListBoxOption } from '../../../../input/components/list-box/components/list-box/ListBox.types';
import { useTable } from '../../table-context/TableContext';

const PaginationShownBase = () => {
  const { table } = useTable();

  const options = useMemo(
    (): ListBoxOption<number>[] => [
      { key: `Shown 10`, value: 10 },
      { key: `Shown 20`, value: 20 },
      { key: `Shown 30`, value: 30 },
      { key: `Shown 40`, value: 40 },
      { key: `Shown 50`, value: 50 },
    ],
    [],
  );

  const selected = options.find(
    (selection) => selection.value === table.getState().pagination.pageSize,
  );

  const handleChange = (selected: ListBoxOption<number>) =>
    table.setPageSize(Number(selected.value));

  return (
    <ListBox
      value={selected}
      options={options}
      onChange={handleChange}
      multiple={false}
      panel={{
        floating: {
          sameWidth: false,
        },
      }}
      input={{ className: styles.input }}
    />
  );
};

const styles = {
  input: classes('w-auto'),
};

export const PaginationShown = PaginationShownBase;
