'use client';

import { classes, classNames } from '@dataroom/ui-utils';

import { RouterMenuItem } from './components/router-menu-item/RouterMenuItem';
import { RouterMenuProps } from './RouterMenu.types';

const RouterMenuBase: React.FC<RouterMenuProps> & {
  Item: typeof RouterMenuItem;
} = ({ children, className }) => {
  return <div className={classNames(styles.root, className)}>{children}</div>;
};

const styles = {
  root: classes('space-y-1'),
};

RouterMenuBase.Item = RouterMenuItem;

export const RouterMenu = RouterMenuBase;
