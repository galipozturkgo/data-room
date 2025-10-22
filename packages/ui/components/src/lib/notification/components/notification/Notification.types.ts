import { IconProps } from '@dataroom/ui-utils';

export type NotificationColor = 'green' | 'red' | 'blue' | 'orange';

type RenderProps = {
  close: () => void;
};

export type NotificationItem = {
  title?: string;
  description?: string;
  content?: React.ReactNode | ((props: RenderProps) => React.ReactNode);
  icon?: React.ReactElement<IconProps>;
  color?: NotificationColor;
  duration?: number;
  dismissible?: boolean;
};

export type InnerNotificationItem = NotificationItem & {
  key: number;
};
