import { ButtonProps } from '../button/Button.types';

export type ConfirmActionKind =
  | 'ok'
  | 'yes'
  | 'save'
  | 'update'
  | 'add'
  | 'confirm'
  | 'send'
  | 'create';

export type CancelActionKind = 'cancel' | 'no' | 'close';

export type ConfirmAction = ButtonProps & {
  kind?: ConfirmActionKind;
};

export type CancelAction = ButtonProps & {
  kind?: CancelActionKind;
};

export type ActionButtonsProps = {
  confirm?: ConfirmAction;
  cancel?: CancelAction;
  actions?: {
    classsName?: string;
  };
};
