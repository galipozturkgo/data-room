import { FieldValues, UseFormProps } from 'react-hook-form';
import * as Yup from 'yup';

export type FormHookProps<T extends FieldValues> = UseFormProps<T> & {
  schema?: Yup.AnySchema<any>;
};
