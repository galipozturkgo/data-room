'use client';

import React from 'react';

import { SelectBoxProvider } from '../../context/SelectBoxProvider';
import { SelectBoxInput } from '../select-box-input/SelectBoxInput';
import { SelectBoxOption } from '../select-box-option/SelectBoxOption';
import { SelectBoxProps } from './SelectBox.types';

const SelectBoxBase = (
  {
    options = [],
    values = [],
    onChange,
    multiple = true,
    disabled,
    direction = 'horizontal',
    input,
    ...props
  }: SelectBoxProps,
  ref: React.RefObject<HTMLUListElement>,
) => {
  return (
    <SelectBoxProvider
      options={options}
      values={values}
      disabled={disabled}
      onChange={onChange}
      multiple={multiple}
      direction={direction}
      input={input}
    >
      <SelectBoxInput ref={ref} {...props} />
    </SelectBoxProvider>
  );
};

export const SelectBox = Object.assign(React.forwardRef(SelectBoxBase), {
  Option: SelectBoxOption,
});
