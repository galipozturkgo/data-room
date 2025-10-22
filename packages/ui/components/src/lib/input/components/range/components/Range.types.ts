import { InputProps } from '../../input/components/input/Input.types';

export type RangeProps = Omit<
  React.ComponentPropsWithRef<'input'>,
  'ref' | 'value' | 'defaultValue'
> & {
  input?: InputProps;
  value?: number;
  defaultValue?: number;
  debounce?: number;
  onDebounceChange?: (value: number) => void;
};
