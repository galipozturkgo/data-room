import { IconProps } from '@dataroom/ui-utils';

import { ButtonProps } from '../button/Button.types';

export type MenuButtonProps = ButtonProps & {
  icon?: React.ReactElement<IconProps>;
};
