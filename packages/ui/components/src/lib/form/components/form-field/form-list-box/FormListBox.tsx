'use client';

import { classes, classNames } from '@dataroom/ui-utils';
import { Controller } from 'react-hook-form';

import { FieldError } from '../../../../input/components/field/components/field-error/FieldError';
import { FieldLabel } from '../../../../input/components/field/components/field-label/FieldLabel';
import { ListBox } from '../../../../input/components/list-box/components/list-box/ListBox';
import {
  ListBoxOption,
  ListBoxValues,
} from '../../../../input/components/list-box/components/list-box/ListBox.types';
import { useFormControl } from '../../form-control/useFormControl';
import { FormListBoxProps } from './FormListBox.types';

const FormListBoxBase = <T extends ListBoxValues>({
  field: _field,
  by,
  label,
  extraLabel,
  disabled,
  options,
  nullable,
  multiple,
  input,
  hidden,
  defaultValue,
  ...props
}: FormListBoxProps<T>) => {
  const { field, className, errorLabel } =
    typeof _field === 'string' ? { field: _field } : _field;

  const { control, error, isDisabled, setValue } = useFormControl(field);

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
        render={({ field: { ref, onChange, onBlur, value } }) => {
          let selected = null;

          if (Array.isArray(value)) {
            selected = value
              .map((v) =>
                options?.find(
                  (i) => (by && (i[by] as unknown) === v) || i.key === v.key,
                ),
              )
              .filter((v) => v);
          } else {
            selected = options?.find(
              (i) =>
                (by && (i[by] as unknown) === value) || i.key === value?.key,
            );
          }

          if (value && !selected) {
            setValue(field, '');
          }

          const handleChange = (
            selections: ListBoxOption<T> | ListBoxOption<T>[] | null,
          ) => {
            if (Array.isArray(selections)) {
              const current = selections.map((i) => (i && by && i[by]) || i);
              setValue(field, current);
              onChange(current);
            } else {
              const current =
                (selections && by && selections[by]) || selections;
              setValue(field, current);
              onChange(current);
            }
          };

          return (
            <ListBox
              ref={ref}
              id={field}
              nullable={nullable as never}
              multiple={multiple as never}
              value={selected}
              defaultValue={defaultValue as never}
              onBlur={onBlur}
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

export const FormListBox = FormListBoxBase;
