import { WrapperProps } from '../wrapper/Wrapper.types';

type Props = {
  inputClasses: string;
  backgroundClasses: string;
  borderClasses: string;
  disabledClasses?: string;
  focusVisibleClasses?: string;
  focusWithinClasses?: string;
  errorClasses?: string;
  passedClasses?: string;
  passedProps: WrapperProps<'div'>;
};

export type InputProps = Pick<
  WrapperProps<'div'>,
  'left' | 'right' | 'tabIndex' | 'className'
> & {
  error?: boolean;
  disable?: boolean;
  readOnly?: boolean;
};

export type InnerInputProps = InputProps & {
  children: (props: Props) => React.ReactNode;
};
