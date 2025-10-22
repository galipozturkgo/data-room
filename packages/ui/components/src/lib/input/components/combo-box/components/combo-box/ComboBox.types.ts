import { InputProps } from '../../../input/components/input/Input.types';
import { ComboBoxPanelProps } from '../combo-box-panel/ComboBoxPanel.types';

export type ComboBoxValues =
  | string
  | number
  | boolean
  | Record<string, unknown>;

export interface ComboBoxOption<T extends ComboBoxValues> {
  key: string;
  value?: T;
  children?: React.ReactNode;
  disabled?: boolean;
  divide?: boolean;
  hidden?: boolean;
}

export type ComboBoxProps<T extends ComboBoxValues> = Omit<
  React.ComponentPropsWithRef<'input'>,
  'ref' | 'value' | 'onChange'
> & {
  options?: ComboBoxOption<T>[];
  input?: InputProps;
  disabled?: boolean;
  hideEmpty?: boolean;
  hideIcon?: boolean;
  hideTick?: boolean;
  filtering?: boolean;
  loading?: boolean;
  panel?: Omit<ComboBoxPanelProps, 'open' | 'children'>;
} & (
    | {
        value?: ComboBoxOption<T> | null;
        defaultValue?: ComboBoxOption<T> | null;
        onChange?(value: ComboBoxOption<T> | null): void;
        nullable: true;
        multiple?: false;
      }
    | {
        value?: ComboBoxOption<T>;
        defaultValue?: ComboBoxOption<T>;
        onChange?(value: ComboBoxOption<T>): void;
        nullable?: false;
        multiple?: false;
      }
    | {
        value?: ComboBoxOption<T>[];
        defaultValue?: ComboBoxOption<T>[];
        onChange?(value: ComboBoxOption<T>[]): void;
        nullable?: false;
        multiple: true;
      }
    | {
        value?: ComboBoxOption<T>[];
        defaultValue?: ComboBoxOption<T>[];
        onChange?(value: ComboBoxOption<T>[]): void;
        nullable: true;
        multiple: true;
      }
  );
