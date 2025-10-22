import { ListBoxOption, TValues } from '../list-box/ListBox.types';

export type ListBoxOptionsProps<T extends TValues> = {
  options: ListBoxOption<T>[];
  hideIcon?: boolean;
  hideTick?: boolean;
};
