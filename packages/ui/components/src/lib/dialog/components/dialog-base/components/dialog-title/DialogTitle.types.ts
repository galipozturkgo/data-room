import { Color } from '@dataroom/ui-utils';

import { IconButtonProps } from '../../../../../button/components/icon-button/IconButton.types';

export const DIALOG_TITLE_COLOR: Color[] = [
  'primary',
  'accent',
  'red',
  'green',
  'blue',
  'orange',
  'yellow',
] as Color[];

type DialogTitleColor = (typeof DIALOG_TITLE_COLOR)[number];

export interface DialogTitleProps {
  title?: string;
  color?: DialogTitleColor;
  children?: React.ReactNode;
  closeButtonVisible?: boolean;
  closeButton?: Omit<IconButtonProps, 'name'>;
  className?: string;
}
