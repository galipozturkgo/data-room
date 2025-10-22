export interface PopoverBaseRenderProps {
  open: boolean;
  close: () => void;
}

export type PopoverBaseProps = Omit<
  React.ComponentPropsWithoutRef<'div'>,
  'children'
> & {
  level?: number;
  reference?: HTMLElement;
  children:
    | React.ReactNode
    | ((props: PopoverBaseRenderProps) => React.ReactNode);
  onClose?: () => void;
};
