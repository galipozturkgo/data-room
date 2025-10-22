'use client';

import { FieldErrorMessage } from '@dataroom/shared-types';
import { FieldValue, FieldValues, Path, useForm } from 'react-hook-form';

import { yupResolver } from '../form-error/YupResolver';
import { FormHookProps } from './FormHook.types';

export const useFormHook = <T extends FieldValues>(
  args?: FormHookProps<T> | undefined,
) => {
  const { schema, ...props } = args || {};
  const resolver = schema && yupResolver(schema);

  const hook = useForm<T>({
    mode: 'onSubmit',
    criteriaMode: 'all',
    reValidateMode: 'onChange',
    resolver,
    ...props,
  });

  const originalSetValue = hook.setValue;

  hook.setValue = <K extends Path<T>>(
    name: K,
    value: T[K],
    options?: Parameters<typeof originalSetValue>[2],
  ) => {
    originalSetValue(name, value, {
      shouldDirty: true,
      ...options,
    });
  };

  const setFieldErrors = (errors: FieldErrorMessage[]) => {
    errors.forEach((error) => {
      hook.setError(error.payload.field as FieldValue<T>, error.payload);
    });
  };

  return { hook, setFieldErrors, ...hook };
};
