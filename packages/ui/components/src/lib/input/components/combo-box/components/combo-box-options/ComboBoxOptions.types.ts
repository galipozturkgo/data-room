import { ComboBoxOption, TValues } from '../combo-box/ComboBox.types';

export interface ComboBoxOptionsProps<T extends TValues> {
  options: ComboBoxOption<T>[];
  hideIcon?: boolean;
  hideTick?: boolean;
}
