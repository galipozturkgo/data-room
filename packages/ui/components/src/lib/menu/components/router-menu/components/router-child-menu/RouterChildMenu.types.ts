import { RouterMenuItemProps } from '../router-menu-item/RouterMenuItem.types';

export type RouterChildMenuProps = Pick<
  RouterMenuItemProps,
  'item' | 'pathname' | 'navigate'
>;
