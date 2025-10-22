'use client';

import { classes, classNames } from '@dataroom/ui-utils';
import { useEffect } from 'react';
import React from 'react';
import { FieldValues, FormProvider } from 'react-hook-form';

import { FieldError } from '../../../input/components/field/components/field-error/FieldError';
import { FieldLabel } from '../../../input/components/field/components/field-label/FieldLabel';
import { FormCheckbox } from '../form-field/form-checkbox/FormCheckbox';
import { FormChipInput } from '../form-field/form-chip-input/FormChipInput';
import { FormComboBox } from '../form-field/form-combo-box/FormComboBox';
import { FormListBox } from '../form-field/form-list-box/FormListBox';
import { FormNumber } from '../form-field/form-number/FormNumber';
import { FormRadio } from '../form-field/form-radio/FormRadio';
import { FormSelectBox } from '../form-field/form-select-box/FormSelectBox';
import { FormSwitch } from '../form-field/form-switch/FormSwitch';
import { FormText } from '../form-field/form-text/FormText';
import { FormTextArea } from '../form-field/form-textarea/FormTextArea';
import { FormFooter } from '../form-footer/FormFooter';
import { FormLoading } from '../form-loading/FormLoading';
import { FormPanel } from '../form-panel/FormPanel';
import { FormTitle } from '../form-title/FormTitle';
import { FormProps } from './Form.types';

const FormBase = <T extends FieldValues>(
  { hook, className, children, handleSubmit, ...props }: FormProps<T>,
  ref: React.Ref<HTMLFormElement>,
) => {
  useEffect(() => {
    return () => hook.reset();
  }, [hook]);

  const isLoading = hook.formState.isLoading;

  return (
    <FormProvider {...hook}>
      <form
        ref={ref}
        className={classNames(styles.root, className)}
        onSubmit={handleSubmit && hook.handleSubmit(handleSubmit)}
        {...props}
      >
        {children}
        <FormLoading loading={isLoading} />
      </form>
    </FormProvider>
  );
};

const styles = {
  root: classes('relative', 'flex', 'flex-col'),
};

export const Form = Object.assign(React.forwardRef(FormBase), {
  Label: FieldLabel,
  Error: FieldError,
  Title: FormTitle,
  Panel: FormPanel,
  Footer: FormFooter,
  Checkbox: FormCheckbox,
  ChipInput: FormChipInput,
  ComboBox: FormComboBox,
  ListBox: FormListBox,
  Number: FormNumber,
  Radio: FormRadio,
  SelectBox: FormSelectBox,
  Switch: FormSwitch,
  Text: FormText,
  TextArea: FormTextArea,
});
