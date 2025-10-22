import {
  SelectBoxOption,
  SelectBoxProps,
} from '../../../../input/components/select-box/components/select-box/SelectBox.types';
import { FormFieldProps, FormLabelProps } from '../FormField.types';

export type FormSelectBoxProps = FormLabelProps &
  SelectBoxProps & {
    field: string | FormFieldProps;
    by?: keyof SelectBoxOption;
  };
