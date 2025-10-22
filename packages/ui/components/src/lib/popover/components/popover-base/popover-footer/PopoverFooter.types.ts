import { ActionButtonsProps } from '../../../../button/components/action-buttons/ActionButtons.types';

export type PopoverFooterProps = ActionButtonsProps & {
  className?: string;
  children?: React.ReactNode;
};
