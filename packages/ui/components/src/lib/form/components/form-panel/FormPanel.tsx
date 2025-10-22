'use client';

import { classes, classNames } from '@dataroom/ui-utils';

import { FormPanelProps } from './FormPanel.types';

const FormPanelBase: React.FC<FormPanelProps> = ({ className, children }) => {
  return <div className={classNames(styles.root, className)}>{children}</div>;
};

const styles = {
  root: classes('flex', 'flex-col', 'gap-1.5'),
};

export const FormPanel = FormPanelBase;
