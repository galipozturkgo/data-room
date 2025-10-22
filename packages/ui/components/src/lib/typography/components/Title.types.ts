export type TitleProps<T extends React.ElementType> = AsComponentPropsWithRef<
  T,
  {
    title?:
      | string
      | {
          title?: string;
          className?: string;
        };
  }
>;
