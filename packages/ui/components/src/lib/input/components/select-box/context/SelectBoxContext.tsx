'use client';

import { createContext, useContext } from 'react';

import { InputProps } from '../../input/components/input/Input.types';
import { SelectBoxOption } from '../components/select-box/SelectBox.types';

interface SelectBoxContextProps {
  values: SelectBoxOption[];
  options: SelectBoxOption[];
  highlighted: number | null;
  multiple: boolean;
  disabled: boolean;
  direction: 'vertical' | 'horizontal';
  input?: InputProps;
  highlightAbove: () => void;
  highlightBelow: () => void;
  changeHighlight: (index: number | null) => void;
  toggleSelection: (option: SelectBoxOption) => void;
}

export const SelectBoxContext = createContext<SelectBoxContextProps>({
  values: [],
  options: [],
  highlighted: 0,
  multiple: true,
  disabled: false,
  direction: 'horizontal',
  highlightAbove: () => null,
  highlightBelow: () => null,
  changeHighlight: () => null,
  toggleSelection: () => null,
});

export const useSelectBox = () => {
  return useContext(SelectBoxContext);
};
