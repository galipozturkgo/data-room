import { ListBoxOption, TValues } from '../list-box/ListBox.types';

type ListBoxOptionRenderProps = {
  active: boolean;
  selected: boolean;
  disabled: boolean;
};

export type ListBoxOptionProps<T extends TValues> = Omit<
  React.ComponentPropsWithoutRef<'li'>,
  'children'
> & {
  option: ListBoxOption<T>;
  children?:
    | React.ReactNode
    | ((props: ListBoxOptionRenderProps) => React.ReactNode);
};
