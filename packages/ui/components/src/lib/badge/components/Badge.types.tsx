import { Color } from '@dataroom/ui-utils';

export const BADGE_COLORS: Color[] = [
  'primary',
  'muted',
  'accent',
  'red',
  'green',
  'blue',
  'orange',
  'yellow',
] as const;

export type BadgeColor = (typeof BADGE_COLORS)[number];

export type BadgeProps = React.ComponentPropsWithoutRef<'div'> & {
  color?: BadgeColor;
  border?: boolean;
  background?: boolean;
};
