import { classes, classNames } from '@dataroom/ui-utils';
import React from 'react';

import { ActionButtons } from '../../../../button/components/action-buttons/ActionButtons';
import {
  CancelAction,
  ConfirmAction,
} from '../../../../button/components/action-buttons/ActionButtons.types';
import { usePopover } from '../popover-context/PopoverContext';
import { PopoverFooterProps } from './PopoverFooter.types';

const PopoverFooterBase: React.FC<PopoverFooterProps> = ({
  className,
  children,
  confirm: customConfirm = {},
  cancel: customCancel = {},
  actions,
}) => {
  const { close } = usePopover();

  const confirm: ConfirmAction = { hidden: true, ...customConfirm };

  const cancel: CancelAction = {
    kind: 'close',
    onClick: close,
    ...customCancel,
  };

  return (
    <div className={classNames(styles.root, className)}>
      <ActionButtons actions={actions} confirm={confirm} cancel={cancel} />
      {children}
    </div>
  );
};

const styles = {
  root: classes('flex', 'justify-end', 'gap-2', 'pt-2'),
};

export const PopoverFooter = React.memo(PopoverFooterBase);
