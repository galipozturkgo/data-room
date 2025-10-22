import { RouterMenuItemProps } from '../router-menu-item/RouterMenuItem.types';

export type RouterMenuDisclosureButtonProps = Pick<
  RouterMenuItemProps,
  'item' | 'pathname' | 'navigate'
> & {
  open: boolean;
};

export type RouterMenuDisclosurePanelProps = Pick<
  RouterMenuItemProps,
  'item' | 'pathname' | 'navigate'
>;
