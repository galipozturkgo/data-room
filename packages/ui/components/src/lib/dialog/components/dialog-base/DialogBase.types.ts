export type DialogBaseProps = Omit<
  React.ComponentPropsWithoutRef<'div'>,
  'role'
> & {
  open?: boolean;
  onClose?: () => void;
  level?: number;
};
