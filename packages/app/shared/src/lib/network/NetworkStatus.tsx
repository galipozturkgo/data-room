import { useNotification, WarningIcon } from '@dataroom/ui-components';
import { useNetworkStatus } from '@dataroom/ui-hooks';
import { useAppActions, useStateSelector } from '@dataroom/ui-store';
import { useEffect } from 'react';

const NetworkStatus = () => {
  const networkStatus = useNetworkStatus();
  const { addNotification } = useNotification();
  const { changeNetworkStatus, changeNetworkError } = useAppActions();
  const networkError = useStateSelector((state) => state.app.networkError);

  useEffect(() => {
    changeNetworkStatus(networkStatus);
    if (networkStatus === 'offline') {
      changeNetworkError('NETWORK_ERROR');
    }
  }, [networkStatus, changeNetworkError, changeNetworkStatus]);

  useEffect(() => {
    if (!networkError) {
      return;
    }

    const timer = setTimeout(() => {
      switch (networkError) {
        case 'NETWORK_ERROR':
          addNotification({
            title: 'Connection problem',
            description: 'Please check your internet connection',
            color: 'red',
            icon: <WarningIcon />,
          });
          break;
        case 'ACCESS_ERROR':
          addNotification({
            title: 'Access failure',
            description: 'Our servers are currently unreachable',
            color: 'blue',
          });
          changeNetworkStatus('offline');
          break;
        case 'REQUEST_ERROR':
          addNotification({
            title: 'Your request could not be completed',
            color: 'red',
            icon: <WarningIcon />,
          });
          break;
        case 'INTERVAL_SERVER_ERROR':
          addNotification({
            title: 'Your request could not be completed',
            color: 'red',
            icon: <WarningIcon />,
          });
          break;
        default:
          break;
      }

      changeNetworkError();
    }, 100);

    return () => clearTimeout(timer);
  }, [networkError]);

  return null;
};

export default NetworkStatus;
