'use client';

import { classes, classNames } from '@dataroom/ui-utils';
import { Controller } from 'react-hook-form';

import { FieldError } from '../../../../input/components/field/components/field-error/FieldError';
import { FieldLabel } from '../../../../input/components/field/components/field-label/FieldLabel';
import { Number } from '../../../../input/components/number';
import { useFormControl } from '../../form-control/useFormControl';
import { FormNumberProps } from './FormNumber.types';

const FormNumberBase: React.FC<FormNumberProps> = ({
  field: _field,
  label,
  extraLabel,
  disabled,
  defaultValue,
  input,
  autoComplete = 'off',
  hidden,
  ...props
}) => {
  const { field, className, errorLabel } =
    typeof _field === 'string' ? { field: _field } : _field;

  const { control, error, isDisabled } = useFormControl(field);

  const isDisable = disabled || isDisabled;
  const isError = !!error && !isDisable;

  return (
    <div
      className={classNames(styles.root, hidden && styles.hidden, className)}
    >
      <FieldLabel label={label} extraLabel={extraLabel} htmlFor={field} />

      <Controller
        name={field}
        control={control}
        defaultValue={defaultValue}
        render={({ field: { value, onChange, ...rest } }) => {
          const validValue = isNaN(value) || value === null ? undefined : value;

          const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
            const newValue = parseFloat(e.target.value);

            if (isNaN(newValue) || newValue === null) {
              onChange(undefined);
            } else {
              onChange(newValue);
            }
          };

          return (
            <Number
              id={field}
              value={validValue}
              disabled={isDisable}
              onChange={handleChange}
              autoComplete={autoComplete}
              defaultValue={defaultValue}
              input={{ error: isError, disable: isDisable, ...input }}
              {...rest}
              {...props}
            />
          );
        }}
      />

      {isError && <FieldError error={error} label={errorLabel || label} />}
    </div>
  );
};

const styles = {
  root: classes('w-full'),
  hidden: classes('hidden'),
};

export const FormNumber = FormNumberBase;
