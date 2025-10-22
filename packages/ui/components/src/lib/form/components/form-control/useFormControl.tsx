'use client';

import { FieldErrorMessage } from '@dataroom/shared-types';
import { FieldValue, FieldValues, useFormContext } from 'react-hook-form';

import { FieldError } from '../../../input/components/field/components/field-error/FieldError.types';

const getFieldError = (errors?: Record<string, unknown>, field?: string) => {
  if (errors && Object.keys(errors).length !== 0 && field) {
    return (errors[field] ??
      field
        .split('.')
        .reduce<any>(
          (acc, next) =>
            acc && typeof acc === 'object' ? acc[next] : undefined,
          errors,
        )) as FieldError;
  }

  return undefined;
};

export const useFormControl = <T extends FieldValues>(field?: string) => {
  const {
    watch,
    getValues,
    control,
    setValue,
    register,
    trigger,
    setError,
    formState: {
      disabled,
      errors,
      defaultValues,
      isLoading: isFetching,
      isSubmitting,
      isDirty,
      isValid,
    },
  } = useFormContext<T>();

  const error = field && getFieldError(errors, field);
  const isLoading = isFetching || isSubmitting;
  const isDisabled = disabled || isLoading;

  const setFieldErrors = (errors: FieldErrorMessage[]) => {
    errors.forEach((error) => {
      setError(error.payload.field as FieldValue<T>, error.payload);
    });
  };

  return {
    watch,
    setValue,
    trigger,
    register,
    getValues,
    setError,
    setFieldErrors,
    errors,
    control,
    defaultValues,
    error,
    isValid,
    isDirty,
    isLoading,
    isSubmitting,
    isDisabled,
  };
};
