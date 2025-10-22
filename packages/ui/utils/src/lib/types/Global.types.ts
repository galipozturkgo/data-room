declare module 'react' {
  function forwardRef<T, P = Record<string, never>>(
    render: (props: P, ref: React.RefObject<T>) => React.ReactNode,
  ): (props: P & React.RefAttributes<T>) => React.ReactElement | null;
}

declare global {
  type OmitProps<T extends React.ElementType, P> = keyof (AsProp<T> & P);

  type AsProp<T extends React.ElementType> = {
    as?: T;
  };

  type AsRef<T extends React.ElementType> =
    React.ComponentPropsWithRef<T>['ref'];

  type AsComponentProps<
    T extends React.ElementType,
    Props = Record<string, never>,
  > = React.PropsWithoutRef<Props & AsProp<T>> &
    Omit<React.ComponentPropsWithoutRef<T>, OmitProps<T, Props>>;

  type AsComponentPropsWithRef<
    T extends React.ElementType,
    Props = Record<string, never>,
  > = AsComponentProps<T, Props> & { ref?: AsRef<T> };
}

export {};
