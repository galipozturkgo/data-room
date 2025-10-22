import { NumberProps } from '../../../../input/components/number/components/Number.types';
import { FormFieldProps, FormLabelProps } from '../FormField.types';

export type FormNumberProps = FormLabelProps &
  NumberProps & {
    field: string | FormFieldProps;
  };
