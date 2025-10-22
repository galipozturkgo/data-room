import { InputProps } from '../../../input/components/input/Input.types';

export type ChipInputItemProps = {
  onEdited?: (index: number, newValue?: string) => void;
  onDeleted?: (index: number) => void;
  value?: string;
  index: number;
  duplicate?: boolean;
  input?: InputProps;
  maxLength?: number;
  disabled?: boolean;
  className?: string;
};
