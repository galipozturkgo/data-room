import { FieldValues, SubmitHandler, UseFormReturn } from 'react-hook-form';

export type FormProps<T extends FieldValues> =
  React.ComponentPropsWithoutRef<'form'> & {
    hook: UseFormReturn<T>;
    handleSubmit?: SubmitHandler<T>;
  };
