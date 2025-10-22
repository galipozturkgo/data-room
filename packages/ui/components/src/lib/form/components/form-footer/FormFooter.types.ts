import { FieldValues } from 'react-hook-form';

import { ActionButtonsProps } from '../../../button/components/action-buttons/ActionButtons.types';

type RenderProps<T extends FieldValues> = {
  values?: T;
  loading?: boolean;
  disabled?: boolean;
};

export type FormFooterProps<T extends FieldValues> = ActionButtonsProps & {
  className?: string;
  children?:
    | React.ReactNode
    | ((renderProps: RenderProps<T>) => React.ReactNode);
};
