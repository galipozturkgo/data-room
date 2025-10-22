import { Color } from '@dataroom/ui-utils';

export const BUTTON_VARIANTS = [
  'default',
  'contained',
  'outlined',
  'text',
] as const;

export type ButtonVariant = (typeof BUTTON_VARIANTS)[number];

export const BUTTON_COLORS: Color[] = [
  'primary',
  'muted',
  'accent',
  'red',
  'green',
  'blue',
  'orange',
  'yellow',
] as const;

export type ButtonColor = (typeof BUTTON_COLORS)[number];

type BaseButtonRenderProps = {
  loading: boolean;
};

export type BaseButtonProps = {
  loading?: boolean;
  disabled?: boolean;
  readOnly?: boolean;
  variant?: ButtonVariant;
  color?: ButtonColor;
};

export type InnerBaseButtonProps<T extends React.ElementType> =
  AsComponentPropsWithRef<
    T,
    BaseButtonProps & {
      children:
        | React.ReactNode
        | ((props: BaseButtonRenderProps) => React.ReactNode);
    }
  >;
