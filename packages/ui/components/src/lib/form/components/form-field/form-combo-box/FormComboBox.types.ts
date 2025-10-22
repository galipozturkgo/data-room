import {
  ComboBoxOption,
  ComboBoxProps,
} from '../../../../input/components/combo-box/components/combo-box/ComboBox.types';
import { FormFieldProps, FormLabelProps } from '../FormField.types';

export type TValues = string | number | boolean | Record<string, unknown>;

export type FormComboBoxProps<T extends TValues> = FormLabelProps &
  ComboBoxProps<T> & {
    field: string | FormFieldProps;
    by?: keyof Omit<ComboBoxOption<T>, 'children' | 'disabled' | 'divide'>;
  };
