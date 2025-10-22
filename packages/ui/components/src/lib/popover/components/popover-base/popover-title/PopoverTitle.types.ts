import { Color } from '@dataroom/ui-utils';

export const POPOVER_TITLE_COLOR: Color[] = [
  'primary',
  'accent',
  'red',
  'green',
  'blue',
  'orange',
  'yellow',
] as Color[];

type PopoverTitleColor = (typeof POPOVER_TITLE_COLOR)[number];

export interface PopoverTitleProps {
  title?: string;
  color?: PopoverTitleColor;
  children?: React.ReactNode;
  className?: string;
}
