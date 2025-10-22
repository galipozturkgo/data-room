import { TitleProps } from '../../../typography/components/Title.types';

export type FormTitleProps = {
  title?: TitleProps<'h2'>['title'];
  children?: React.ReactNode;
  className?: string;
};
