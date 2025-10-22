'use client';

import { classes } from '@dataroom/ui-utils';

import { IconButton } from '../../../button/components/icon-button/IconButton';
import { CloseCircleIcon } from '../../../icon/components/CloseCircle';
import { SnackbarDismissProps } from './SnackbarDismiss.types';

const SnackbarDismissBase: React.FC<SnackbarDismissProps> = ({ close }) => {
  return (
    <IconButton
      icon={<CloseCircleIcon />}
      variant="text"
      className={styles.button}
      onClick={close}
    />
  );
};

const styles = {
  button: classes('p-0', 'flex-shrink-0'),
};

export const SnackbarDismiss = SnackbarDismissBase;
