'use client';

import { classes, classNames } from '@dataroom/ui-utils';
import { Controller } from 'react-hook-form';

import { FieldError } from '../../../../input/components/field/components/field-error/FieldError';
import { FieldLabel } from '../../../../input/components/field/components/field-label/FieldLabel';
import { TextArea } from '../../../../input/components/textarea/components/TextArea';
import { useFormControl } from '../../form-control/useFormControl';
import { FormTextAreaProps } from './FormTextArea.types';

const FormTextAreaBase: React.FC<FormTextAreaProps> = ({
  field: _field,
  label,
  extraLabel,
  disabled,
  defaultValue,
  input,
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
        defaultValue={defaultValue}
        render={({ field: { ...rest } }) => (
          <TextArea
            id={field}
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
};

export const FormTextArea = FormTextAreaBase;
