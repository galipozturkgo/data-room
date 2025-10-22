import { RadioProps } from '../../../../input/components/radio/components/radio/Radio.types';
import { FormFieldProps, FormLabelProps } from '../FormField.types';

export type FormRadioProps = FormLabelProps &
  RadioProps & {
    field: string | FormFieldProps;
  };
