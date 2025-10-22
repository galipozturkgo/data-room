import { IconProps } from '@dataroom/ui-utils';

import { SpinnerProps } from '../../../indicator/components/spinner/Spinner.types';
import { BaseButtonProps } from '../button-base/ButtonBase.types';

export type IconButtonProps = React.ComponentPropsWithoutRef<'button'> &
  BaseButtonProps & {
    as?: React.ElementType;
    icon?: React.ReactElement<IconProps>;
    spinner?: SpinnerProps;
  };
