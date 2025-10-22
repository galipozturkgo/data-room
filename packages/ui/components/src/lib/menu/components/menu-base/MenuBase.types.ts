export type MenuBaseRenderProps = {
  open: boolean;
  close: () => void;
};

export type MenuBaseProps = Omit<
  React.ComponentPropsWithoutRef<'div'>,
  'children'
> & {
  children:
    | React.ReactNode
    | ((renderProps: MenuBaseRenderProps) => React.ReactNode);
  className?: string;
};
