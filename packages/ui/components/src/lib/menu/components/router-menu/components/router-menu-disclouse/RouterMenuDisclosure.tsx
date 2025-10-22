'use client';

import { classes } from '@dataroom/ui-utils';

import { DownIcon } from '../../../../../icon/components/Down';
import { UpIcon } from '../../../../../icon/components/Up';
import { RouterMenuButton } from '../router-menu-button/RouterMenuButton';
import { RouterMenuItem } from '../router-menu-item/RouterMenuItem';
import {
  RouterMenuDisclosureButtonProps,
  RouterMenuDisclosurePanelProps,
} from './RouterMenuDisclosure.types';

const RouterMenuDisclosureButtonBase: React.FC<
  RouterMenuDisclosureButtonProps
> = ({ open, item, navigate, pathname }) => {
  if (!item.title) {
    return;
  }

  return (
    <RouterMenuButton item={item} navigate={navigate} pathname={pathname}>
      <div className={styles.button}>
        {item.title}
        {open ? <UpIcon size="sm" /> : <DownIcon size="sm" />}
      </div>
    </RouterMenuButton>
  );
};

const RouterMenuDisclosurePanelBase: React.FC<
  RouterMenuDisclosurePanelProps
> = ({ item, navigate, pathname }) => {
  if (!item?.children) {
    return;
  }

  return item.children.map((child, key) => (
    <RouterMenuItem
      key={key}
      item={child}
      parent={item.path}
      navigate={navigate}
      pathname={pathname}
    />
  ));
};

const styles = {
  button: classes('flex', 'w-full', 'items-center', 'justify-between'),
};

export const RouterMenuDisclosureButton = RouterMenuDisclosureButtonBase;

export const RouterMenuDisclosurePanel = RouterMenuDisclosurePanelBase;
