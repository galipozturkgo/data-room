import { FieldLabelProps } from '../../../input/components/field/components/field-label/FieldLabel.types';

export type FormLabelProps = Pick<FieldLabelProps, 'label' | 'extraLabel'>;

export type FormFieldProps = {
  field: string;
  className?: string;
  errorLabel?: string;
};
