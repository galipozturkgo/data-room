import { Color, IconProps } from '@dataroom/ui-utils';

export const FEEDBACK_COLORS: Color[] = [
  'primary',
  'muted',
  'accent',
  'red',
  'green',
  'blue',
  'orange',
  'yellow',
] as const;

export type FeedbackColor = (typeof FEEDBACK_COLORS)[number];

export interface FeedbackProps {
  title: string;
  description?: string;
  color?: FeedbackColor;
  icon?: React.ReactElement<IconProps>;
  border?: boolean;
  className?: string;
  children?: React.ReactNode;
}
