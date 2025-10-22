'use client';

import { classes, classNames } from '@dataroom/ui-utils';

import { Button } from '../button/Button';
import {
  ActionButtonsProps,
  CancelAction,
  CancelActionKind,
  ConfirmAction,
  ConfirmActionKind,
} from './ActionButtons.types';

const CONFIRM_LOCALES: { [keys in ConfirmActionKind]: string } = {
  ok: 'Ok',
  yes: 'Yes',
  save: 'Save',
  update: 'Update',
  add: 'Add',
  confirm: 'Confirm',
  send: 'Send',
  create: 'Create',
};

const CANCEL_LOCALES: { [keys in CancelActionKind]: string } = {
  cancel: 'Cancel',
  no: 'No',
  close: 'Close',
};

const ActionButtonsBase: React.FC<ActionButtonsProps> = ({
  confirm: customConfirm = {},
  cancel: customCancel = {},
  actions: { classsName } = {},
}) => {
  const confirm: ConfirmAction = { kind: 'ok', ...customConfirm };

  const cancel: CancelAction = { kind: 'cancel', ...customCancel };

  const handleClick = async (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    onClick?: React.MouseEventHandler<HTMLButtonElement>,
  ) => {
    if (onClick) {
      onClick.constructor.name === 'AsyncFunction'
        ? await onClick(event)
        : onClick(event);
    }
  };

  if (confirm?.hidden && cancel?.hidden) {
    return null;
  }

  return (
    <div className={classNames(styles.root, classsName)}>
      {!cancel?.hidden && (
        <Button
          color="accent"
          {...cancel}
          text={cancel?.text || (cancel?.kind && CANCEL_LOCALES[cancel?.kind])}
          onClick={async (e) => await handleClick(e, cancel?.onClick)}
        />
      )}

      {!confirm?.hidden && (
        <Button
          type="submit"
          variant="contained"
          color="accent"
          {...confirm}
          text={
            confirm?.text || (confirm?.kind && CONFIRM_LOCALES[confirm?.kind])
          }
          onClick={async (e) => await handleClick(e, confirm?.onClick)}
        />
      )}
    </div>
  );
};

const styles = {
  root: classes('flex', 'w-full', 'justify-end', 'gap-2'),
};

export const ActionButtons = ActionButtonsBase;
