import { NotificationItem } from '@dataroom/ui-components';

export const somethingWentWrong = (): NotificationItem => {
  return {
    title: 'ui.shared.auth.notifications.somethingWentWrong.message',
    color: 'red',
    description: 'ui.shared.auth.notifications.somethingWentWrong.description',
  };
};
