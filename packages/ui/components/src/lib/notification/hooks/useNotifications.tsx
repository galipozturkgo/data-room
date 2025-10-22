import { useNotification } from '../context/NotificationContext';

export const useNotifications = <
  T extends Record<string, (...args: any) => any>,
>(
  notifications: T,
) => {
  const { addNotification } = useNotification();

  const callNotificationByKey = <K extends keyof T>(
    key: K,
    ...args: Parameters<T[K]>
  ) => {
    const selectedNotification = notifications[key];

    addNotification(selectedNotification(() => null, ...args));
  };

  return callNotificationByKey;
};
