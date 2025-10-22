import {
  ListBoxOption,
  ListBoxProps,
  ListBoxValues,
} from '../../../../input/components/list-box/components/list-box/ListBox.types';
import { FormFieldProps, FormLabelProps } from '../FormField.types';

export type FormListBoxProps<T extends ListBoxValues> = FormLabelProps &
  ListBoxProps<T> & {
    field: string | FormFieldProps;
    by?: keyof Omit<ListBoxOption<T>, 'children' | 'disabled' | 'divide'>;
  };
