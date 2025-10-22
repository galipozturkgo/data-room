'use client';

import { classes, classNames } from '@dataroom/ui-utils';

import { ActionButtons } from '../../../../../button/components/action-buttons/ActionButtons';
import { useDialog } from '../../context/DialogContext';
import { DialogFooterProps } from './DialogFooter.types';

const DialogFooterBase: React.FC<DialogFooterProps> = ({
  className,
  children,
  confirm,
  cancel,
  actions,
}) => {
  const { onClose } = useDialog();

  return (
    <div className={classNames(styles.root, className)}>
      <ActionButtons
        actions={actions}
        confirm={confirm}
        cancel={{
          onClick: onClose,
          ...cancel,
        }}
      />
      {children}
    </div>
  );
};

const styles = {
  root: classes('flex', 'justify-end', 'gap-2', 'pt-2'),
};

export const DialogFooter = DialogFooterBase;
