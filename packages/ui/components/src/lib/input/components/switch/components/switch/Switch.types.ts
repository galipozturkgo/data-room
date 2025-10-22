import { AdornmentProps } from '../../../input/components/adornment/Adornment.types';
import { InputProps } from '../../../input/components/input/Input.types';

export type SwitchProps = Omit<
  React.ComponentPropsWithRef<'button'>,
  'value' | 'onChange'
> & {
  input?: InputProps;
  adornment?: AdornmentProps;
  value?: string;
  checked?: boolean;
  onChange?(checked: boolean): void;
};
