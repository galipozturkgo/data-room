import { IconProps } from '@dataroom/ui-utils';

export interface SwitchOptionsProps {
  option?:
    | 'active-passive'
    | 'enable-disable'
    | 'true-false'
    | 'open-closed'
    | 'yes-no';
  selected?: boolean;
  className?: string;
  htmlFor?: string;
  disable?: boolean;
  icon?: {
    true: React.ReactElement<IconProps>;
    false: React.ReactElement<IconProps>;
    className?: string;
  };
}
