import { CheckboxProps } from '../../../../input/components/checkbox/components/Checkbox.types';
import { FormFieldProps, FormLabelProps } from '../FormField.types';

export type FormCheckboxProps = FormLabelProps &
  CheckboxProps & {
    field: string | FormFieldProps;
  };
