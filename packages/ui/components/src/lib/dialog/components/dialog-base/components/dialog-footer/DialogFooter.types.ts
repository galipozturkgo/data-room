import { ActionButtonsProps } from '../../../../../button/components/action-buttons/ActionButtons.types';

export type DialogFooterProps = ActionButtonsProps & {
  className?: string;
  children?: React.ReactNode;
};
