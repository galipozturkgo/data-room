import { InputProps } from '../../../input/components/input/Input.types';
import { RadioOptionValue } from '../radio-option/RadioOption.types';

export type RadioProps = Omit<
  React.ComponentPropsWithoutRef<'ul'>,
  'onChange'
> & {
  input?: InputProps;
  value?: RadioOptionValue;
  disabled?: boolean;
  placeholder?: string;
  defaultValue?: RadioOptionValue;
  onChange?: (value: RadioOptionValue) => void;
};
