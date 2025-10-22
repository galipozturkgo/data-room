import { ComboBoxOption, ComboBoxValues } from '../combo-box/ComboBox.types';

interface ComboBoxOptionRenderProps {
  active: boolean;
  selected: boolean;
  disabled: boolean;
  hidden?: boolean;
}

export interface ComboBoxOptionProps<T extends ComboBoxValues> {
  option: ComboBoxOption<T>;
  className?: string;
  children?:
    | React.ReactNode
    | ((renderProps: ComboBoxOptionRenderProps) => React.ReactNode);
}
