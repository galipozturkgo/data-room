'use client';

import { useEffect, useState } from 'react';

type Status = 'online' | 'offline';

export const useNetworkStatus = (): Status => {
  const [isOnline, setIsOnline] = useState<Status>(() =>
    typeof navigator !== 'undefined' && typeof navigator.onLine === 'boolean'
      ? navigator.onLine === true
        ? 'online'
        : 'offline'
      : 'online',
  );

  useEffect(() => {
    const setOnline = () => {
      setIsOnline('online');
    };

    const setOffline = () => {
      setIsOnline('offline');
    };

    window.addEventListener('online', setOnline);
    window.addEventListener('offline', setOffline);

    return () => {
      window.removeEventListener('online', setOnline);
      window.removeEventListener('offline', setOffline);
    };
  }, []);

  return isOnline;
};
