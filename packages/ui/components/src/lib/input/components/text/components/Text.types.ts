import { InputProps } from '../../input/components/input/Input.types';

export type TextProps = Omit<
  React.ComponentPropsWithRef<'input'>,
  'ref' | 'value' | 'defaultValue'
> & {
  input?: InputProps;
  regex?: RegExp;
  value?: string;
  defaultValue?: string;
  debounce?: number;
  onDebounceChange?: (value: string) => void;
};
