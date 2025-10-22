import { ChipInputItemProps } from '../chip-input-item/ChipInputItem.types';

export type ChipInputOption = {
  value: string;
  deleted?: boolean;
};

export type ChipInputProps = {
  onAdded?: () => void;
  items?: ChipInputOption[];
  item?: ChipInputItemProps;
  maxItem?: number;
  disabled?: boolean;
  direction?: 'vertical' | 'horizontal';
  className?: string;
  children?: React.ReactNode;
};
