import { ButtonProps } from '../../button/button/Button.types';

export type TableCaptionProps = {
  title?: string;
  search?: boolean;
  refresh?: ButtonProps;
  children?: React.ReactNode;
  className?: string;
};
