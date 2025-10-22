'use client';

import { classes, classNames } from '@dataroom/ui-utils';

import { Checkbox } from '../../../../input/components/checkbox/components/Checkbox';
import { FieldError } from '../../../../input/components/field/components/field-error/FieldError';
import { FieldLabel } from '../../../../input/components/field/components/field-label/FieldLabel';
import { useFormControl } from '../../form-control/useFormControl';
import { FormCheckboxProps } from './FormCheckbox.types';

const FormCheckboxBase: React.FC<FormCheckboxProps> = ({
  field: _field,
  label,
  extraLabel,
  disabled,
  input,
  ...props
}) => {
  const { field, className, errorLabel } =
    typeof _field === 'string' ? { field: _field } : _field;

  const { register, error, isDisabled } = useFormControl(field);

  const isDisable = disabled || isDisabled;
  const isError = !!error && !isDisable;

  return (
    <div className={styles.root}>
      <div className={classNames(styles.container, className)}>
        <FieldLabel
          label={label}
          extraLabel={extraLabel}
          htmlFor={field}
          className={classNames(styles.label, isDisable && styles.disabled)}
        />

        <Checkbox
          id={field}
          disabled={isDisable}
          input={{ error: isError, disable: isDisable, ...input }}
          {...props}
          {...register(field)}
        />
      </div>

      {isError && <FieldError error={error} label={errorLabel || label} />}
    </div>
  );
};

const styles = {
  root: classes('w-full'),
  container: classes('flex', 'items-center', 'gap-1'),
  label: classes('select-none', 'cursor-pointer'),
  disabled: classes('cursor-default'),
};

export const FormCheckbox = FormCheckboxBase;
