'use client';

import { useState } from 'react';

import { Notification } from '../components/notification/Notification';
import {
  InnerNotificationItem,
  NotificationItem,
} from '../components/notification/Notification.types';
import { NotificationContext } from './NotificationContext';

type NotificationProviderProps = {
  children: React.ReactNode;
};

let id = 0;

export const NotificationProvider: React.FC<NotificationProviderProps> = ({
  children,
}) => {
  const [notifications, setNotifications] = useState<InnerNotificationItem[]>(
    [],
  );

  const addNotification = (notification: NotificationItem) => {
    setNotifications((state) => [
      ...state,
      { key: id++, dismissible: true, ...notification },
    ]);
  };

  const deleteNotification = (key: number) =>
    setNotifications((state) =>
      state.filter((notification) => notification.key !== key),
    );

  return (
    <NotificationContext.Provider
      value={{ notifications, addNotification, deleteNotification }}
    >
      {children}
      <Notification />
    </NotificationContext.Provider>
  );
};
