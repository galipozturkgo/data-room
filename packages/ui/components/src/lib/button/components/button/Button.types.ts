import { IconProps } from '@dataroom/ui-utils';

import { SpinnerProps } from '../../../indicator/components/spinner/Spinner.types';
import { BaseButtonProps } from '../button-base/ButtonBase.types';

export type ButtonProps = React.ComponentPropsWithoutRef<'button'> &
  BaseButtonProps & {
    text?: string;
    spinner?: SpinnerProps;
    startIcon?: React.ReactElement<IconProps>;
    endIcon?: React.ReactElement<IconProps>;
  };
