'use client';

import { classes, classNames } from '@dataroom/ui-utils';
import { Controller } from 'react-hook-form';

import { FieldError } from '../../../../input/components/field/components/field-error/FieldError';
import { FieldLabel } from '../../../../input/components/field/components/field-label/FieldLabel';
import { Radio } from '../../../../input/components/radio/components/radio/Radio';
import { useFormControl } from '../../form-control/useFormControl';
import { FormRadioProps } from './FormRadio.types';

const FormRadioBase: React.FC<FormRadioProps> & {
  Option: typeof Radio.Option;
} = ({
  field: _field,
  label,
  extraLabel,
  value,
  defaultValue,
  disabled,
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
        defaultValue={defaultValue || value || null}
        render={({ field: { value, ...rest } }) => (
          <Radio
            id={field}
            value={value}
            defaultValue={defaultValue}
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

FormRadioBase.Option = Radio.Option;

export const FormRadio = FormRadioBase;
