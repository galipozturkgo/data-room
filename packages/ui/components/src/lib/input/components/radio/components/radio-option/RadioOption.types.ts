import { InputProps } from '../../../input/components/input/Input.types';

type RenderProps = {
  checked: boolean;
  hover: boolean;
  focus: boolean;
  autofocus: boolean;
  disabled: boolean;
};

export type RadioOptionValue = string | number;

export type RadioOptionProps = Omit<
  React.ComponentPropsWithoutRef<'li'>,
  'children' | 'className'
> & {
  value?: RadioOptionValue;
  input?: InputProps;
  disabled?: boolean;
  className?: string | ((renderProps: RenderProps) => string);
  children: React.ReactNode | ((renderProps: RenderProps) => React.ReactNode);
};
