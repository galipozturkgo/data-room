import { NotificationItem } from '../notification/Notification.types';

export type NotificationContentProps = {
  item: NotificationItem;
  close: () => void;
};
