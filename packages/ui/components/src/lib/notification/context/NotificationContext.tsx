'use client';

import { createContext, useContext } from 'react';

import {
  InnerNotificationItem,
  NotificationItem,
} from '../components/notification/Notification.types';

type NotificationContextProps = {
  notifications: InnerNotificationItem[];
  addNotification: (item: NotificationItem) => void;
  deleteNotification: (key: number) => void;
};

export const NotificationContext = createContext<NotificationContextProps>({
  notifications: [],
  addNotification: () => null,
  deleteNotification: () => null,
});

export const useNotification = () => {
  return useContext(NotificationContext);
};
