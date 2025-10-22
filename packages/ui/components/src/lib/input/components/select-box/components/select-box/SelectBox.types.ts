import { SelectBoxProviderProps } from '../../context/SelectBoxProvider';
import { SelectBoxInputProps } from '../select-box-input/SelectBoxInput.types';

export type SelectBoxOptionValue = string | number;

type RenderProps = {
  selected: boolean;
  option: SelectBoxOption;
};

export type SelectBoxOption = {
  key: string;
  value?: SelectBoxOptionValue;
  children?: React.ReactNode | ((props: RenderProps) => React.ReactNode);
};

export type SelectBoxProps = SelectBoxInputProps &
  Omit<SelectBoxProviderProps, 'children'>;
