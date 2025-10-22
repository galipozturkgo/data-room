import { InputProps } from '../../../input/components/input/Input.types';
import { SelectBoxOption } from '../select-box/SelectBox.types';

type RenderProps = {
  options: SelectBoxOption[];
};

export type SelectBoxInputProps = Omit<
  React.ComponentPropsWithRef<'ul'>,
  'value' | 'onChange' | 'children'
> & {
  input?: InputProps;
  children: ({ options }: RenderProps) => React.ReactNode;
};
