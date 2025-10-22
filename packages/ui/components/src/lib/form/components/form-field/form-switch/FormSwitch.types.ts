import { SwitchProps } from '../../../../input/components/switch/components/switch/Switch.types';
import { SwitchOptionsProps } from '../../../../input/components/switch/components/switch-options/SwitchOptions.types';
import { FormFieldProps, FormLabelProps } from '../FormField.types';

export type FormSwitchProps = FormLabelProps &
  SwitchProps & {
    field: string | FormFieldProps;
    options?: SwitchOptionsProps;
  };
