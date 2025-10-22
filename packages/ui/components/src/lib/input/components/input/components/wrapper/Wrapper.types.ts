import { AdornmentProps } from '../adornment/Adornment.types';

export type WrapperProps<T extends React.ElementType> = AsComponentPropsWithRef<
  T,
  {
    left?: AdornmentProps;
    right?: AdornmentProps;
  }
>;
