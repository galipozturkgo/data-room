'use client';

import { classes, classNames } from '@dataroom/ui-utils';
import { Controller } from 'react-hook-form';
import { v4 as uuidv4 } from 'uuid';

import { ChipInput } from '../../../../input/components/chip-input/components/chip-input/ChipInput';
import {
  ChipInputOption,
  ChipInputProps,
} from '../../../../input/components/chip-input/components/chip-input/ChipInput.types';
import { FieldError } from '../../../../input/components/field/components/field-error/FieldError';
import { FieldLabel } from '../../../../input/components/field/components/field-label/FieldLabel';
import { useFormControl } from '../../form-control/useFormControl';
import { FormChipInputProps } from './FormChipInput.types';

const FormChipInputBase: React.FC<FormChipInputProps> = ({
  field: _field,
  label,
  extraLabel,
  disabled,
  items = [],
  item = {},
  ...props
}) => {
  const { field, className, errorLabel } =
    typeof _field === 'string' ? { field: _field } : _field;

  const { control, error, isDisabled } = useFormControl(field);

  const isDisable = disabled || isDisabled;
  const isError = !!error && !isDisable;

  return (
    <div className={classNames(styles.root, className)}>
      <FieldLabel label={label} extraLabel={extraLabel} htmlFor={field} />

      <Controller
        name={field}
        control={control}
        defaultValue={items.map(({ value }) => value)}
        render={({ field: { value = [], onChange } }) => {
          const handleAdded: ChipInputProps['onAdded'] = () =>
            onChange([
              ...value,
              {
                id: uuidv4(),
                value: '',
              } as ChipInputOption,
            ]);

          const handleEdited: ChipInputProps['item']['onEdited'] = (
            index,
            newValue,
          ) => {
            const updated = value.map((i: ChipInputOption, next: number) =>
              next === index
                ? ({ ...i, value: newValue } as ChipInputOption)
                : i,
            );

            onChange(updated);
          };

          const handleDeleted: ChipInputProps['item']['onDeleted'] = (
            index,
          ) => {
            const updated = [...value];
            updated.splice(index, 1);
            onChange(updated);
          };

          return (
            <ChipInput
              items={value}
              disabled={isDisable}
              className={className}
              onAdded={handleAdded}
              {...props}
            >
              {value.map(
                ({ value, deleted }: ChipInputOption, index: number) => {
                  if (deleted) {
                    return null;
                  }

                  return (
                    <ChipInput.Item
                      key={index}
                      {...item}
                      value={value}
                      onEdited={handleEdited}
                      onDeleted={handleDeleted}
                      index={index}
                    />
                  );
                },
              )}
            </ChipInput>
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

export const FormChipInput = FormChipInputBase;
