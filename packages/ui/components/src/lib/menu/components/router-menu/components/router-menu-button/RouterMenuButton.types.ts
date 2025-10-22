import { AnchorButtonProps } from '../../../../../button/components/link-button/LinkButton.types';
import { RouterMenuItemProps } from '../router-menu-item/RouterMenuItem.types';

export type RouterMenuButtonProps = AnchorButtonProps &
  Pick<RouterMenuItemProps, 'item' | 'pathname' | 'navigate' | 'parent'>;
