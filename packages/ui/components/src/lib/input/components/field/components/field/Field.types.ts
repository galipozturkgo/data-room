import { FieldError } from '../field-error/FieldError.types';
import { FieldLabelProps } from '../field-label/FieldLabel.types';

export type FieldProps = Pick<
  FieldLabelProps,
  'label' | 'extraLabel' | 'htmlFor'
> & {
  children: React.ReactNode;
  className?: string;
  error?: FieldError;
};
