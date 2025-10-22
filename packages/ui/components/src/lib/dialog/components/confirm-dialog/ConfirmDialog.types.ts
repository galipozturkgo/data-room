import {
  CancelAction,
  ConfirmAction,
} from '../../../button/components/action-buttons/ActionButtons.types';

export type Color = 'green' | 'red' | 'blue' | 'orange';

export interface ConfirmDialogProps {
  open: boolean;
  onConfirm?: () => void;
  onSuccess?: () => void;
  onClose?: () => void;
  confirm?: string;
  description?: string;
  color?: Color;
  level?: number;
  children?: React.ReactNode;
  confirmProps?: ConfirmAction;
  cancelProps?: CancelAction;
}
