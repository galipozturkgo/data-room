import { TextAreaProps } from '../../../../input/components/textarea/components/TextArea.types';
import { FormFieldProps, FormLabelProps } from '../FormField.types';

export type FormTextAreaProps = FormLabelProps &
  TextAreaProps & {
    field: string | FormFieldProps;
  };
