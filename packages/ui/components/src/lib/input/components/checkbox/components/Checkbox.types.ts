import { InputProps } from '../../input/components/input/Input.types';

export type CheckboxProps = Omit<
  React.ComponentPropsWithRef<'input'>,
  'placeholder'
> & {
  input?: InputProps;
};
