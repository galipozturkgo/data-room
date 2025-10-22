'use client';

import { classes, classNames } from '@dataroom/ui-utils';
import { Controller } from 'react-hook-form';

import { FieldError } from '../../../../input/components/field/components/field-error/FieldError';
import { FieldLabel } from '../../../../input/components/field/components/field-label/FieldLabel';
import { Switch } from '../../../../input/components/switch/components/switch/Switch';
import { useFormControl } from '../../form-control/useFormControl';
import { FormSwitchProps } from './FormSwitch.types';

const FormSwitchBase: React.FC<FormSwitchProps> = ({
  field: _field,
  label,
  extraLabel,
  checked,
  disabled,
  options = {},
  input,
  ...props
}) => {
  const { field, className, errorLabel } =
    typeof _field === 'string' ? { field: _field } : _field;

  const { control, error, isDisabled } = useFormControl(field);

  const isDisable = disabled || isDisabled;
  const isError = !!error && !isDisable;

  return (
    <div className={className}>
      <FieldLabel
        label={label}
        extraLabel={extraLabel}
        htmlFor={field}
        className={styles.label}
      />

      <Controller
        name={field}
        control={control}
        defaultValue={checked || false}
        render={({ field: { value, ...rest } }) => (
          <div className={styles.toggle}>
            <Switch
              id={field}
              checked={value}
              disabled={isDisable}
              input={{ error: isError, disable: isDisable, ...input }}
              {...rest}
              {...props}
            />
            <Switch.Options
              htmlFor={field}
              selected={value}
              disable={isDisable}
              {...options}
              className={classNames(styles.options, options.className)}
            />
          </div>
        )}
      />
      {isError && <FieldError error={error} label={errorLabel || label} />}
    </div>
  );
};

const styles = {
  label: classes('select-none'),
  toggle: classes('flex', 'gap-2', 'h-7', 'my-px', 'items-center'),
  options: classes('text-sm', 'text-skin-muted', 'cursor-pointer'),
};

export const FormSwitch = FormSwitchBase;
