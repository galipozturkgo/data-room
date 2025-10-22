import { ListBoxOption, TValues } from '../list-box/ListBox.types';

export type ListBoxSelectionProps<T extends TValues> =
  React.ComponentPropsWithRef<'div'> & {
    selected?: ListBoxOption<T> | ListBoxOption<T>[] | null;
    disabled?: boolean;
    placeholder?: string;
    seperator?: React.ReactNode;
  };
