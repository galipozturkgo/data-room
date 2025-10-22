import { InputProps } from '../../input/components/input/Input.types';

export type NumberProps = Omit<
  React.ComponentPropsWithRef<'input'>,
  'ref' | 'value' | 'defaultValue' | 'min' | 'max'
> & {
  input?: InputProps;
  value?: number | null;
  defaultValue?: number;
  step?: number;
  max?: number;
  min?: number;
  spinner?: boolean;
  debounce?: number;
  onDebounceChange?: (value: number | null) => void;
};
