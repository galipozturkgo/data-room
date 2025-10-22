import { ChipInputProps } from '../../../../input/components/chip-input/components/chip-input/ChipInput.types';
import { FormFieldProps, FormLabelProps } from '../FormField.types';

export type FormChipInputProps = FormLabelProps &
  ChipInputProps & {
    field: string | FormFieldProps;
  };
