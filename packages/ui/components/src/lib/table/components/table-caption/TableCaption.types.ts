import { ButtonProps } from '../../../button/components/button/Button.types';

export type TableCaptionProps = {
  title?: string;
  search?: boolean;
  refresh?: ButtonProps;
  className?: string;
  children?: React.ReactNode;
  bottom?: React.ReactNode;
};
