'use client';

import { classes, classNames } from '@dataroom/ui-utils';
import { Controller } from 'react-hook-form';

import { ComboBox } from '../../../../input/components/combo-box/components/combo-box/ComboBox';
import {
  ComboBoxOption,
  ComboBoxValues,
} from '../../../../input/components/combo-box/components/combo-box/ComboBox.types';
import { FieldError } from '../../../../input/components/field/components/field-error/FieldError';
import { FieldLabel } from '../../../../input/components/field/components/field-label/FieldLabel';
import { useFormControl } from '../../form-control/useFormControl';
import { FormComboBoxProps } from './FormComboBox.types';

const FormComboBoxBase = <T extends ComboBoxValues>({
  field: _field,
  label,
  extraLabel,
  by,
  disabled,
  options = [],
  defaultValue,
  multiple,
  input,
  loading,
  ...props
}: FormComboBoxProps<T>) => {
  const { field, className, errorLabel } =
    typeof _field === 'string' ? { field: _field } : _field;

  const { control, error, isDisabled, setValue } = useFormControl(field);

  const isDisable = disabled || isDisabled;
  const isError = !!error && !isDisable;

  return (
    <div className={classNames(styles.root, className)}>
      <FieldLabel label={label} extraLabel={extraLabel} htmlFor={field} />

      <Controller
        name={field}
        control={control}
        defaultValue={defaultValue}
        render={({ field: { ref, onChange, onBlur, value } }) => {
          let current = null;

          if (Array.isArray(value)) {
            current = value
              .map((v) =>
                options.find(
                  (i) => (by && i[by] === (v as unknown)) || i.key === v.key,
                ),
              )
              .filter((v) => v);
          } else {
            current = options.find(
              (i) =>
                (by && i[by] === (value as unknown)) || i.key === value?.key,
            );
          }

          if (value && !current && !loading) {
            setValue(field, '');
          }

          const handleChange = (
            value: ComboBoxOption<T> | ComboBoxOption<T>[] | null,
          ) => {
            if (Array.isArray(value)) {
              const current = value.map((i) => (i && by && i[by]) || i);
              setValue(field, current);
              onChange(current);
            } else {
              const current = (value && by && value[by]) || value;
              setValue(field, current);
              onChange(current);
            }
          };

          return (
            <ComboBox
              ref={ref}
              id={field}
              multiple={multiple as never}
              value={current}
              onBlur={onBlur}
              options={options}
              disabled={isDisable}
              input={{ error: isError, disable: isDisable, ...input }}
              onChange={handleChange}
              loading={loading}
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
};

export const FormComboBox = FormComboBoxBase;
