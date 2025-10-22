'use client';

import { classes, classNames } from '@dataroom/ui-utils';
import { FieldValues } from 'react-hook-form';

import { ActionButtons } from '../../../button/components/action-buttons/ActionButtons';
import {
  CancelAction,
  ConfirmAction,
} from '../../../button/components/action-buttons/ActionButtons.types';
import { useFormControl } from '../form-control/useFormControl';
import { FormFooterProps } from './FormFooter.types';

const FormFooterBase = <T extends FieldValues>({
  className,
  children,
  confirm: customConfirm = {},
  cancel: customCancel = {},
  actions,
}: FormFooterProps<T>) => {
  const { getValues, isLoading, isSubmitting, isDisabled, isDirty } =
    useFormControl<T>();

  const confirm: ConfirmAction = {
    type: 'submit',
    disabled: isDisabled || !isDirty,
    loading: isSubmitting,
    ...customConfirm,
  };

  const cancel: CancelAction = { disabled: isDisabled, ...customCancel };

  return (
    <div className={classNames(styles.root, className)}>
      <ActionButtons actions={actions} confirm={confirm} cancel={cancel} />

      {typeof children === 'function'
        ? children({
            values: getValues(),
            loading: isLoading,
            disabled: isDisabled,
          })
        : children}
    </div>
  );
};

const styles = {
  root: classes('flex', 'justify-end', 'gap-2', 'pt-2'),
};

export const FormFooter = FormFooterBase;
