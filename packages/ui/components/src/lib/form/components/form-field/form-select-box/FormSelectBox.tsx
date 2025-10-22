'use client';

import { classes, classNames } from '@dataroom/ui-utils';
import { Controller } from 'react-hook-form';

import { FieldError } from '../../../../input/components/field/components/field-error/FieldError';
import { FieldLabel } from '../../../../input/components/field/components/field-label/FieldLabel';
import { SelectBox } from '../../../../input/components/select-box/components/select-box/SelectBox';
import { SelectBoxOption } from '../../../../input/components/select-box/components/select-box/SelectBox.types';
import { useFormControl } from '../../form-control/useFormControl';
import { FormSelectBoxProps } from './FormSelectBox.types';

const FormSelectBoxBase: React.FC<FormSelectBoxProps> = ({
  field: _field,
  by,
  options = [],
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
        render={({ field: { value, onChange, name, ref } }) => {
          const selected = value
            ?.map((v) =>
              options?.find(
                (i) => (by && (i[by] as unknown) === v) || i.key === v.key,
              ),
            )
            .filter((v) => v);

          const handleChange = (selected: SelectBoxOption[]) =>
            onChange(selected.map((i) => i[by] || i));

          return (
            <SelectBox
              ref={ref}
              id={field}
              values={selected}
              options={options}
              disabled={isDisable}
              input={{ error: isError, disable: isDisable, ...input }}
              onChange={handleChange}
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

export const FormSelectBox = Object.assign(FormSelectBoxBase, SelectBox);
