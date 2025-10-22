'use client';

import { RouterChildMenu } from '../router-child-menu/RouterChildMenu';
import { RouterMenuButton } from '../router-menu-button/RouterMenuButton';
import { RouterMenuItemProps } from './RouterMenuItem.types';

const RouterMenuItemBase: React.FC<RouterMenuItemProps> = ({
  item,
  navigate,
  pathname,
  parent,
}) => {
  if (item?.hidden) {
    return item?.children?.map((child, key) => (
      <RouterMenuItem
        key={key}
        item={child}
        navigate={navigate}
        pathname={pathname}
      />
    ));
  }

  return item?.children ? (
    <RouterChildMenu item={item} navigate={navigate} pathname={pathname} />
  ) : (
    <RouterMenuButton
      item={item}
      navigate={navigate}
      pathname={pathname}
      parent={parent}
    />
  );
};

export const RouterMenuItem = RouterMenuItemBase;
