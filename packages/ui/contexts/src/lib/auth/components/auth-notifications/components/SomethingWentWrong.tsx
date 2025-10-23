import { NotificationItem } from '@dataroom/ui-components';

export const somethingWentWrong = (): NotificationItem => {
  return {
    title: 'Something went wrong',
    color: 'red',
    description: 'Something went wrong, please try again later',
  };
};
