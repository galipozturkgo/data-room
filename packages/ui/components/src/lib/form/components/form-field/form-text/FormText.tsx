'use client';

import { classes, classNames } from '@dataroom/ui-utils';
import { Controller } from 'react-hook-form';

import { FieldError } from '../../../../input/components/field/components/field-error/FieldError';
import { FieldLabel } from '../../../../input/components/field/components/field-label/FieldLabel';
import { Text } from '../../../../input/components/text/components/Text';
import { useFormControl } from '../../form-control/useFormControl';
import { FormTextProps } from './FormText.types';

const FormTextBase: React.FC<FormTextProps> = ({
  field: _field,
  type,
  label,
  extraLabel,
  disabled,
  defaultValue,
  input,
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
        render={({ field: { ...rest } }) => (
          <Text
            id={field}
            type={type}
            disabled={isDisable}
            input={{ error: isError, disable: isDisable, ...input }}
            {...rest}
            {...props}
          />
        )}
      />

      {isError && <FieldError error={error} label={errorLabel || label} />}
    </div>
  );
};

const styles = {
  root: classes('w-full'),
  hidden: classes('hidden'),
};

export const FormText = FormTextBase;
