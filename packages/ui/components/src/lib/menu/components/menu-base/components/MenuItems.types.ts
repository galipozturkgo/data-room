import { FloatingProps } from '../../../../floating/Floating.types';

type MenuItemsRenderProps = {
  open: boolean;
  close: () => void;
};

export type MenuItemsProps = Omit<
  React.ComponentPropsWithoutRef<'div'>,
  'children'
> & {
  children:
    | React.ReactNode
    | ((props: MenuItemsRenderProps) => React.ReactNode);
  floating?: FloatingProps;
  reference?: HTMLElement | null;
};
