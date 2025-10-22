'use client';

import { classes, classNames } from '@dataroom/ui-utils';

import { TablePanelProps } from './TablePanel.types';

const TablePanelBase: React.FC<TablePanelProps> = ({ children, className }) => {
  return (
    <table className={classNames(styles.root, className)}>{children}</table>
  );
};

const styles = {
  root: classes('w-full'),
};

export const TablePanel = TablePanelBase;
