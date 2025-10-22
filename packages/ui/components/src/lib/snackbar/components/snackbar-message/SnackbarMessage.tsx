'use client';

import { classes } from '@dataroom/ui-utils';

import { SnackbarMessageProps } from './SnackbarMessage.types';

export const SnackbarMessageBase: React.FC<SnackbarMessageProps> = ({
  item,
  color,
}) => {
  return <div className={styles.text[color || 'green']}>{item}</div>;
};

const styles = {
  text: {
    green: classes('text-skin-green'),
    red: classes('text-skin-red'),
    blue: classes('text-skin-blue'),
    orange: classes('text-skin-orange'),
  },
};

export const SnackbarMessage = SnackbarMessageBase;
