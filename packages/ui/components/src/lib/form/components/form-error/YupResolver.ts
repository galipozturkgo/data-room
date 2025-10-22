import {
  appendErrors,
  Field,
  FieldError,
  FieldErrors,
  FieldValues,
  get,
  InternalFieldName,
  Resolver,
  ResolverOptions,
  set,
} from 'react-hook-form';
import * as Yup from 'yup';

type ParamsAppended = FieldError & { params: Yup.ValidationError['params'] };

const toNestErrors = <T extends FieldValues>(
  errors: FieldErrors,
  options: ResolverOptions<T>,
): FieldErrors<T> => {
  const fieldErrors = {} as FieldErrors<T>;
  for (const path in errors) {
    const field = get(options.fields, path) as Field['_f'] | undefined;
    const error = Object.assign(errors[path] || {}, {
      ref: field && field.ref,
    });

    if (isNameInFieldArray(options.names || Object.keys(errors), path)) {
      const fieldArrayErrors = Object.assign(
        {},
        compact(get(fieldErrors, path)),
      );

      set(fieldArrayErrors, 'root', error);
      set(fieldErrors, path, fieldArrayErrors);
    } else {
      set(fieldErrors, path, error);
    }
  }

  return fieldErrors;
};

const compact = <TValue>(value: TValue[]) =>
  Array.isArray(value) ? value.filter(Boolean) : [];

const isNameInFieldArray = (
  names: InternalFieldName[],
  name: InternalFieldName,
) => names.some((n) => n.startsWith(name + '.'));

const parseErrorSchema = (
  error: Yup.ValidationError,
  validateAllFieldCriteria: boolean,
) => {
  return (error.inner || []).reduce<Record<string, ParamsAppended>>(
    (previous, { path, type: typeStr, message, params }) => {
      if (path) {
        const type = typeStr as FieldError['type'];

        if (!previous[path]) {
          previous[path] = {
            message,
            type,
            params,
          };
        }

        if (validateAllFieldCriteria) {
          const types = previous[path].types;
          const messages = types && types[type];

          previous[path] = appendErrors(
            path,
            validateAllFieldCriteria,
            previous,
            type,
            messages
              ? ([] as string[]).concat(messages as string[], message)
              : message,
          ) as ParamsAppended;
        }
      }

      return previous;
    },
    {},
  );
};

export function yupResolver<T extends FieldValues>(
  schema: Yup.AnySchema<T> | ReturnType<typeof Yup.lazy<Yup.AnySchema<T>>>,
  schemaOptions: Parameters<(typeof schema)['validate']>[1] = {},
  resolverOptions: {
    mode?: 'async' | 'sync';
    raw?: boolean;
  } = {},
): Resolver<Yup.InferType<typeof schema>> {
  return async (values, context, options) => {
    try {
      const result = await schema[
        resolverOptions.mode === 'sync' ? 'validateSync' : 'validate'
      ](
        values,
        Object.assign({ abortEarly: false }, schemaOptions, { context }),
      );

      return {
        values: resolverOptions.raw ? values : result,
        errors: {},
      };
    } catch (e) {
      const err = e as Yup.ValidationError;
      if (!err.inner) {
        throw err;
      }

      return {
        values: {},
        errors: toNestErrors(
          parseErrorSchema(err, options.criteriaMode === 'all'),
          options,
        ),
      };
    }
  };
}
