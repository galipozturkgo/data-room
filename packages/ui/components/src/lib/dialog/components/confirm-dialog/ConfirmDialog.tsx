'use client';

import { classes } from '@dataroom/ui-utils';
import { Fragment } from 'react';
import React from 'react';

import { BaseDialog } from '../dialog-base/DialogBase';
import { ConfirmButton } from './components/ConfirmButton';
import { ConfirmIconButton } from './components/ConfirmIconButton';
import { ConfirmMenuButton } from './components/ConfirmMenuButton';
import { ConfirmDialogProps } from './ConfirmDialog.types';

const ConfirmDialogBase: React.FC<ConfirmDialogProps> = ({
  open,
  confirm,
  description,
  onConfirm,
  onSuccess,
  onClose,
  color = 'orange',
  level,
  children,
  confirmProps = {},
  cancelProps = {},
}) => {
  const handleConfirm = async () => {
    try {
      if (onConfirm) {
        if (onConfirm.constructor.name === 'AsyncFunction') {
          await onConfirm();
        } else {
          onConfirm();
        }
      }

      onSuccess?.();
    } catch (err) {
      console.error(err);
    }
  };

  const handleCancel = () => onClose?.();

  return (
    <Fragment>
      {children}
      <BaseDialog open={open} level={level || 1} onClose={handleCancel}>
        <BaseDialog.Backdrop />
        <BaseDialog.Panel size="sm">
          <BaseDialog.Title
            color={color}
            title={confirm}
            className={styles.header}
          />
          {description && <BaseDialog.Description description={description} />}
          <BaseDialog.Footer
            cancel={{
              color: color || 'orange',
              onClick: handleCancel,
              ...cancelProps,
            }}
            confirm={{
              color: color || 'orange',
              onClick: handleConfirm,
              ...confirmProps,
            }}
          />
        </BaseDialog.Panel>
      </BaseDialog>
    </Fragment>
  );
};

const styles = {
  header: classes('flex', 'space-x-2'),
};

export const ConfirmDialog = Object.assign(React.memo(ConfirmDialogBase), {
  Button: ConfirmButton,
  IconButton: ConfirmIconButton,
  MenuButton: ConfirmMenuButton,
});
