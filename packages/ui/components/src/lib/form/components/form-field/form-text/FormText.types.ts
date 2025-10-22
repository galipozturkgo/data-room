import { TextProps } from '../../../../input/components/text/components/Text.types';
import { FormFieldProps, FormLabelProps } from '../FormField.types';

export type FormTextProps = FormLabelProps &
  TextProps & {
    field: string | FormFieldProps;
  };
