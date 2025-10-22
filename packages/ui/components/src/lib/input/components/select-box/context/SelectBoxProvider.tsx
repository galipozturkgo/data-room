'use client';

import { useCallback, useState } from 'react';

import { InputProps } from '../../input/components/input/Input.types';
import { SelectBoxOption } from '../components/select-box/SelectBox.types';
import { SelectBoxContext } from './SelectBoxContext';

export interface SelectBoxProviderProps {
  options?: SelectBoxOption[];
  values?: SelectBoxOption[];
  onChange?: (values: SelectBoxOption[]) => void;
  multiple?: boolean;
  disabled?: boolean;
  direction?: 'vertical' | 'horizontal';
  input?: InputProps;
  children: React.ReactNode;
}

export const SelectBoxProvider: React.FC<SelectBoxProviderProps> = ({
  options = [],
  values = [],
  onChange,
  multiple = false,
  disabled = false,
  direction = 'vertical',
  input,
  children,
}) => {
  const [highlighted, setHighlighted] = useState<number | null>(null);

  const highlightAbove = useCallback(
    () =>
      setHighlighted((prev) =>
        prev === null || prev >= options.length - 1 ? 0 : prev + 1,
      ),
    [setHighlighted],
  );

  const highlightBelow = useCallback(
    () =>
      setHighlighted((prev) =>
        prev === null || prev <= 0 ? options.length - 1 : prev - 1,
      ),
    [setHighlighted],
  );

  const changeHighlight = useCallback(
    (index: number | null) => setHighlighted(index),
    [setHighlighted],
  );

  const toggleSelection = useCallback(
    (option: SelectBoxOption) => {
      if (disabled) {
        return;
      }

      if (multiple) {
        const selected = values.some((i) => i.key === option.key);
        onChange?.(
          selected
            ? values.filter((i) => i.key !== option.key)
            : [...values, option],
        );
      } else {
        onChange?.([option]);
      }
    },
    [disabled, multiple, values, onChange],
  );

  return (
    <SelectBoxContext.Provider
      value={{
        options,
        values,
        highlighted,
        multiple,
        disabled,
        direction,
        input,
        highlightAbove,
        highlightBelow,
        changeHighlight,
        toggleSelection,
      }}
    >
      {children}
    </SelectBoxContext.Provider>
  );
};
