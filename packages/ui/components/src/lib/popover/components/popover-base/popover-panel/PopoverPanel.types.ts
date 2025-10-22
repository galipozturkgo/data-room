import { FloatingProps } from '../../../../floating/Floating.types';

export interface PopoverPanelRenderProps {
  open: boolean;
  close: () => void;
}

export type PopoverPanelProps = Omit<
  React.ComponentPropsWithoutRef<'div'>,
  'children'
> & {
  children?:
    | React.ReactNode
    | ((renderProps: PopoverPanelRenderProps) => React.ReactNode);
  floating?: FloatingProps;
};
