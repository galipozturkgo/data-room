import { useNotification } from '@dataroom/ui-components';

import { accountAlreadyExists } from './components/AccountAlreadyExists';
import { accountNotFound } from './components/AccountNotFound';
import { invalidCredentials } from './components/InvalidCredentials';
import { somethingWentWrong } from './components/SomethingWentWrong';

const notifications = {
  AccountNotFound: accountNotFound,
  InvalidCredentials: invalidCredentials,
  AccountAlreadyExists: accountAlreadyExists,
  SomethingWentWrong: somethingWentWrong,
};

type NotificationsMap = typeof notifications;

export const useAuthNotifications = () => {
  const { addNotification } = useNotification();

  return <T extends keyof NotificationsMap>(
    key: T,
    ...params: Parameters<NotificationsMap[T]>
  ) => {
    const notificationFn = notifications[key] as any;

    addNotification(notificationFn(...params));
  };
};
