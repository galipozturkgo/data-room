import { InputProps } from '../../../input/components/input/Input.types';
import { ListBoxPanelProps } from '../list-box-panel/ListBoxPanel.types';

export type ListBoxValues = string | number | boolean | Record<string, unknown>;

export interface ListBoxOption<T extends ListBoxValues> {
  key: string;
  value?: T;
  children?: React.ReactNode;
  disabled?: boolean;
  divide?: boolean;
}

export type ListBoxProps<T extends ListBoxValues> = Omit<
  React.ComponentPropsWithRef<'div'>,
  'ref' | 'value' | 'defaultValue' | 'onChange'
> & {
  input?: InputProps;
  hideIcon?: boolean;
  hideTick?: boolean;
  seperator?: React.ReactNode;
  placeholder?: string;
  panel?: Omit<ListBoxPanelProps, 'open' | 'children'>;
} & (
    | {
        options?: ListBoxOption<T>[];
        value?: ListBoxOption<T> | null;
        defaultValue?: T;
        onChange?(value: ListBoxOption<T> | null): void;
        nullable: true;
        multiple?: false;
        disabled?: boolean;
      }
    | {
        options?: ListBoxOption<T>[];
        value?: ListBoxOption<T>;
        defaultValue?: T;
        onChange?(value: ListBoxOption<T>): void;
        nullable?: false;
        multiple?: false;
        disabled?: boolean;
      }
    | {
        options?: ListBoxOption<T>[];
        value?: ListBoxOption<T>[];
        defaultValue?: T[];
        onChange?(value: ListBoxOption<T>[]): void;
        nullable?: false;
        multiple: true;
        disabled?: boolean;
      }
    | {
        options?: ListBoxOption<T>[];
        value?: ListBoxOption<T>[];
        defaultValue?: T[];
        onChange?(value: ListBoxOption<T>[]): void;
        nullable: true;
        multiple: true;
        disabled?: boolean;
      }
  );
